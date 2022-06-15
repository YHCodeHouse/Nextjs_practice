import React, { useState } from "react";

const onAdd1 = () => {};
let n1 = 1;
const Question9 = () => {
  let n2 = 2;
  const [count, setCount] = useState(0);

  const onAdd2 = () => {};

  console.log("n1", n1);
  console.log("n2", n2);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>클릭</button>
      <button
        onClick={() => {
          n1 += 1;
          n2 += 1;
          setCount(count + 1);
        }}
      >
        클릭
      </button>
    </>
  );
};

export default Question9;

// 해답
// 1. 차이있음
// 2. 내부 함수는 리렌더링 될 때마다 생성되고 밖의 함수는 처음 구성될 때 한번만 생성됨
