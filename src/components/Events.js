import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue, push as firebasePush} from 'firebase/database';
import { getAuth, signOut } from 'firebase/auth';

//title element for the event 
export function EventTitle() {
        return (
        <section>
          <h1 className= "event-title">Upcoming Events</h1>
        </section>
        );
}

//individual event item that include event information
const EventItem = (props) => {
    return (     
    <div className="event-card">
        <section>
          <ul className="event">
            <li>Event Name: {props.events.name}</li>
            <li>Event Time: {props.events.date} </li>
            <li>Hosted By: {props.events.host} </li>
            <li>Event Detail: {props.events.detail}</li>
          </ul>
          </section>
    </div>
)}

//the form portion of the event 
export function EventSubmission(props) {
    //set state for each event individual input
    const [nameValue, setName] = useState('');
    const [emailValue, setEmail] = useState('');
    const [hostValue, setHost] = useState('');
    const [dateValue, setDate] = useState('');
    const [detailValue, setDetail] = useState('');
   
    //handle each individual input value for the form 
    const handleInput = (event) => {
        if (event.target.name === "eventName") {
            setName(event.target.value);
        } 
        if (event.target.name==="email") {
            setEmail(event.target.value);
        } 
        if (event.target.name === "host") {
            setHost(event.target.value)
        } 
        if (event.target.name === "date") {
            setDate(event.target.value);    
        } 
        if (event.target.name === "detail") {
            setDetail(event.target.value);
        }
    }

    //handle submit and reset the form state
    const handleSubmit = (event) => {
        props.whatToDoOnSubmit(nameValue, emailValue, hostValue, dateValue, detailValue);
        setName('');
        setEmail('');
        setHost('');
        setDate('');
        setDetail('');
    }

    const handleSignOut = (event) => {
        signOut(getAuth());
    }

    //sign in and sign out button
    let button;
    if(props.user) {
        button = <button type="button" className= "btn btn-dark text-nowrap" onClick={handleSignOut}>Log out</button>
    } else {
        button = <Link to="/login">
                    <div className="signinButton">
                        <button type="button" className= "btn btn-dark text-nowrap">Log in</button>
                    </div>
                </Link>
    }

    //display the event form 
        return (
            <section className="event-form"> 
            <div className="container-top-bottom">
                <div className="form-response justify-content-left">
                    <div className="event-form-title">
                        <h2 classame ='form-title'><strong>Event Submission Form</strong></h2>
                        <p className='form-description'>If you would like to submit a form for an event, please log in using your AKPsi membership account.</p>
                        <div className= "log-in">
                            {button}
                        </div>
                    </div>
                </div>
                <form action="" method="get">
                    <div className="form-response justify-content-right">
                        <div className="form-response">
                            <div className="form-group">
                                <label className="label" htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="host" placeholder="Name"  value={hostValue} onChange={handleInput} />
                            </div>
                            <div className="form-group">
                              <label className="label" htmlFor="email">Email Address</label>
                              <input type="email" className="form-control" name="email" placeholder="Email" value={emailValue} onChange={handleInput} />
                            </div>
                            <div className="form-group">
                              <label className="label" htmlFor="subject">Event Title</label>
                              <input type="text" className= "form-control" name="eventName" placeholder="Subject" value={nameValue} onChange={handleInput}/>
                            </div>
                            <div className="form-group">
                              <label className= "label" htmlFor="name">Event Date</label>
                              <input type="date" className="form-control" name="date" placeholder="date" value={dateValue} onChange={handleInput}/>
                            </div>
                            <div className="form-group">
                                <label className= "label" htmlFor="#">Event Detail</label>
                                <textarea name="detail" className= "form-control" placeholder="Message" value={detailValue} onChange={handleInput}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="button" value="SUBMIT" className="btn btn-dark" onClick={handleSubmit} disabled={!props.user}/>
                                <div className="submitting"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </section>
        );
}

//returns displays the whole event page
export default function Events(props) {
    //firebase set up
    const [eventArray, setEventArray] = useState(props.eventData);
    const db = getDatabase();
    useEffect(() => {
        const exampleRef = ref(db, "allEvents")
        const offFunction = onValue(exampleRef, (snapshot) => {
            const newValue = snapshot.val();
            const list = []
            for (const event in newValue) {
                list.push(newValue[event]);
            }
            setEventArray(list);
        });
        function cleanup() {
            offFunction();
        }
        return cleanup;
    }, [db])

    //add an event with the form info 
    const addEvent = (eventName, email, host, date, detail) => {
        const newEventObj = {
            name: eventName,
            email: email,
            host: host,
            date: date,
            detail: detail   
        }
        const eventSubmitted = ref(db, "allEvents");
        firebasePush(eventSubmitted, newEventObj); 
    }

    //create each individual event 
    let eventList = (eventArray.map((event) => {
        return (<EventItem className="event" events={event} key={event.name} />);
      }));
        return (
            <div>
                <main>
                    <EventTitle />
                    {eventList}
                    <EventSubmission whatToDoOnSubmit={addEvent} user={props.user}/>
                </main>
            </div>
    );
}
