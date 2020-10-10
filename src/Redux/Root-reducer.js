import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './User/user.reducer';
import AddTicketReducer from './Add-Ticket/addTicket.reducer';
import uncompletedReducer from './Uncompleted/uncompleted.reducer';
import ticketReducer from './Ticket/Ticket.reducer';
import dueReducer from './Due/due.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    user: userReducer,
    addTicket: AddTicketReducer,
    uncompleted: uncompletedReducer,
    ticket: ticketReducer,
    overdue: dueReducer
});

export default persistReducer(persistConfig, rootReducer);