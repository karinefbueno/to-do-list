import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import { useContext, useState } from 'react';
import Modal from '../Modal';
import Button from '../Button';
import context from '../../context/context';
import { fetchCreateTask } from '../../service/api.task';

const localizer = momentLocalizer(moment);

interface Event {
	title: string;
	description: string;
	priority: string;
	start: Date;
	end: Date;
}

function CalendarComponent() {
	const [events, setEvents] = useState<Event[]>([]);
	const [showModal, setShowModal] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const { newEvent, setNewEvent, INICIAL } = useContext(context);
	const [selectEvent, setSelectEvent] = useState<Event | null>(null);

	const handleSelectSlot = (slotInfo: SlotInfo) => {
		setShowModal(true);
		setSelectedDate(slotInfo.start as Date);
		setSelectEvent(null);
		setNewEvent(INICIAL); // Reset newEvent to initial state when creating a new event
	};

	const handleSelectEvent = (event: Event) => {
		setShowModal(true);
		setSelectEvent(event);
		setNewEvent({
			title: event.title,
			description: event.description,
			priority: event.priority,
		}); // Fill all fields when an existing event is selected
	};

	const saveEvent = async () => {
		if (newEvent.title && selectedDate) {
			if (selectEvent) {
				const updatedEvent = {
					...selectEvent,
					title: newEvent.title,
					description: newEvent.description,
					priority: newEvent.priority,
				};

				const updatedEvents = events.map((event) => (event === selectEvent ? updatedEvent : event));
				setEvents(updatedEvents);
				// await fetchCreateTask(events);
				// console.log(data);
			} else {
				const newTask: Event = {
					title: newEvent.title,
					description: newEvent.description,
					priority: newEvent.priority,
					start: selectedDate,
					end: moment(selectedDate).add(1, 'hours').toDate(),
				};
				setEvents([...events, newTask]);
			}
			setShowModal(false);
			setNewEvent(INICIAL);
		}
	};

	const deleteEvent = () => {
		if (selectEvent) {
			const updatedEvents = events.filter((event) => event !== selectEvent);
			setEvents(updatedEvents);
			setShowModal(false);
			setNewEvent(INICIAL);
			setSelectEvent(null);
		}
	};

	return (
		<div>
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 500 }}
				selectable={true}
				onSelectSlot={handleSelectSlot}
				onSelectEvent={handleSelectEvent}
			/>
			{showModal && (
				<Modal
					buttonClose={
						<Button
							variant='secondary'
							text='X'
							onclick={() => {
								setShowModal(false);
								setNewEvent(INICIAL);
								setSelectEvent(null);
							}}
						/>
					}
					button={<Button variant='primary' text={selectEvent ? 'Atualizar' : 'Criar'} onclick={saveEvent} />}
					buttonDelete={selectEvent && <Button variant='primary' text='Excluir' onclick={deleteEvent} />}
				/>
			)}
		</div>
	);
}

export default CalendarComponent;
