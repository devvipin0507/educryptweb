import React, { useEffect, useState } from "react";
import { useQuery } from 'react-query';
import { decrypt, encrypt, get_token } from "@/utils/helpers";
import { getLiveTestService } from "@/services";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LiveTestCard from "../cards/liveTestCard";
import { useRouter } from "next/router";
import ErrorPageAfterLogin from "../errorPageAfterLogin";
import LoaderAfterLogin from "../loaderAfterLogin";
import toast, { Toaster } from "react-hot-toast";

const LiveTest = () => {
  const [key, setKey] = useState('LIVE');
  const [showError, setShowError] = useState(false);
  const router = useRouter();
  const token = get_token();

  const fetchLiveTest = async (type) => {
    const formData = {
      page: 1,
      type: type,
    };
    const encryptedData = encrypt(JSON.stringify(formData), token);
    const response = await getLiveTestService(encryptedData);
    const decryptedData = decrypt(response.data, token);

    if (!decryptedData?.status) {
      if (decryptedData.message === msg) {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user_id");
        router.push("/");
      }
      throw new Error(decryptedData.message || "Error fetching data");
    }

    return decryptedData.data;
  };

  const { data: liveTests, isLoading, isError } = useQuery(
    ['liveTests', key],
    () => fetchLiveTest(key === 'LIVE' ? 0 : key === 'UPCOMING' ? 1 : 2),
    {
      onError: () => {
        setShowError(true);
      },
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const handleTabChange = (k) => {
    setKey(k);
    setShowError(false); // Reset the error when changing tabs
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: { style: { opacity: '1' } },
          error: { style: { opacity: '1' } },
        }}
      />
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="LIVE"
              id="uncontrolled-tab-example"
              className="CustomTab mb-3"
              activeKey={key}
              onSelect={(k) => handleTabChange(k)}
            >
              {['LIVE', 'UPCOMING', 'COMPLETED'].map((tabKey) => (
                <Tab eventKey={tabKey} title={tabKey} key={tabKey}>
                  <div className="row">
                    {isLoading ? (
                      <LoaderAfterLogin />
                    ) : isError || !liveTests?.length ? (
                      <ErrorPageAfterLogin />
                    ) : (
                      liveTests.map((item, index) => (
                        <LiveTestCard testData={item} value={key} key={index} />
                      ))
                    )}
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveTest;
