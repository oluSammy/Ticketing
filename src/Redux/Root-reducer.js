import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './User/user.reducer';
import AddTicketReducer from './Add-Ticket/addTicket.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [userReducer]
}

const rootReducer = combineReducers({
    user: userReducer,
    addTicket: AddTicketReducer
});

export default persistReducer(persistConfig, rootReducer);