import React from 'react';
import './Ticket-Loader.styles.scss';

const TicketLoader = () => {
    return (
        <div className="ticket-loader">
            <div className="ticket-loader__header">
                <div className="ticket-loader__status ticket-loader__custom"></div>
                <div className="ticket-loader__assigned ticket-loader__custom"></div>
            </div>
            <div className="ticket-loader__title ticket-loader__custom"></div>
            <div className="ticket-loader__container">
                <div className="ticket-loader__content ticket-loader__custom"></div>
                <div className="ticket-loader__content ticket-loader__custom"></div>
            </div>
            <div className="ticket-loader__raised ticket-loader__custom"></div>
            <div className="ticket-loader__footer">
                <div className="ticket-loader__created ticket-loader__custom"></div>
                <div className="ticket-loader__date ticket-loader__custom"></div>
            </div>
        </div>
    )
}

export default TicketLoader
