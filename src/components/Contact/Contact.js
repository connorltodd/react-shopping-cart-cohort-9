import React from 'react';

export default function Contact () {
    const [firstName, setFirstName] = React.useState('');
    const [email, setEmail] = React.useState('');


    const handleFirstName = (event) => {
        // anytime we trigger an onclick, onchange, onsubmit we have access to the event object
        // in the event we can use the target (what element triggered the event)
        // the value is what the user typed (inputs) else the value attached to the element
        console.log(event.target.value)
        setFirstName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    return (
        <form>
            <input type='text' value={firstName} placeholder="first name" onChange={handleFirstName} />
            <input type='email' value={email} placeholder="email" onChange={handleEmail} />
        </form>
    )
}