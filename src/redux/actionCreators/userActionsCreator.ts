import { RESET_USERNAME, SET_USERNAME } from "@/redux/actions/userActions";

export const setUserNameAction = (payload: string) => ({ type: SET_USERNAME, payload });
export const resetUserNameAction = () => ({ type: RESET_USERNAME });
