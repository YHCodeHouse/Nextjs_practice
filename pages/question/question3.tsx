import React, { useState } from "react";

const Question3 = () => {
  let [count, setCount] = useState(0);
  let [toggle, setToggle] = useState(false);
  const onChangeCount = () => {
    count += 1;
  };
  const onChangeCount2 = () => {
    setToggle(prev => !prev);
  };

  console.log("count", count);
  return (
    <>
      <button onClick={onChangeCount}>버튼</button>
      <button onClick={onChangeCount2}>변경</button>

      <div>리렌더링 횟수:{count}</div>
    </>
  );
};

export default Question3;

// 해답
// 1. 0
// 2. count 0
// 3. count 변수를 setState가 아닌 기존 변수의 값을 바꾸어준 것이므로 아무 의미가 없다. 그래서 콘솔창에도 최초 선언 값인 0만 한 번 뜬다. 코드를 위와 같이 바꿨을 경우
//    setState에 따라 state 값이 변경되면 리렌더링이 되고 0,1,2,3가 출력되는 것을 볼 수 있다.
