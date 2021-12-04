import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { roomState } from "../../../recoil/roomState";
import { postmemberApi } from "../../../utils/roomApi";
import Oneinput from "../Oneinput";
import * as S from "../style";

function OneResult({ groupId, roomData }) {
  const [recoilValue, setRecoilValue] = useRecoilState(roomState);
  const [timetables, setTimeTables] = useState([]);
  const onChange = (e) => {
    const { value } = e.target;
    setRecoilValue({ ...recoilValue, name: value });
    console.log(recoilValue.name);
  };
  const getOneData = async (groupId, name) => {
    await postmemberApi(groupId, name)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.timetables) {
          setTimeTables(data.timetables);
        }
        window.alert(data.member_id, data);
        setRecoilValue({ ...recoilValue, memberId: 19 });
      })
      .catch((err) => console.log(err));
  };

  const onClick = async () => {
    if (recoilValue.name !== "") {
      await getOneData(groupId, recoilValue.name);
      setRecoilValue({ ...recoilValue, mode: 2, beforeMode: 2 });
    } else {
      window.alert("이름을 입력해주세요");
    }
  };
  return (
    <>
      {" "}
      {recoilValue.mode === 0 ? (
        <>
          <S.OneBox>
            <p>이름</p>
            <S.OneInput
              value={recoilValue.name}
              name="name"
              type="text"
              placeholder="이름"
              onChange={onChange}
            />
          </S.OneBox>
          <S.OneBtn onClick={onClick}>
            <p>다음</p>
          </S.OneBtn>
        </>
      ) : recoilValue.mode === 2 ? (
        <Oneinput timetables={timetables} roomData={roomData} />
      ) : null}
    </>
  );
}
export default React.memo(OneResult);
