import { atom } from "recoil";
import { persistAtom } from "./common";

export const roomState = atom({
    key: "roomState",
    default: {
        mode: 0,
        beforeMode: 0,
        avail: [],
        notAvail: [],
        memberId: 0,
    },
    effects_UNSTABLE: [persistAtom],
});