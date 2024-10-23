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

const OnlineCourse = () => {
  const [showError, setShowError] = useState(false);
  const [onlineCourse, setOnlineCourse] = useState('');
  const [id, setId] = useState('');
  const [titleName, setTitleName] = useState('');
  const [cat_description, setCat_description] = useState('');

  const Router = useRouter();
  const { onlineCourseID } = Router.query;
  const courseTypeData = useSelector((state) => state.allCategory?.allCategory?.course_type_master);

  useEffect(() => {
    if (onlineCourseID) {
      const courseId = onlineCourseID.split(':')[1]; // Get ID from onlineCourseID
      const courseName = onlineCourseID.split(':')[0]; // Get Name from onlineCourseID
      setId(courseId);
      setTitleName(courseName);
      localStorage.setItem("redirectdetails", Router.asPath);
      fetchCourseDetail(courseId);
    }
  }, [onlineCourseID, courseTypeData]);

  useEffect(() => {
    if (titleName) {
      setCat_description(courseTypeData?.filter(item => item.name === titleName));
    }
  }, [titleName, courseTypeData]);

  const fetchCourseDetail = async (courseId) => {
    try {
      const token = get_token();
      const formData = {
        'course_type': courseId,
        'page': 1,
        'sub_cat': 1,
        'main_cat': 0,
      };
      const response_getCourse_service = await getCourse_service(encrypt(JSON.stringify(formData), token));
      const response_getCourse_data = decrypt(response_getCourse_service.data, token);
      if (response_getCourse_data.status) {
        if (response_getCourse_data?.data?.length === 0) {
          setShowError(true);
        } else {
          setOnlineCourse(response_getCourse_data?.data);
        }
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error("Error found: ", error);
      setShowError(true);
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid p-0 mt-5">
        <div className={`row ${titleName && (titleName === "Bookstore" || titleName === "e-BOOK" || titleName === "Books") ? 'bookStoreContainer' : 'course_Container'}`}>
          <div className="col-md-12 m-0" style={{ paddingTop: "15px" }}>
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-0 cursor">
                <li className="breadcrumb-item" onClick={() => Router.back()}>
                  Home <i className="bi bi-chevron-right"></i>
                </li>
                <li className="breadcrumb-item active">
                  {titleName} <i className="bi bi-chevron-right"></i>
                </li>
              </ol>
            </nav>
          </div>
          <div className={`col-sm-12 col-md-8 ${titleName && (titleName === "Bookstore" || titleName === "e-BOOK" || titleName === "Books") ? 'col-lg-6' : 'col-lg-8'}`}>
            <div className="onlineCourseTitle">
              <p className="mb-1 title">{titleName}</p>
              <p className="onlineCourseDetail" dangerouslySetInnerHTML={{ __html: cat_description?.[0]?.description }}>
              </p>
            </div>
          </div>
          <div className={`col-sm-12 col-md-4 d-none d-lg-block course_imageContainer ${titleName && (titleName === "Bookstore" || titleName === "e-BOOK" || titleName === "Books") ? 'col-lg-6' : 'col-lg-4'}`}>
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
            {onlineCourse?.length > 0 ?
              onlineCourse.map((item, index) => (
                <Card1 value={item} titleName={titleName} key={index} />
              )) :
              showError ?
                <ErrorPage /> :
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
