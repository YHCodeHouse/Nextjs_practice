import React, { useState, useRef } from "react";
import styled from "@emotion/styled";

interface InitProps {
  first: number;
  second: number;
}
interface Result {
  result: string;
}
export default function GuGuDan(init: InitProps) {
  const [first, setFirst] = useState(init.first);
  const [second, setSecond] = useState(init.second);
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

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
      <Question>
        <h1>
          {first} 곱하기 {second} 는?
        </h1>
      </Question>
      <SubmitNumber
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
      </SubmitNumber>
      <Result result={result}>{result}</Result>
    </>
  );
}

GuGuDan.getInitialProps = () => {
  const first = Math.ceil(Math.random() * 9);
  const second = Math.ceil(Math.random() * 9);
  return { first, second };
};

const Question = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center"
  };
});

const SubmitNumber = styled("form")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    height: "30px",
    width: "100%"
  };
});

const Result = styled("div")((props: Result) => {
  const { result } = props;
  return {
    display: "flex",
    justifyContent: "center",
    color: result === "땡" ? "red" : "blue"
  };
});
