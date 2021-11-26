import React, { useState } from "react";
import * as S from "../style";

export default function OneResult() {
  const [name, setName] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  return (
    <>
      <S.OneBox>
        <p>이름</p>
        <S.OneInput
          value={name}
          name="name"
          type="text"
          placeholder="이름"
          onChange={onChange}
        />
      </S.OneBox>
    </>
  );
}
