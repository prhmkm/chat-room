import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Waitingroom from "./components/waitingroom";
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

function App() {
  const [conn, setConnection] = useState<any>();
  //const [_chatRoom,_setChatRoom] = useState("");
  const [_message,_setMessage] = useState("");


  const joinChatRoom = async (username: string, chatroom: string) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://localhost:7168/Chat")
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("JoinToChatRoom", (user, msg) => {
        console.log("msg : ", msg);
      });

      await conn.start();
      await conn.invoke("JoinToChatRoom", { username, chatroom });

      setConnection(conn);
    } catch (e) {
      console.log(e);
    }
  };
  const SendMessageToGroup = async (_message: string) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://localhost:7168/Chat")
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("SendMessageToGroup", (user, msg) => {
        console.log("msg : ", msg);
      });

      await conn.start();
      await conn.invoke("JoinToChatRoom", { username, chatroom });

      setConnection(conn);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to GWM chatroom</h1>
            </Col>
          </Row>
          <Waitingroom joinChatRoom={joinChatRoom}></Waitingroom>
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        SendMessageToGroup(_message);
        //https://www.youtube.com/watch?v=pvi_ZS_PrSc
      }}
    >
      <Row className="px-5 py-5">
        <Col sm={12}>
          <Form.Group>
            <Form.Control
              placeholder="Message"
              onChange={(e) => _setMessage(e.target.value)}
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
        </Container>
      </div>
    </>
  );
}

export default App;
