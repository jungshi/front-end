import { withoutAuthInstance } from "./common";
import { API_URLS } from "../constants";

const {
    NEW_ROOM
} = API_URLS;

export const mainNewApi = async(inputs) => {
    const data = {
        group_name: inputs.name,
        dates: inputs.date,
        start_time: inputs.startTime,
        end_time: inputs.endTime,
    }
    return await withoutAuthInstance.post(NEW_ROOM, data);
};