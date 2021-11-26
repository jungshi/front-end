import { withoutAuthInstance } from "./common";
import { API_URLS } from "../constants";

const {
    NEW_ROOM
} = API_URLS;

export const mainNewApi = async(inputs) => {
    const nStartTime = inputs.startTime >= 10 ? `${inputs.startTime}:00` : `0${inputs.startTime}:00`
    const nEndTime = inputs.endTime >= 10 ? `${inputs.endTime}:00` : `0${inputs.endTime}:00`
    const data = {
        group_name: inputs.name,
        dates: inputs.date,
        start_time: nStartTime,
        end_time: nEndTime,
    }
    console.log(data)
    return await withoutAuthInstance.post(NEW_ROOM, data);
};