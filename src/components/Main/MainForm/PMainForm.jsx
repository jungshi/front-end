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
      <>
        {index === 1
          ? <S.guaguebar1>
            <div className="done"></div>
            <div className="undo"></div>
          </S.guaguebar1>
          : index === 2
          ? <S.guaguebar2>
            <div className="done"></div>
            <div className="undo"></div>
          </S.guaguebar2>
          : index === 3
          ? <S.guaguebar3>
            <div className="done"></div>
            <div className="undo"></div>
          </S.guaguebar3>
          : <S.guaguebar3>
            <div className="done"></div>
            <div className="undo"></div>
          </S.guaguebar3>}
      </>
      <S.Section>
        <S.MainSection1>
          <p>
            {index === 1
              ?
              <div className="section1">
                <div>
                  <p>정시<span>正時</span></p>
                </div>        
                <h1>
                  팀플을 '바르게' 시작하다, '시간'을 정하다.
                </h1>
              </div>
              : index === 2
              ?
              <div className="section2">
                <p>
                  달력에서 날짜를 선택해주세요.
                </p>
              </div>
              : index === 3
              ? 
              <div className="section3">
                <p>
                  시간대를 선택해주세요.
                </p>
              </div>
              : <div className="section3">
              <p>
                시간대를 선택해주세요.
              </p>
            </div>}
          </p>
        </S.MainSection1>
        <S.MainSection2>
          {index === 1 ? (
            <div className="section1">
              <S.MainNameForm>
                <p>그룹 이름</p>
                <S.MainNameInput
                  value={name}
                  name="name"
                  type="text"
                  placeholder="그룹 이름을 입력해주세요."
                  onChange={onChange}
                />
              </S.MainNameForm>
            </div>
          ) : index === 2 ? (
            <div className="section2">
              <MultiDatePickerCalendar
                datesHandler={datesHandler}
                old_date={date}
              />
            </div>
          ) : index === 3 ? (
            <div className="section3">
              <p>시작 시간</p>
              <div className="picker">
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
              </div>
              <span>마감 시간</span>
            </div>
          ) : (
            <div className="section3">
              <p>시작 시간</p>
              <div className="picker">
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
              </div>
              <span>마감 시간</span>
          </div>
          )}
          <S.MainFooter>
            <S.MainFooterBtn1 onClick={async () => await beforeClick(index)}>
              {index === 1
                ? ""
                : index === 2
                ?
                <div className="footerName2">
                  <p>뒤로</p>
                </div>
                : index === 3
                ?
                <div className="footerName2">
                  <p>뒤로</p>
                </div>
                :
                <div className="footerName2">
                  <p>뒤로</p>
                </div>}
            </S.MainFooterBtn1>
            <S.MainFooterBtn2 onClick={async () => await afterClick(index)}>
              {index === 1
                ?
                <div className="footerName1">
                  <p>시작하기</p>
                </div>
                : index === 2
                ? 
                <div className="footerName2">
                  <p>다음</p>
                </div>
                : index === 3
                ? 
                <div className="footerName2">
                  <p>확인</p>
                </div>
                : 
                <div className="footerName2">
                  <p>확인</p>
                </div>}
            </S.MainFooterBtn2>
          </S.MainFooter>
        </S.MainSection2>
      </S.Section>
      <S.footer>
          <span>만든이 : 박가영, 박한영, 김태훈  |  이 컨텐츠는 when2meet을 참고하여 만들어졌습니다.</span>
      </S.footer>
    </>
  );
}
