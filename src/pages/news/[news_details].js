import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Flex, Row } from "antd";
import Image from "next/image";

const News_Details = ({ news }) => {
  console.log(news);
  return (
    // <div>{news.title}</div>
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div>
            <Image src={news?.image_url} width={500} height={300} alt="Image" />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <div>
              <h2>{news?.title}</h2>
              <p>{news?.description}</p>
            </div>
            <div justify={"between"} align={"center"}>
              <p>{news?.author}</p>
              <p>{news?.release_date}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default News_Details;

News_Details.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const data = await res.json();
//   console.log(data, "Statics Paths");

//   const paths = data?.map((data) => ({
//     params: { news_details: data?.id },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
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
