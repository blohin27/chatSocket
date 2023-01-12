import io from "socket.io-client";
import styled from "styled-components";
import { Simulate } from "react-dom/test-utils";
import submit = Simulate.submit;

const socket = io(
  "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
);
export const ChatComponetn = () => {
  socket.send("Hell!!!");
  console.log(socket.send("Hell!!!"));
  return (
    <div>
      <form>
        <Wrap>
          <input
            id={"oneInput"}
            name={"name"}
            placeholder={"Имя"}
            type={"text"}
          ></input>
          <input
            id={"twoInput1"}
            name={"age"}
            placeholder={"Возраст"}
            type={"text"}
          ></input>
        </Wrap>
        <input type={"submit"} value={"send"} />
      </form>
    </div>
  );
};
const Wrap = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`;
