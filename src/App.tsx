import React from 'react';
import styled from "styled-components";
import  io  from "socket.io-client"
import {ChatComponetn} from "./components/chatComponent";



function App() {


  return (
    <Wrap>
        <ChatComponetn/>
    </Wrap>
  );
}
const Wrap = styled.div``
export default App;

