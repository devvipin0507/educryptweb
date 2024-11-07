import Footer from '@/component/footer/footer';
import Header from '@/component/header/header';
import { policyService } from '@/services';
import { decrypt, get_token } from '@/utils/helpers';
import React from 'react';

const Index = ({ policyData }) => {
  return (
    <>
      <Header />
      <div className="container-fluid privacyPolicy">
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: policyData && policyData }}
        ></div>
      </div>
      <Footer />
    </>
  );
};

// This function will run on the server and pass data to the page as props
export async function getServerSideProps(context) {
  let policyData = '';
  
  try {
    // Fetching the policy data directly on the server side
    const response_policy_service = await policyService();
    
    // Check if response is successful
    if (response_policy_service.status) {
      policyData = response_policy_service.data;
    }
  } catch (error) {
    console.log("Error while fetching policy:", error);
  }

  // Return the policyData as a prop to be injected into the component
  return {
    props: {
      policyData,
    },
  };
}

export default Index;
