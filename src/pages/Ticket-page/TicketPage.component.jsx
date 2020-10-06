import React from 'react';
import './TicketPage.styles.scss';

const TicketPage = () => {
    return (
        <div className="ticket-page">
            <div className="ticket-page__header">
                <div className="ticket-page__header-icon">&#10021;</div>
                <div className="ticket-page__header-text">Ticket</div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Title:</h6>
                <p className="ticket-page__key">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Task:</h6>
                <p className="ticket-page__key">Lorem ipsum dolor sit amet consectetur adipisicing.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid.
                </p>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Status:</h6>
                <p className="ticket-page__key">Completed.</p>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Raised By:</h6>
                <div className="ticket-page__k">
                    <p className="ticket-page__key">Ola Jacobs</p>
                    <span> English Teacher</span>
                </div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Assign To:</h6>
                <form className="ticket-page__key" >
                    <select name="ticket-select" id="ticket-select" className="ticket-page__select">
                        <option value="test-1">test-1</option>
                        <option value="test-1">test-1</option>
                        <option value="test-1">test-1</option>
                        <option value="test-1">test-1</option>
                    </select>
                    <input className="ticket-page__btn" type="submit"  value="Assign"/>
                </form>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Created:</h6>
                <p className="ticket-page__key" style={{fontFamily: 'sans-serif'}}>12-09-2019.</p>
            </div>
            {/* .ticket */}
        </div>
    )
}

export default TicketPage
