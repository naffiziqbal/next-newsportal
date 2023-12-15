import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const News_Details = ({ news }) => {
  console.log(news);
  return <div>This Is News Details Page</div>;
};

export default News_Details;

News_Details.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  console.log(data, "Statics Paths");

  const paths = data?.map((data) => ({
    params: { news_details: data?.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params?.news_details}`);
  const data = await res.json();
  console.log(data, "StaticsProps");

  return {
    props: {
      news: data,
    },
  };
};
