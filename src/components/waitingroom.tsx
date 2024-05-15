import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const waitingroom = () => {
  const [username, setUsername] = useState("");
  const [chatroom, setChatroom] = useState("");
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        // joinChatRoom(username, chatroom);
        //https://www.youtube.com/watch?v=pvi_ZS_PrSc
      }}
    >
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              placeholder="UserName"
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>
            <Form.Control
              placeholder="ChatRoom"
              onChange={(e) => setChatroom(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default waitingroom;
