import { Card, Button, Modal } from "antd";
import React, { useState } from "react";

import "antd/dist/antd.css";

const { Meta } = Card;

function NewsBox({ article }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Card
      hoverable
      style={{
        width: 340,
      }}
      cover={<img alt="article" src={article.image} />}
    >
      <Meta title={article.title} description={article.description} />
      <Button type="primary" onClick={showModal}>
        Read More
      </Button>
      <Modal
        title={article.description}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{article.content}</p>
        <Button type="link" target="_blank" href={article.url}>
          Continue reading here...
        </Button>
      </Modal>
      <p>{article.publishedAt}</p>
    </Card>
  );
}

export default NewsBox;
