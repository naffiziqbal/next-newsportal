import React from "react";
import { Card, Space } from "antd";
import Image from "next/image";
const { Meta } = Card;
import { Col, Row } from "antd";
import Link from "next/link";

const style = {
  background: "#fffff9",
  padding: "8px 0",
  marginTrim: "block",
};

const AllNews = ({ allNews }) => (
  <>
    <h1 style={{ textAlign: " center ", margin: "1rem" }}>Trending News</h1>
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ marginTrim: "block-end" }}
    >
      {allNews.map((data) => (
        <Col key={data.id} className="gutter-row" span={8}>
          <Card
            style={style}
            hoverable
            cover={
              <Image
                width={500}
                height={200}
                responsive
                alt="example"
                src={data?.image_url}
              />
            }
          >
            <Meta
              title={data.title}
              description={data.description.slice(0, 70)}
            />
            <button
              style={{
                width: "100%",
                margin: "1rem 0",
                background: "#000",
                color: "#fff",
              }}
            >
              <Link style={{ color: "inherit" }} href={`/news/${data.id}`}>
                See Details
              </Link>
            </button>
          </Card>
        </Col>
      ))}
    </Row>
  </>
);
export default AllNews;
