import React, { useState } from "react";
import { mainNewApi } from "../../../utils/mainApi";
import { createPortal } from "react-dom";
import PMainForm from "./PMainForm";
import * as S from "../style";
import { Link } from "react-router-dom";

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
          <p>축하합니다! 방이 개설되었습니다!</p>
          <p>친구들을 초대해 함꼐 일정을 세워보세요.</p>
          <S.LinkBox>
            <p>링크: </p>
            <p>{`https://jungshi/${groupId}`}</p>
            <p>Copy</p>
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
          </S.BtnBox>
        </S.ModalContent>
        <S.ModalHeader>
          <S.CloseModalBtn onClick={() => (window.location.href = "/")}>
            <p>처음부터 다시 만들기</p>
          </S.CloseModalBtn>
        </S.ModalHeader>
      </S.ModalBox>
    </S.ModalBackground>,
    document.getElementById("modal")
  );
}
