import React from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IAction, IUser} from "../models";
import {Moment} from "moment";
import {formateDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface EventFormProps {
    guests: IUser[]
    submit: (action : IAction) => void
}
const EventForm = ({guests, submit} : EventFormProps) => {
    const [action, setAction] = React.useState<IAction>({
        author: '',
        date: "",
        guest: "",
        description: ''
    })
    const {user} = useTypedSelector(state => state.auth)
    const selectDate = (date: Moment | null) => {
        if (date) {
            setAction({...action, date: formateDate(date.toDate())})
        }
    }
    const submitForm = () => {
        if (user) {
            submit({...action, author: user.username})
        }
    }
    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Description"
                name="description"
                rules={[rules.required()]}
            >
                <Input value={action.description}
                       onChange={e => setAction({...action, description: e.target.value})}/>
            </Form.Item>
            <Form.Item
                label="Date of Action"
                name="date"
                rules={[rules.required(), rules.isDateAfter("Events cannot be created for past days.")]}
            >
                <DatePicker onChange={date => selectDate(date)}/>
            </Form.Item>
            <Form.Item label="Choose Guest" name="guest" rules={[rules.required()]}>
                <Select
                    options={guests.map( g => {
                        return {value: g.username, label: g.username}
                    })}
                    value={action.guest}
                    onChange={guest => setAction({...action, guest: guest})}
                />
            </Form.Item>
            <Row justify={'end'}>
                <Form.Item>
                    <Button htmlType={"submit"} type="primary">Add Action</Button>
                </Form.Item>
            </Row>

        </Form>
    );
};

export default EventForm;