import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef } from "react"; 
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { useRouter } from "next/router";
import Card1 from "@/component/cards/card1";
import { get_token, isValidData } from "@/utils/helpers";
import { getCourse_service } from "@/services";
import { encrypt, decrypt } from "@/utils/helpers";
import * as Icon from "react-bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import ErrorPage from "@/component/errorPage";
import Loader from "@/component/loader";

const OC_image = "/assets/images/courseRightImg.svg";

// Dynamically import OnlineCourse component without server-side rendering
const OnlineCourse = dynamic(() => {
  return Promise.resolve(OriginalOnlineCourse);
}, { ssr: false });

const OriginalOnlineCourse = () => {
  const [showError, setShowError] = useState(false);
  const [onlineCourse, setOnlineCourse] = useState([]);
  const [id, setId] = useState('');
  const [titleName, setTitleName] = useState('');
  const [cat_description, setCat_description] = useState('');
  const Router = useRouter();
  const { onlineCourseID } = Router.query;
  const courseTypeData = useSelector((state) => state.allCategory?.allCategory?.course_type_master);
  
  // Check if the component is mounted due to navigation or refresh
  const isMounted = useRef(false);

  useEffect(() => {
    // Check if there is a saved state in localStorage
    const savedData = localStorage.getItem("onlineCourseID");
    console.log("savedData", savedData)
    if (savedData) {
      // If there's saved data, use it
      const [savedTitle, savedId] = savedData.split(":");
      setTitleName(savedTitle);
      setId(savedId);
      fetchCourseDetail(savedId); // Fetch data using saved ID
    } else if (onlineCourseID) {
      // If there are new route query parameters, save them
      const courseId = onlineCourseID.slice(onlineCourseID.indexOf(':') + 1);
      const courseTitle = onlineCourseID.slice(0, onlineCourseID.indexOf(':'));
      setTitleName(courseTitle);
      setId(courseId);
      localStorage.setItem("onlineCourseID", onlineCourseID); // Save to localStorage
      fetchCourseDetail(courseId); // Fetch data using the new ID
    }
    
    setShowError(false);
  }, [onlineCourseID, courseTypeData]);

  useEffect(() => {
    if (titleName) {
      const category = courseTypeData?.find(item => item.name === titleName);
      setCat_description(category ? category.description : '');
    }
  }, [titleName, courseTypeData]);

  const fetchCourseDetail = async (id) => {
    try {
      const token = get_token();
      const formData = {
        'course_type': id,
        'page': 1,
        'sub_cat': 1,
        'main_cat': 0,
      };
      const response_getCourse_service = await getCourse_service(encrypt(JSON.stringify(formData), token));
      const response_getCourse_data = decrypt(response_getCourse_service.data, token);
      console.log('response_getCourse_data', response_getCourse_data);
      if (response_getCourse_data.status) {
        if (response_getCourse_data.data?.length === 0) {
          setShowError(true);
        } else {
          setOnlineCourse(response_getCourse_data.data);
        }
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.log("error found: ", error);
    }
  };

  useEffect(() => {
    // Check if the component is mounted
    if (onlineCourse.length === 0 && isMounted.current) {
      setShowError(true);
    } else {
      isMounted.current = true;
    }
  }, [onlineCourse]);

  return (
    <>
      <Header />
      <div className="container-fluid p-0 mt-5">
        <div className={titleName && (titleName === "Bookstore" || titleName === "e-BOOK" || titleName === "Books") ? `bookStoreContainer row` : `course_Container row`}>
          <div className="col-md-12 m-0" style={{ paddingTop: "15px" }}>
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-0 cursor">
                <li className="breadcrumb-item" onClick={() => Router.back()}>
                  {`Home`}
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="breadcrumb-item active">
                  {`${titleName}`}
                  <i className="bi bi-chevron-right"></i>
                </li>
              </ol>
            </nav>
          </div>
          <div className={`col-sm-12 col-md-8 ${titleName && (titleName === "Bookstore" || titleName === "e-BOOK" || titleName === "Books") ? `col-lg-6` : `col-lg-8`}`}>
            <div className="onlineCourseTitle">
              <p className="mb-1 title">{titleName}</p>
              <p className="onlineCourseDetail" dangerouslySetInnerHTML={{ __html: cat_description }}></p>
            </div>
          </div>
          <div className={`col-sm-12 col-md-4 d-none d-sm-none d-md-none d-lg-block course_imageContainer ${titleName && (titleName === "Bookstore" || titleName === "e-BOOK" || titleName === "Books") ? `col-lg-6` : `col-lg-4`}`}>
            <div className="imgContainer">
              {titleName && (titleName === "Bookstore" || titleName === "e-BOOK" || titleName === "Books") ? (
                <img className="bookImg pb-4" src="/assets/images/bookStoreRightImg.svg" alt="" />
              ) : (
                <img src={OC_image} alt="" />
              )}
            </div>
          </div>
        </div>
        <div className="course_cardContainer onlineCourse mb-3">
          <div className="row">
            {onlineCourse.length > 0 ? 
              onlineCourse.map((item, index) => (
                <Card1 value={item} titleName={titleName} key={index} />
              ))
              :
              showError ? 
                <ErrorPage message="No Data found! Unable to locate data, seeking alternative methods for retrieval." />
                :
                <Loader />
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OnlineCourse;
