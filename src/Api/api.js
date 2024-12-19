import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }); // Backend base URL

// Functions to communicate with the backend
export const fetchEvents = () => API.get('/events');            // Get all events
export const createEvent = (eventData) => API.post('/events', eventData); 
export const tablefetch= ()=> API.get('/events');
export const deleteEventById=(id)=>API.post(`/events/${id}`);
export const createSession=(sessionData)=>API.post('/session',sessionData)
export const getEventsById=(id)=>API.get(`/events/${id}`)
export const fetchSessions=()=>API.get('/session/sessionfetch');
export const editEvent =(id,editedEvent)=>API.post(`/events/update/${id}`,editedEvent)
export const fetchsessionByEventId=(id)=>API.get(`/session/sessionById/${id}`)
export  const deleteSession = (id) => API.post(`/session/delete/${id}`);
export const editsession=(id,session)=>API.post(`/session/editsession/${id}`,session);
// export const getSessionById=(id)=>API.post(`/session/edit/${id}`)
// export const getspeakers=()=>API.get('/speaker');
// export const createspeaker=(speakerData)=>API.post('/speaker',speakerData);

