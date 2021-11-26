import React from "react";
import { useRecoilValue } from "recoil";
import { roomState } from "../../../recoil/roomState";
import * as S from "../style";

export default function HoverResult() {
  const avail = useRecoilValue(roomState).avail;
  const notAvail = useRecoilValue(roomState).notAvail;
  console.log(avail, notAvail);
  return (
    <>
      <S.HoverBox>
        <S.HoverAvail>
          <p>가능한 사람</p>
          {avail.map((one) => (
            <S.HoverMem key={one}>{one}</S.HoverMem>
          ))}
        </S.HoverAvail>
        <S.HovernotAvail>
          {" "}
          <p>불가능한 사람</p>
          {notAvail.map((one) => (
            <S.HoverMem key={one}>{one}</S.HoverMem>
          ))}
        </S.HovernotAvail>
      </S.HoverBox>
    </>
  );
}
