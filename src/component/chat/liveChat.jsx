import React, { useState, useEffect, useRef } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, update, push } from "firebase/database";
import { format } from "date-fns";
import { ImAttachment } from "react-icons/im";
import AWS from "aws-sdk";
import { FaFilePdf, FaRegFilePdf, FaTimesCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8ISZRq949XJrbNeZm0gK54d9Q3zAzBtI",
  authDomain: "lab-elsaq-education.firebaseapp.com",
  databaseURL: "https://lab-elsaq-education-default-rtdb.firebaseio.com",
  projectId: "lab-elsaq-education",
  storageBucket: "lab-elsaq-education.appspot.com",
  messagingSenderId: "413835077933",
  appId: "1:413835077933:web:e9ad389b4f0e203dfa0ba4",
  measurementId: "G-1527TMN738",
};

// Initialize Firebase

const S3_BUCKET = process.env.NEXT_PUBLIC_S3_BUCKET;
const REGION = process.env.NEXT_PUBLIC_S3_REGION;

const LiveChat = ({ chat_node, course_id, isPublic }) => {
  const [chatData, setChatData] = useState([]);
  const [input, setInput] = useState("");
//   const [uniqueId, setUniqueId] = useState(chat_node); // Example unique ID
  const [userId, setUserId] = useState("");
  const chatContainerRef = useRef(null);
  const [file, setFile] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]);
  const [progress, setProgress] = useState("");
  const [type, setType] = useState("text");
  const fileInputRef = useRef(null);

