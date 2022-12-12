import {createContext} from "react";

export const familyMembersContext = createContext();

export const familyMembers = {
    wife: {
        name: 'Жена',
        income: 0,
    },
    husband: {
        name: 'Муж',
        income: 0,
    }
}
