import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar (props) {
    // Handle the users input via a local state
    const [navbarSearchInput, setNavbarSearchInput] = React.useState('')

    // When the user clicks on the button send the local state up to the app
    const handleSearchSubmission = (event) => {
        event.preventDefault();
        console.log('now you can send up the search input')
        console.log('navbarSearchInput', navbarSearchInput)
        props.handleProductSearch(navbarSearchInput)
        // setNavbarSearchInput('')
    }

    // Pass that state down to homepage to filter the products
    // filter products on homepage

    function handleNavbarInput(searchInput) {
        if(searchInput != '') {
            setNavbarSearchInput(searchInput)
        } else {
            // if the search input is empty show all products
            setNavbarSearchInput(searchInput)
            props.handleProductSearch(navbarSearchInput)
        }
    }

    return (
        <div>
           <Link to='/'>Homepage</Link>
           <Link to='/detail'>product detail</Link> 
           <Link to='/cart'>cart</Link>
           <Link to='/contact'>contact</Link> 

           <form onSubmit={handleSearchSubmission}>
            <input 
                type='text' 
                placeholder='search for your product'
                onChange={(event) => handleNavbarInput(event.target.value)}
                value={navbarSearchInput}
            />
            <button>Submit Search</button>
           </form>
        </div>
    )
}