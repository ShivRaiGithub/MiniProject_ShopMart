import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            <h4>Privacy Policy for Shop-Mart:</h4>
            <br />
            At Shop-Mart, we are committed to protecting your privacy and ensuring the security of your personal information.
            <br />
            <strong>1  Information Collection: </strong> We collect essential user data, such as name and contact details, for order processing and personalization purposes.
            <br />

            <strong>2  Data Security:</strong>  Your information is secured to prevent unauthorized access.
            <br />

            <strong>3  Cookies:</strong>  We use cookies for an improved browsing experience; you can manage preferences through your browser settings.
            <br />

            <strong>4  Third-Party Services:</strong>  Some third-party services may access your data to enhance our website functionality.
            <br />

            <strong>5  Information Sharing:</strong>  We do not sell or trade your personal information to external parties without your consent.
            <br />

            <strong>6  Data Retention:</strong>  Your information is retained only as long as necessary for transaction purposes or as required by law.
            <br />

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
