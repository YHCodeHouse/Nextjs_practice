import React, { useState } from "react";
const Question6 = () => {
  const [numArr, setNumArr] = useState<number[]>([]);

  const onChangeNumArr = () => {
    numArr.push(numArr.length);

    setNumArr([...numArr]);
  };
  console.log("numArr", numArr);
  return (
    <>
      <button onClick={onChangeNumArr}>숫자추가</button>
    </>
  );
};

export default Question6;

// 해답
// 1. []
// 2. 0
// 3. 기존 코드에서는 React가 배열 또는 객체를 바꾸는 경우 해당 주소값은 바뀌지 않기 때문에 집 안에 있는 요소들을 바꾸어주어야 한다. 그렇기 때문에 배열을 통째로 바꾸려고 하면 state는 변하지 않고 내부의 구성요소를 ...을 이용해서 바꾸어주면 state가 변경됨을 알 수 있다.
