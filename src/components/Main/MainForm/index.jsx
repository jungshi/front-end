import React, { useEffect, useState } from "react";
import { mainNewApi } from "../../../utils/mainApi";
import { createPortal } from "react-dom";
import PMainForm from "./PMainForm";
import * as S from "../style";
import { Link } from "react-router-dom";
import { AiOutlineCopy } from "react-icons/ai";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function MainForm() {
  const [modalSwitch, setModalSwitch] = useState(false);
  const [groupId, setGroupId] = useState("");
  const newRoom = async (inputs) => {
    await mainNewApi(inputs)
      .then((res) => {
        const data = res.data;
        console.log(data.group_id, data, res, modalSwitch);
        setGroupId(data.group_id);
        setModalSwitch(true);
      })
      .catch((err) => err);
  };

  return (
    <>
      <PMainForm newRoom={newRoom} />
      {modalSwitch ? (
        <ConfirmModal setModalSwitch={setModalSwitch} groupId={groupId}/>
      ) : null}
    </>
  );
}

function ConfirmModal({ groupId}) {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    console.log("정상적으로 복사하기가 됐습니다.")
    setShowPopup(!showPopup)
  };
  useEffect(() => {
    if (showPopup) {
      setTimeout(() => setShowPopup(false), 1000);
    }
  }, [showPopup]);
  return createPortal(
    <S.ModalBackground>
      <S.ModalBox>
        <S.ModalContent>
          <h1>축하합니다! 방이 개설되었습니다!</h1>
          <h1>친구들을 초대해 함께 일정을 세워보세요.</h1>
          <S.LinkBox>
            <p>링크 :</p>
            <p>{`https://jungshi/${groupId}`}</p>
            <CopyToClipboard text={`https://jungshi/${groupId}`}>
              <S.URLShareButton onClick={togglePopup}><AiOutlineCopy size="14"/></S.URLShareButton>
            </CopyToClipboard>
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
          <S.ModalHeader>
              <S.CloseModalBtn onClick={() => (window.location.href = "/")}>
                <p>처음부터 다시 만들기</p>
              </S.CloseModalBtn>
            </S.ModalHeader>
        </S.ModalContent>
      </S.ModalBox>
        {showPopup ? (
          <S.ShowPopupBox>
            <p>링크가 복사되었습니다.</p>
          </S.ShowPopupBox>    
        ) : null}
    </S.ModalBackground>,
    
    document.getElementById("modal")
  );
}
