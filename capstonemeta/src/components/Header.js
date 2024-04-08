import HeaderPhoto from "./HeaderPhoto";
import Nav from "./Nav";
import '../styles/header.css';


function Header() {
  return (
    <>
      <Nav />
      <div className='header-div'>
        <div className='header-div-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='header-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Reserve a table</button>
        </div>
        <HeaderPhoto />
      </div>
    </>
  );
}

export default Header
