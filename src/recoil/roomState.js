import { atom } from "recoil";
import { persistAtom } from "./common";

export const roomState = atom({
    key: "roomState",
    default: {
        mode: 0,
        avail: [],
        notAvail: [],
    },
    effects_UNSTABLE: [persistAtom],
});