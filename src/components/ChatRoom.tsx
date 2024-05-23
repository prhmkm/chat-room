import { Col, Row } from "react-bootstrap";
import MessagesContainer from "./MessagesContainer";
import SendMessage from "./SendMessage";

interface Props {
  messages: { user: string; msg: string }[];
  sendMessageToGroup: (message: string) => void;
}

const ChatRoom = ({ messages, sendMessageToGroup }: Props) => {
  return (
    <div>
      <Row className="px-5 py-5">
        <Col sm={10}>
          <h2>ChatRoom</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row className="px-5 py-5">
        <Col>
          <MessagesContainer messages={messages} />
        </Col>
        <Col>
          <SendMessage sendMessageToGroup={sendMessageToGroup} />
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoom;
