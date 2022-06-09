import React, { useState } from "react";

const onAdd1 = () => {};
const Question9 = () => {
  const [count, setCount] = useState(0);

  const onAdd2 = () => {};
  return (
    <>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </>
  );
};

export default Question9;

// 해답
// 1. 차이없음
// 2. 다만 코드의 가독성을 위한 개발자 재량이다.
