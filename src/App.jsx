import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <center className=" h-screen bg-slate-300 ">
      <h1 className="text-5xl m-4 font-bold">Calculator</h1>
      <div className="border-2 border-black w-72 rounded-2xl m-5  bg-slate-800">
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
      <h6 className=" font-serif float-right mr-10">by Suryansh Singh</h6>
    </center>
  );
}

export default App;
