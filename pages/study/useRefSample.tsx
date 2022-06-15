import React, { useRef, useState } from "react";

const App = () => {
  let [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  function increaseVar() {
    countVar = countVar + 1;
    console.log("var ", countVar);
  }

  function increaseRef() {
    countRef.current = countRef.current + 1;
    console.log("ref", countRef.current);
  }

  function doRendering() {
    setRenderer(renderer++);
  }

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var = {countVar}</p>
      <button onClick={doRendering}>렌더! {renderer}번</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
    </div>
  );
};
export default App;
//기존 React에서 State가 변화한다 -> component를 다시 불러온다 -> 함수형이니까 재호출한다
