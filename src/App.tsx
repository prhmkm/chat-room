import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Waitingroom from "./components/waitingroom";
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import ChatRoom from "./components/ChatRoom";
import SendMessage from "./components/SendMessage";

function App() {
  const [conn, setConnection] = useState<any>();
  const [_messages, setMessages] = useState([{ user: "", msg: "" }]);

  const joinChatRoom = async (username: string, chatroom: string) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://localhost:44355/Chat")
        .configureLogging(LogLevel.Information)
        .build();
      //debugger;
      conn.on("JoinToChatRoom", (user, msg) => {
        setMessages((_messages) => [..._messages, { user, msg }]);
      });

      // conn.on("SendMessage", (user, msg) => {
      //   setMessages((_messages) => [..._messages, { user, msg }]);
      // });

      await conn.start();
      await conn.invoke("JoinToChatRoom", { username, chatroom });

      conn.on("SendMessage", (user: string, msg: string) => {
        setMessages((_messages) => [..._messages, { user, msg }]);
      });
      // await conn.invoke("SendMessage", "salam");

      setConnection(conn);
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessageToGroup = async (message: string) => {
    try {
      await conn.invoke("SendMessage", message);
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
          {!conn ? (
            <Waitingroom joinChatRoom={joinChatRoom}></Waitingroom>
          ) : (
            <ChatRoom
              messages={_messages}
              sendMessageToGroup={sendMessageToGroup}
            ></ChatRoom>
          )}
        </Container>
      </div>
    </>
  );
}

export default App;
