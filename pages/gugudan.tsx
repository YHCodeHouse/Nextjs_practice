import { useRouter } from "next/router";
import React, { useState, useRef } from "react";

interface InitProps {
  first: number;
  second: number;
}

export default function GuGuDan(init: InitProps) {
  const [first, setFirst] = useState(init.first);
  const [second, setSecond] = useState(init.second);
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirst(first);
    setSecond(second);
    setValue(e.target.value);
    setResult("");
  };

  const onSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      setResult(() => {
        return "정답 : " + value;
      });
    } else {
      setValue("");
      setResult("땡");
    }
  };

  return (
    <>
      <div>
        <h1>
          {first} 곱하기 {second} 는?
        </h1>
      </div>
      <form
        onSubmit={e => {
          onSubmitInput(e);
        }}
      >
        <input
          type="number"
          value={value}
          onChange={e => {
            onChangeInput(e);
          }}
        />

        <button type="submit">입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
}

GuGuDan.getInitialProps = () => {
  const first = Math.ceil(Math.random() * 9);
  const second = Math.ceil(Math.random() * 9);
  return { first, second };
};
