import React from "react";
import PRoomResult from "./PRoomResult";

export default function RoomResult() {
  const dummy = {
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
  return (
    <>
      <PRoomResult roomData={dummy} />
    </>
  );
}
