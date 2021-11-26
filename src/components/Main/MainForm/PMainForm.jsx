import React, { useState } from "react";
import { MultiDatePickerCalendar } from "..";
import * as S from "../style";

export default function PMainForm({ newRoom }) {
  const [index, setIndex] = useState(1);
  const [inputs, setInputs] = useState({
    name: "",
    startTime: "",
    endTime: "",
    date: [],
  });

  function range(start, end) {
    let array = [];
    for (let i = start; i < end; ++i) {
      array.push(i);
    }
    return array;
  }
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };
  const afterClick = async (index) => {
    setIndex(index + 1);
    if (index === 3) {
      console.log(inputs);
      await newRoom(inputs);
    }
  };
  const beforeClick = async (index) => {
    setIndex(index - 1);
  };
  const datesHandler = async (dates) => {
    const newDate = [];
    dates.map((date) => newDate.push(date.format("YYYY-MM-DD")));
    setInputs({
      ...inputs,
      date: newDate,
    });
    console.log(inputs);
  };
  const { name, startTime, endTime, date } = inputs;
  return (
    <>
      <S.MainSection1>
        <p>
          {index === 1
            ? "정시"
            : index === 2
            ? "달력에서 날짜"
            : index === 3
            ? "시간대를 설정"
            : "시간대를 설정"}
        </p>
      </S.MainSection1>
      <S.MainSection2>
        {index === 1 ? (
          <>
            <S.MainNameForm>
              <p>그룹 이름</p>
              <S.MainNameInput
                value={name}
                name="name"
                type="text"
                placeholder="이름"
                onChange={onChange}
              />
            </S.MainNameForm>
          </>
        ) : index === 2 ? (
          <MultiDatePickerCalendar
            datesHandler={datesHandler}
            old_date={date}
          />
        ) : index === 3 ? (
          <>
            <S.MainLabel htmlFor="startTime">
              <S.StartTimeSelect
                id="startTime"
                onChange={onChange}
                value={startTime}
                name="startTime"
              >
                {range(0, 25).map((num) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </S.StartTimeSelect>
            </S.MainLabel>
            <S.MainLabel htmlFor="endTime">
              <S.EndTimeSelect
                id="endTime"
                name="endTime"
                onChange={onChange}
                value={endTime}
              >
                {range(startTime, 25).map((num) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </S.EndTimeSelect>
            </S.MainLabel>
          </>
        ) : (
          <>
            <S.MainLabel htmlFor="startTime">
              <S.StartTimeSelect
                id="startTime"
                onChange={onChange}
                value={startTime}
                name="startTime"
              >
                {range(0, 25).map((num) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </S.StartTimeSelect>
            </S.MainLabel>
            <S.MainLabel htmlFor="endTime">
              <S.EndTimeSelect
                id="endTime"
                name="endTime"
                onChange={onChange}
                value={endTime}
              >
                {range(startTime, 25).map((num) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </S.EndTimeSelect>
            </S.MainLabel>
          </>
        )}
        <S.MainFooter>
          <S.MainFooterBtn1 onClick={async () => await beforeClick(index)}>
            {index === 1
              ? ""
              : index === 2
              ? "뒤로"
              : index === 3
              ? "뒤로"
              : null}
          </S.MainFooterBtn1>
          <S.MainFooterBtn2 onClick={async () => await afterClick(index)}>
            {index === 1
              ? "시작하기"
              : index === 2
              ? "다음"
              : index === 3
              ? "확인"
              : null}
          </S.MainFooterBtn2>
        </S.MainFooter>
      </S.MainSection2>
    </>
  );
}
