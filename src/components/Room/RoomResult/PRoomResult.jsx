import React from "react";
import * as S from "../style";
import { useRecoilState } from "recoil";
import { roomState } from "../../../recoil/roomState";

export default function PRoomResult({ roomData, color }) {
  console.log(roomData);
  const data = {
    status: 200,
    success: true,
    timetables: [
      {
        id: 1,
        date: "2021-11-20",
        day: "Mon",
        start_time: "10:00 AM",
        end_time: "10:30 AM",
        timeblocks: [
          {
            order: 1,
            avail_members: ["park", "kim"],
            unavail_members: [],
            avail_count: 2,
          },
          {
            order: 2,
            avail_members: ["park"],
            unavail_members: ["kim"],
            avail_count: 1,
          },
        ],
        block_count: 2,
      },
    ],
    member_count: 2,
    avails_max_count: 2,
  };

  const [mode, setMode] = useRecoilState(roomState);
  const onMouseoverFunc = (availMember, unavailMember) => {
    setMode({ mode: 1, avail: availMember, notAvail: unavailMember });
    console.log(mode);
  };
  const onMouseleaveFunc = () => {
    setMode({ mode: 0, avail: [], notAvail: [] });
    console.log(mode);
  };

  return (
    <>
      {data.timetables.map((item) => (
        <S.TimeTable key={item.id}>
          {item.timeblocks.map((block) => {
            console.log(color);
            return (
              <S.TimeBlock
                colorIndex={color[block.avail_count]}
                key={block.order}
                onMouseEnter={async (e) => {
                  e.preventDefault();
                  console.log(block.avail_members, block.unavail_members);
                  await onMouseoverFunc(
                    block.avail_members,
                    block.unavail_members
                  );
                }}
                onMouseLeave={async (e) => {
                  e.preventDefault();
                  await onMouseleaveFunc();
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
    </>
  );
}
