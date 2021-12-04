import { withoutAuthInstance } from "./common";
import { API_URLS } from "../constants";

const {
    NEW_ROOM,
    MEMBER,
    TIME
} = API_URLS;

export const getRoomApi = async(roomId) => {
    return await withoutAuthInstance.get(NEW_ROOM + '?group_id=' + roomId);
};

export const postmemberApi = async(groupId, name) => {
    const data = {
        group_id: groupId,
        name: name,
    }
    return await withoutAuthInstance.post(MEMBER, data)
}
export const makeTimeApi = async(memberId, firstorder, lastorder, starttableId, endtableId, availState, groupId) => {
    console.log(memberId, firstorder, lastorder, starttableId, endtableId, availState, groupId)
    const date_list = []
    for (var i = starttableId; i <= endtableId; i++) {
        date_list.push(i)
    }
    console.log(date_list, starttableId, endtableId)
    const data = {
        member_pk: memberId,
        first_order: firstorder,
        last_order: lastorder,
        dates: date_list,
        change_to: availState ? "unavail" : "avail",
        group_id: groupId
    }
    return await withoutAuthInstance.post(TIME, data);
};