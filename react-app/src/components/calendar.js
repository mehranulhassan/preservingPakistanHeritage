import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/events');
        const formattedEvents = response.data.map(event => ({
          title: event.name,
          start: new Date(event.startDate),
          end: new Date(event.endDate),
          location: event.location, // Store location as a string
          allDay: false,
          resource: event
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const EventComponent = ({ event }) => (
    <span>
      <strong>{event.title}</strong>
      {event.location && (
        <>
          <br />
          <small>{event.location}</small>
        </>
      )}
    </span>
  );

  return (
    <div style={{ height: '100vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100vh' }}
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
};

export default MyCalendar;
