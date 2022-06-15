import React, { useState } from "react";
const Question5 = () => {
  const [count, setCount] = useState(0);

  const onChangeCount = () => {
    console.log("count 1", count);
    setCount(count + 1);
    console.log("count 2", count);
    setCount(count + 2);
    console.log("count 3", count);
    setCount(count + 3);
    console.log("count 4", count);
  };
  console.log("count 5", count);
  return (
    <>
      <button onClick={onChangeCount}>버튼</button>
    </>
  );
};

export default Question5;

// 해답
// 1. count 1 0 / count 2 0 / count 3 0 / count 4 0 / count 5 3
// 2. batch update 관련되며 마지막 setCount가 된 count위주로 출력이 된다. 함수밖은 변경완료된 카운트 함수 안에는 이전 값이 출력된다 동일하게
