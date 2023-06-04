import styled from "styled-components";
import { DRAWEditor, initLibrary } from "@kmu-draw/draw-editor";
import "./App.css";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;

initLibrary({
  wasmPath: "",
});

const App = () => {
  return (
    <Wrapper>
      <DRAWEditor />
    </Wrapper>
  );
};

export default App;
