import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

interface Props {
  joinChatRoom: (username: string, chatroom: string) => void;
}

const waitingroom = ({ joinChatRoom }: Props) => {
  const [username, setUsername] = useState("");
  const [chatroom, setChatroom] = useState("");
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        joinChatRoom(username, chatroom);
        //https://www.youtube.com/watch?v=pvi_ZS_PrSc
      }}
    >
      <Row className="px-5 py-5">
        <Col sm={12}>
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
        <Col sm={12}>
          <hr />
          <Button variant="success" type="submit">
            Join
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default waitingroom;
