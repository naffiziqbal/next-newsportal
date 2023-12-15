import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const News_Details = () => {
  return <div>This Is News Details Page</div>;
};

export default News_Details;

News_Details.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
