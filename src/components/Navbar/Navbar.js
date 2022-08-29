import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <div>
           <Link to='/'>Homepage</Link>
           <Link to='/detail'>product detail</Link> 
           <Link to='/cart'>cart</Link>
           <Link to='/contact'>contact</Link> 
        </div>
    )
}