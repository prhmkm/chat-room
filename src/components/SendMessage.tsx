import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

interface Props {
  sendMessageToGroup: (message: string) => void;
}

const SendMessage = ({ sendMessageToGroup }: Props) => {
  const [message, setMessage] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessageToGroup(message);
        setMessage("");
      }}
    >
      <Row className="px-5 py-5">
        <Col sm={12}>
          <Form.Group>
            <Form.Control
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col sm={12}>
          <hr />
          <Button variant="success" type="submit">
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SendMessage;
