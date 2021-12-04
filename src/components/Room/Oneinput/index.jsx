import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { roomState } from "../../../recoil/roomState";
import { makeTimeApi } from "../../../utils/roomApi";
import * as S from "../style";

export default function Oneinput({ groupId, timetables, roomData }) {
  const [enter, setEnter] = useState(false);

  const [down, setDown] = useState(false);
  const [firstorder, setFirstOrder] = useState();
  const [lastorder, setLastOrder] = useState();
  const [beforetarget, setBeforeTarget] = useState("");
  const [nowTarget, setNowTarget] = useState();
  const [starttableId, setStarttableId] = useState();
  const [endtableId, setEndtableId] = useState();
  const [color, setColor] = useState("white");
  const [beforeOrder, setBeforeOrder] = useState();
  const [beforeTableId, setBeforeTableId] = useState();
  const [availState, setavailState] = useState(false);
  const [mode, setMode] = useRecoilState(roomState);
  const memberId = mode.memberId;
  console.log(memberId);
  const onMouseDownFunc = (e, order, tableId) => {
    console.log(tableId);
    if (enter) {
      setDown(true);
      setFirstOrder(order);
      setLastOrder(order);
      setBeforeTarget(e.target);
      setStarttableId(tableId);
      setEndtableId(tableId);
      const nowColor = e.target.style.background;
      setavailState(nowColor !== "red" ? false : true);
      e.target.style.background = nowColor !== "red" ? "red" : "white";
    }
    // console.log(firstorder, lastorder, enter, enterDown);
  };
  const onMouseOverFunc = (e, order, tableId) => {
    if (enter && down && beforetarget !== e.target) {
      console.log(firstorder, lastorder, starttableId, endtableId);
      setNowTarget(e.target);
      if (beforeOrder > order) {
        setLastOrder(order);
        if (firstorder > order) {
          setLastOrder(firstorder);
          setFirstOrder(firstorder > order ? order : firstorder);
        }
      } else {
        setLastOrder(lastorder < order ? order : lastorder);
      }
      if (beforeTableId > tableId) {
        setEndtableId(tableId);
        setStarttableId(starttableId > tableId ? tableId : starttableId);
      } else {
        setStarttableId(starttableId > tableId ? tableId : starttableId);
        setEndtableId(endtableId < tableId ? tableId : endtableId);
      }
      setColor(e.target.style.background !== "red" ? "white" : "red");
    }
    setBeforeTarget(e.target);
    setBeforeTableId(tableId);
    setBeforeOrder(order);
    // console.log(firstorder, lastorder, enter);
  };
  const onMouseEnterFunc = (e) => {
    setEnter(true);
    // console.log(firstorder, lastorder, enter);
  };
  const onMouseLeaveFunc = (e) => {
    setEnter(false);
    // console.log(firstorder, lastorder, enter);
  };
  const onMouseUpFunc = () => {
    setDown(false);
    console.log(starttableId, endtableId);
    updateTable();
  };
  const updateTable = async () => {
    await makeTimeApi(
      memberId,
      firstorder,
      lastorder,
      starttableId,
      endtableId,
      availState,
      groupId
    ).then((res) => {
      const data = res.data;
      console.log(data);
    });
  };
  return (
    <>
      <S.Title>{mode.name} 님, 일정을 선택해 주세요</S.Title>
      <S.TableWrapper
        onMouseLeave={async (e) => {
          e.preventDefault();
          await onMouseLeaveFunc();
        }}
        onMouseEnter={async (e) => {
          e.preventDefault();
          await onMouseEnterFunc();
        }}
      >
        {" "}
        {roomData.timetables.map((item) => (
          <S.TimeTable key={item.id}>
            {item.timeblocks.map((block) => {
              return (
                <S.TimeInputBlock
                  colorState={
                    block.order >= firstorder &&
                    block.order <= lastorder &&
                    item.id >= starttableId &&
                    item.id <= endtableId
                  }
                  key={block.order}
                  onMouseMove={async (e) => {
                    e.preventDefault();
                    await onMouseOverFunc(e, block.order, item.id);
                  }}
                  onMouseDown={async (e) => {
                    e.preventDefault();
                    await onMouseDownFunc(e, block.order, item.id);
                  }}
                  onMouseUp={async (e) => {
                    e.preventDefault();
                    await onMouseUpFunc(block.order);
                  }}
                  timeIndex={block.order}
                  dateIndex={item.date}
                  avail_members={block.avail_members}
                  unavail_members={block.unavail_members}
                />
              );
            })}
          </S.TimeTable>
        ))}
        <S.OneBtn
          onClick={() =>
            setMode({
              ...mode,
              mode: 0,
              beforeMode: 0,
              avail: [],
              notAvail: [],
            })
          }
        >
          <p>변경하기</p>
        </S.OneBtn>
      </S.TableWrapper>
    </>
  );
}
