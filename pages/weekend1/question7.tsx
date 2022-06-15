import React, { useState } from "react";
const Question7 = () => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </>
  );
};

export default Question7;

// 해답
// 1. 4번
// 2. a / ab / abc / abcd
// 3. 글자가 입력 되는 만큼 렌더링 된다. abcd면 4회이다. 이벤트가 발생할때마다 렌더링을 하기 때문에 onblur를 사용하면 완성한 후에 상태값을 수정할 수 있다.
