import {EventState, EventAction, EventTypesEnum} from "./types";

const initialState : EventState = {
    guests: [],
    actions: [],
}

export default function EventReducer (state = initialState, action: EventAction) : EventState{
    switch (action.type) {
        case EventTypesEnum.SET_GUESTS:
            return {...state, guests: action.payload}
        case EventTypesEnum.SET_ACTIONS:
            return {...state, actions: action.payload}
        default:
            return state
    }
}