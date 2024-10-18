import { getCurrentAffair_service } from "@/services";
import { decrypt, encrypt, get_token } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CurrentAffCard from "../cards/currentAffCard";
import BlogCard from "../cards/blogCard";
import BlogDetail from "../blogs/blogDetail";
import CurrentAffairDetail from "./currentAffairDetail";
import ErrorPage from "../errorPage";
import LoaderAfterLogin from "../loaderAfterLogin";
import ErrorPageAfterLogin from "../errorPageAfterLogin";
import { useRouter } from "next/router";

const CurrentAffairList = () => {
  const [currentAffList, setCurrentAffList] = useState([]);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showCardError, setShowCardError] = useState(false);
  const [currentAffId, setCurrentAffId] = useState("");
  const [key, setKey] = useState("");
  const router = useRouter()

  useEffect(() => {
    setShowError(false)
    setShowCardError(false)
    fetchCurrentAffair();
  }, []);

  useEffect(() => {
    setKey(currentAffList[0]?.category);
  }, [currentAffList]);

  const fetchCurrentAffair = async () => {
    try{
      const token = get_token();
      const formData = {};
      const response_getCurrentAffairs_service = await getCurrentAffair_service(
        encrypt(JSON.stringify(formData), token)
      );
      const response_getCurrentAffairs_data = decrypt(
        response_getCurrentAffairs_service.data,
        token
      );
      // console.log('response_getCurrentAffairs_data', response_getCurrentAffairs_data)
      if (response_getCurrentAffairs_data?.status) {
        if(response_getCurrentAffairs_data?.data?.length == 0){
          setShowError(true);
        }
        else setCurrentAffList(response_getCurrentAffairs_data.data);
      }
    } catch (error) {
      console.log("error found: ", error)
      router.push('/')
    }
  };

  const handleBlogDetail = (id) => {
    // console.log('id', id);
    setCurrentAffId(id);
    setIsShowDetail(true);
  };
  return (
    <>
      {!isShowDetail ? (
        <section>
          {currentAffList?.length > 0 ?
            <Tabs
              activeKey={key}
              onSelect={(k) => setKey(k)}
              id="uncontrolled-tab-example"
              className="CustomTab mb-3"
            >
              {currentAffList.map((item, index) => {
                return (
                  <Tab
                    eventKey={item.category}
                    title={item.category}
                    key={index}
                    className="CustomTab m-0"
                  >
                    <div className="m-0 w-100" key={index}>
                      <div className="row mt-2">
                        {item.data?.length > 0 ? (
                          item.data.map((blogAry, index) => {
                            return (
                              <CurrentAffCard
                                value={blogAry}
                                handleBlogDetail={handleBlogDetail}
                                key={index}
                              />
                            );
                          })
                        ) : (
                          <ErrorPageAfterLogin />
                        )}
                      </div>
                    </div>
                  </Tab>
                )}
              )}
            </Tabs>
          :
          showError ? 
            <ErrorPageAfterLogin /> 
            :
            <LoaderAfterLogin />
          }
        </section>
      ) : (
        <section>
          <CurrentAffairDetail
            id={currentAffId}
            handleShow={() => setIsShowDetail(false)}
          />
        </section>
      )}
    </>
  );
};

export default CurrentAffairList;
