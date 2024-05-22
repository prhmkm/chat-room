import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Waitingroom from "./components/waitingroom";
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

function App() {
  const [conn, setConnection] = useState<any>();

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
        </Container>
      </div>
    </>
  );
}

export default App;
