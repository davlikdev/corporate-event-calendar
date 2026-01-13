import {Button, Layout, Modal, Row} from 'antd';
import React, {useEffect} from 'react';
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useAction} from "../hooks/useAction";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IAction} from "../models";

const Event = () => {
    useEffect(() => {
        fetchGuests()
        if (user) {
            fetchActions(user.username)
        }
    }, []);

    const addNewEvent = (action: IAction) => {
        setModal(false)
        createAction(action)
    }
    const {createAction} = useAction();
    const [modal, setModal] = React.useState(false);
    const {fetchGuests, fetchActions} = useAction()
    const {guests, actions} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)
    return (
        <Layout>
          <EventCalendar actions={actions}/>
            <Row justify={"center"}>
             <Button onClick={() => setModal(true)} type="primary">Add action</Button>
            </Row>
            <Modal title="Add Action" visible={modal}
                   onCancel={() => setModal(false)}
                   footer={null}
            >
                <EventForm submit={addNewEvent} guests={guests} />
            </Modal>
        </Layout>
    );
};

export default Event;