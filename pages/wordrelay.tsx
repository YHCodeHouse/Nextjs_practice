import React, { useState } from "react";
import styled from "@emotion/styled";

interface Result {
  result: string;
}
export default function WordRelay() {
  const [word, setWord] = useState("김영호");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue("");
      setResult("딩동댕");
    } else {
      setValue("");
      setResult("땡");
    }
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Word>
        <h1>{word}</h1>
      </Word>
      <SubmitWord onSubmit={onSubmitForm}>
        <input value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </SubmitWord>
      <Result result={result}>{result}</Result>
    </>
  );
}

const Word = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center"
  };
});

const SubmitWord = styled("form")(() => {
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
