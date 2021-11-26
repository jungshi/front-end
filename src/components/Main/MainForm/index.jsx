import React, { useState } from "react";
import { mainNewApi } from "../../../utils/mainApi";
import { createPortal } from "react-dom";
import PMainForm from "./PMainForm";
import * as S from "../style";
import { Link } from "react-router-dom";
import { AiOutlineCopy } from 'react-icons/ai';


export default function MainForm() {
  const [modalSwitch, setModalSwitch] = useState(false);
  const [groupId, setGroupId] = useState("");
  const newRoom = async (inputs) => {
    await mainNewApi(inputs)
      .then((res) => {
        const data = res.data;
        console.log(data.group_id, data, res, modalSwitch);
        setGroupId(data.group_id);
      })
      .catch((err) => err);
  };
  return (
    <>
      <PMainForm newRoom={newRoom} />
      {modalSwitch ? (
        <ConfirmModal setModalSwitch={setModalSwitch} groupId={groupId} />
      ) : null}
    </>
  );
}

function ConfirmModal({ groupId }) {
  return createPortal(
    <S.ModalBackground>
      <S.ModalBox>
        <S.ModalContent>
          <h1>축하합니다! 방이 개설되었습니다!</h1>
          <h1>친구들을 초대해 함께 일정을 세워보세요.</h1>
          <S.LinkBox>
            <p>링크 :</p>
            <p>{`https://jungshi/${groupId}`}</p>
            <p><AiOutlineCopy size="14"/></p>
          </S.LinkBox>
          <S.BtnBox>
            <S.ShareBtn>
              <p>공유</p>
            </S.ShareBtn>
            <Link to={`/${groupId}`}>
              <S.ConfirmBtn>
                <p>확인</p>
              </S.ConfirmBtn>
            </Link>
            <S.ModalHeader>
              <S.CloseModalBtn onClick={() => (window.location.href = "/")}>
                <p>처음부터 다시 만들기</p>
              </S.CloseModalBtn>
            </S.ModalHeader>
          </S.BtnBox>
        </S.ModalContent>
      </S.ModalBox>
    </S.ModalBackground>,
    document.getElementById("modal")
  );
}
