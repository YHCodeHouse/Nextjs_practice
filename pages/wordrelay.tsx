import React, { useState } from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface Result {
  result: string;
}
const nameRegex = /^[A-Za-z]+$/;
const schema = yup
  .object()
  .shape({
    result: yup
      .string()
      .matches(nameRegex, "Only English letters")
      .required("Required *")
  })
  .required();

export default function WordRelay() {
  const [word, setWord] = useState("asdf");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Result>({ mode: "onChange", resolver: yupResolver(schema) });
  const wordValidation = register("result");
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
          {...register("result")}
          value={value}
          onChange={e => {
            wordValidation.onChange(e);
            onChangeInput(e);
          }}
        />
        <button>입력!</button>
      </SubmitWord>
      {errors.result && <span>영어만 입력하세요</span>}
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
