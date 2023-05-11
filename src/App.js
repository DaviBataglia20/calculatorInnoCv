import { MainContain } from "./Styled-Components";
import Inputs from "./Components/Inputs/Inputs";
import Buttons from "./Components/Buttons/Buttons";
import { useState } from "react";
function App() {
  const [input,setInput] = useState("");
  return (
    <MainContain>
        <Inputs  input={input} />
        <Buttons input={input} setInput={setInput} />
    </MainContain>
  );
}

export default App;
