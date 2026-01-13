import {IAction, IUser} from "../../../models";
import {EventTypesEnum, SetActionsAction, SetGuestsAction} from "./types";
import {AppDispatch} from "../../store";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
    setGuests: (payload: IUser[]) : SetGuestsAction=> ({type: EventTypesEnum.SET_GUESTS, payload}),
    setActions: (payload: IAction[]) : SetActionsAction=> ({type: EventTypesEnum.SET_ACTIONS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(response.data))

        } catch (e) {
            console.log(e)
        }
    },
    createAction: (action: IAction) => async (dispatch: AppDispatch) => {
        try {
            const actions = localStorage.getItem("actions") || "[]";
            const json = JSON.parse(actions) as IAction[];
            json.push(action)
            dispatch(EventActionCreators.setActions(json))
            localStorage.setItem("actions", JSON.stringify(json))
        }
        catch (e) {
            console.log(e)
        }
    },
    fetchActions: (username:string) => async (dispatch: AppDispatch) => {
        try {
            const actions = localStorage.getItem("actions") || "[]";
            const json = JSON.parse(actions) as IAction[];
            const currentUserActions = json.filter( j => j.author === username || j.guest === username)
            dispatch(EventActionCreators.setActions(currentUserActions))
        }
        catch (e) {
            console.log(e)
        }
    }
}