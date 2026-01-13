import React from 'react';
import {Calendar} from "antd";
import {IAction} from "../models";
import {Moment} from "moment";
import {formateDate} from "../utils/date";
interface EventCalendarProps {
    actions: IAction[]
}
const EventCalendar = (props : EventCalendarProps) => {
    function dateCellRender(value : Moment) {
        const formatedDate = formateDate(value.toDate())
        const currentDaysActions = props.actions.filter(action => action.date === formatedDate)
        return (
            <div>
                {currentDaysActions.map((item, index) =>
                <div key={index}>
                    {item.description}
                </div>)}
            </div>
        )
    }
    return (
        <Calendar dateCellRender={dateCellRender} />
    );
};

export default EventCalendar;