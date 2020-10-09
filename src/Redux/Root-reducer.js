import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './User/user.reducer';
import AddTicketReducer from './Add-Ticket/addTicket.reducer';
import uncompletedReducer from './Uncompleted/uncompleted.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['uncompleted']
}

const rootReducer = combineReducers({
    user: userReducer,
    addTicket: AddTicketReducer,
    uncompleted: uncompletedReducer
});

export default persistReducer(persistConfig, rootReducer);