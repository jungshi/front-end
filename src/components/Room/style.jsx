import styled from "styled-components";

export const TimeTable = styled.div`
  border: 1px solid red;
`;
export const TableWrapper = styled.div`
  display: flex;
  width: fit-content;
`;
export const Title = styled.div``;
export const TimeBlock = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => props.colorIndex || "white"};
  border: 1px solid black;
`;
export const TimeInputBlock = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.colorState ? "red" : "white")};
  border: 1px solid black;
`;
export const HoverBox = styled.div``;
export const HoverAvail = styled.div``;
export const HovernotAvail = styled.div``;
export const HoverMem = styled.div``;
export const OneBox = styled.div``;
export const OneBtn = styled.div``;
export const OneInput = styled.input``;
