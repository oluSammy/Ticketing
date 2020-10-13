import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './User/user.reducer';
import AddTicketReducer from './Add-Ticket/addTicket.reducer';
import uncompletedReducer from './Uncompleted/uncompleted.reducer';
import ticketReducer from './Ticket/Ticket.reducer';
import dueReducer from './Due/due.reducer';
import dueTodayReducer from './Due-Today/dueToday.reducer';
import ictReducer from './ict-staff/ictStaff.reducer';
import unassignedReducer from './Unassigned/Unassigned.reducer';
import completedReducer from './Completed/completed.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ictStaffs']
}

const rootReducer = combineReducers({
    user: userReducer,
    addTicket: AddTicketReducer,
    uncompleted: uncompletedReducer,
    ticket: ticketReducer,
    overdue: dueReducer,
    dueToday: dueTodayReducer,
    ictStaffs: ictReducer,
    unassigned: unassignedReducer,
    completed: completedReducer
});

export default persistReducer(persistConfig, rootReducer);