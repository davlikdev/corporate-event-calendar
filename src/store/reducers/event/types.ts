import {IAction, IUser} from "../../../models";

export interface EventState {
    guests: IUser[],
    actions: IAction[],
}

export enum EventTypesEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_ACTIONS = "SET_ACTIONS",
}

export interface SetGuestsAction {
    type: EventTypesEnum.SET_GUESTS,
    payload: IUser[],
}
export interface SetActionsAction {
    type: EventTypesEnum.SET_ACTIONS,
    payload: IAction[],
}

export type EventAction = SetGuestsAction | SetActionsAction