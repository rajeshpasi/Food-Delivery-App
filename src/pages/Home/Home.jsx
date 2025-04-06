import React from "react";
import Layout from "../../component/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1 />
      </Layout>
    </>
  );
};

export default Home;
