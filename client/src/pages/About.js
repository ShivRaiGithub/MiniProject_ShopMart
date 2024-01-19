import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <h4> About Us: </h4>
            <br />
            Welcome to Shop-Mart, your ultimate destination for a seamless online shopping experience! At Shop-Mart, we take pride in providing a user-friendly platform that allows you to explore and purchase a wide array of products from the comfort of your home.
            <br />
            <br />
            Thank you for choosing Shop-Mart - where convenience meets quality. Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
