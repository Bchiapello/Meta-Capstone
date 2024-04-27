import HeaderPhoto from "./HeaderPhoto";
import '../styles/header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <div className='header-div'>
        <div className='header-div-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='header-p'>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</p>
          <Link to="/booking"><button aria-label="On Click">Reserve a table</button></Link>
        </div>
        <HeaderPhoto />
      </div>
    </>
  );
}

export default Header
