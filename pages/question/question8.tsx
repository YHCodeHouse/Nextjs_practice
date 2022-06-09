import React, { useState, useRef } from "react";
const Question8 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  if (inputRef.current) {
    console.log(inputRef.current.value);
  }
  return (
    <>
      <input ref={inputRef} />
    </>
  );
};

export default Question8;

// 해답
// 1. 0
// 2. 출력값 없음
// 3. input창에 입력해도 아무런 변화가 없다. useRef는 useState와 달리 상태가 변해도 리렌더링하지 않는다.
