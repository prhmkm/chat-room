interface Props {
  messages: { user: string; msg: string }[];
}
const MessagesContainer = ({ messages }: Props) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <table>
          {msg.user != "" ? (
            <tr key={index}>
              <td>
                {msg.user} : {msg.msg}
              </td>
            </tr>
          ) : (
            <></>
          )}
        </table>
      ))}
    </div>
  );
};

export default MessagesContainer;
