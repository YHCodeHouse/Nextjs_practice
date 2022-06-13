import React, { useState } from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

interface Result {
  result: string;
}
export default function WordRelay() {
  const [word, setWord] = useState("김영호");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Result>();

  const onSubmitForm = () => {
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
      <SubmitWord onSubmit={handleSubmit(onSubmitForm)}>
        <input
          {...register("result", { required: "result", min: 1 })}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </SubmitWord>
      {errors.result && <span>{value}최소 1글자 입력하세요.</span>}
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