//   console.log('isPublic', isPublic)

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app); // Get Firebase Realtime Database instance

  AWS.config.update({
    region: REGION,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-south-1:52721cc8-3b0f-47d4-a23a-50c387baee06", // Replace with your Cognito Identity Pool ID
    }),
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  useEffect(() => {
    // console.log("chat_node",chat_node)
    const app_id = localStorage.getItem("appId");
    setUserId(localStorage.getItem("user_id"));
    const chatRef = ref(
      database,
      `${app_id}/chat_master/${chat_node}/${isPublic ? "1TOM" : "1TO1"}`
    );
    // console.log(chatRef)
    const unsubscribe = onValue(chatRef, (snapshot) => {
      const value = snapshot.val();
    //   console.log('value', value)
      if (value) {
        const messagesArray = value ? Object.values(value) : [];
        setChatData(messagesArray);
        // console.log('messagesArray', messagesArray)
      }
    });


    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [chat_node, chatData]);

  useEffect(() => {
    // Scroll to the bottom when chatData changes
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatData]);

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    console.log("file978798", file);

    try {
      const uploadedUrl = type != "text" ? await uploadFile(input) : input; // Wait for uploadFile to complete

      const app_id = localStorage.getItem("appId");
      const userName = localStorage.getItem("userName");
      const curr_date = new Date();
      console.log(convertToTimestamp(curr_date));

      if (uploadedUrl) {
        console.log("Uploaded URL:", uploadedUrl, type);
        const statusRef = ref(
          database,
          `${app_id}/chat_master/${chat_node}/${isPublic ? "1TOM" : "1TO1"}`
        );
        push(statusRef, {
          date: convertToTimestamp(curr_date),
          id: userId,
          is_active: "1",
          message: uploadedUrl,
          name: userName,
          platform: "4",
          profile_picture: "",
          type: type,
          course_id: course_id,
          mobile: "",
        })
          .then(() => {
            console.log("Status updated successfully");
            setInput("");
            setImagePreviews([]);
            setFile(null);
            setProgress("");
            setType("text");
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          })
          .catch((error) => {
            console.error("Error updating status:", error);
          });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const convertToTimestamp = (dateString) => {
    const date = new Date(dateString);
    return date.getTime(); // Convert milliseconds to seconds
  };

  const formatTime = (date) => {
    const cr_date = new Date(date * 1000);
    if (cr_date) {
      return format(cr_date, "h:mm a");
    }
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    console.log("myfile", e.target.value);
    const SelectFile = e.target.files;
    console.log("SelectFile", SelectFile[0]);
    if (SelectFile.length) {
      setInput(SelectFile[0]);
      setFile(SelectFile[0]);
      const imageUrls = Array.from(SelectFile).map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews(imageUrls);
      if (SelectFile[0]?.type.includes("image")) {
        setType("image");
      } else if (SelectFile[0]?.type.includes("pdf")) {
        setType("pdf");
      }
    }
    console.log(SelectFile);
  };

  const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
      const params = {
        ACL: "public-read",
        Body: file,
        Bucket: S3_BUCKET,
        Key: file.name,
      };

      myBucket
        .putObject(params)
        .on("httpUploadProgress", (evt) => {
          setProgress(Math.round((evt.loaded / evt.total) * 100));
        })
        .send((err) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the promise if there is an error
          } else {
            const uploadedImageUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${file.name}`;
            console.log("File uploaded successfully. URL:", uploadedImageUrl);
            resolve(uploadedImageUrl); // Resolve the promise with the URL
          }
        });
    });
  };

  const handleDeleteImage = () => {
    setInput("");
    setImagePreviews([]);
    setFile(null);
    setProgress("");
    setType("text");
    // Clear the file input value to allow re-selecting the same file
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handlePdf = (value) => {
    if (typeof window !== "undefined") {
      window.open(value, "_blank");
    }
  };

  return (
    <>
      <div className="chat-conversation" >
        {/* {console.log('caht', chatData)} */}
        <div class="simplebar-content-wrapper">
          <div
            class="simplebar-content live-content"
            style={{ overflowY: "hidden" }}
            ref={chatContainerRef}
          >
            <ul
              class="list-unstyled chat-conversation-list"
            //   ref={chatContainerRef}
              id="chat-conversation-list"
            >
              {chatData?.length > 0 &&
                chatData.map((chat, index) => (
                  <div
                    key={index}
                    className={`chat-list ${userId === chat.id ? "right" : "left"}`}
                  >
                     <div class="conversation-list">
                      <div class="user-chat-content">
                        <div class="ctext-wrap">
                          <div
                            class={`ctext-wrap-content ${
                              userId === chat.id ? "" : "left-in"
                            }`}
                          >
                            <p class="mb-0 ctext-content-live">
                              <h5 class="conversation-name mb-2">
                                {chat.name}
                              </h5>

                              {chat?.type == "text" && chat?.message}
                              {chat?.type == "image" && (
                                <img src={chat?.message} alt="" />
                                )}
                                {chat?.type == "pdf" && (
                                <div
                                    onClick={() => handlePdf(chat?.message)}
                                    style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "10px",
                                    cursor: "pointer",
                                    }}
                                >
                                    <FaRegFilePdf size={24} color="red" />{" "}
                                    <span style={{ marginLeft: "10px" }}>
                                    {chat?.message.substring(
                                        chat?.message.lastIndexOf("/") + 1
                                    ) || "No PDF selected"}
                                    </span>
                                </div>
                                )}
                            </p>
                          </div>
                        </div>
                        <div class="left-time">
                          <small
                            class="dropdown-btn text-muted mb-0 ms-2"
                            tabindex="0"
                          >
                            {chat?.date && formatTime(chat?.date)} |{" "}
                            <i class="bi bi-three-dots-vertical"></i>
                          </small>
                        </div>
                      
                      </div>
                    </div>
                    {/* <div className="profileImg">
                      <img
                        className="UserRateImg"
                        src={
                          chat?.profile_picture
                            ? chat?.profile_picture
                            : "/assets/images/profile.png"
                        }
                        alt="User profile"
                      />
                    </div> */}
                    {/* <div className="message-content">
                      <p className="name">{chat.name}</p>
                      <div className="message-text">
                        {chat?.type == "text" && <h5>{chat?.message}</h5>}
                        {chat?.type == "image" && (
                          <img src={chat?.message} alt="" />
                        )}
                        {chat?.type == "pdf" && (
                          <div
                            onClick={() => handlePdf(chat?.message)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "10px",
                              cursor: "pointer",
                            }}
                          >
                            <FaRegFilePdf size={24} color="red" />{" "}
                            <span style={{ marginLeft: "10px" }}>
                              {chat?.message.substring(
                                chat?.message.lastIndexOf("/") + 1
                              ) || "No PDF selected"}
                            </span>
                          </div>
                        )}
                        <p className="timestamp">
                          {chat?.date && formatTime(chat?.date)}
                        </p>
                      </div>
                    </div> */}
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <pre>{JSON.stringify(chatData, null, 2)}</pre> */}
      <form className="chat_input" onSubmit={handleUpdateStatus}>
        {imagePreviews[0] && (
            <FaTimesCircle
              onClick={handleDeleteImage}
              style={{
                position: "absolute",
                left: "35px", // Adjust position based on your layout
                top: "5px",
                cursor: "pointer",
                color: "red",
                fontSize: "18px",
              }}
            />
          )}

          <span
            className="input-group-prepend"
            data-toggle="modal"
            data-target="#fileUpload"
            onClick={handleFileClick}
          >
            <ImAttachment />
            <input
              type="file"
              accept=".pdf, image/png, image/jpeg, image/jpg, image/gif"
              onChange={handleFileChange}
              ref={fileInputRef} // Assign ref to the file input
              style={{ display: "none" }}
            />
          </span>
        <div style={{ position: "relative", display: "inline-block" }}>
          <input
            type="text"
            value={imagePreviews[0] ? "" : input} // Disable text if image is selected
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type Something..."
            style={{
              backgroundImage: imagePreviews[0]
                ? `url(${imagePreviews[0]})`
                : "none",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
              paddingLeft: "50px", // Add padding to make space for the preview
            }}
            disabled={!!imagePreviews[0]} // Disable input when an image is selected
          />

          {/* Delete icon over the image */}
        </div>
        <button
          className="btn btn-warning bg_color text-white"
          style={{ width: "15%" }}
          type="submit"
        >
          <i className="bi bi-send-fill" style={{ fontSize: "20px" }}></i>
        </button>
      </form>
    </>
  );
};

export default LiveChat;
