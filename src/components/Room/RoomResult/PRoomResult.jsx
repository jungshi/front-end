import React from "react";
import * as S from "../style";

export default function PRoomResult({ roomData }) {
  const timetables = [
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
    {
      id: 2,
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
  ];
  return (
    <>
      {timetables.map((item) => (
        <S.TimeTable>
          {item["timeblocks"].map((block) => (
            <S.TimeBlock
              colorIndex={block.avail_count}
              timeIndex={block.order}
              dateIndex={item.date}
              avail_members={block.avail_members}
              unavail_members={block.unavail_members}
            />
          ))}
        </S.TimeTable>
      ))}
    </>
  );
}
