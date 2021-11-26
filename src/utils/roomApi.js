import { withoutAuthInstance } from "./common";
import { API_URLS } from "../constants";

const {
    NEW_ROOM
} = API_URLS;

export const getRoomApi = async(roomId) => {
    return await withoutAuthInstance.get(NEW_ROOM + '?group_id=' + roomId);
};