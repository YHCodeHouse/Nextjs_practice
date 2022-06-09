import React, { useState } from "react";
const Question4 = () => {
  const [count, setCount] = useState(0);

  const onChangeCount = () => {
    setCount(1);
    setCount(2);
    setCount(3);
    setCount(-1);
    console.log("count 1", count);
  };
  console.log("count 2", count);
  return (
    <>
      <button onClick={onChangeCount}>버튼</button>
    </>
  );
};

export default Question4;

// 해답
// 1. count 1 0 / count 2 -1
// 2. 1회
// 3. react는 16ms 동안 변경된 state를 동시에 모아서 batch update 리렌더링을 실시한다. 그렇기 때문에 이 과정에서는 setState 갯수에 관계없이 버튼을 누를 때에만 리렌더링이 진행된다. 그리고 콘솔창에는 이전 값이 출력되는데 비동기처리로 인해 바로 변경이 되지 않는 결과가 나타난다.
