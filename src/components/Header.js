import React from "react";

function Header() {
  return (
    <React.Fragment>
      <nav class="navbar">
        <a class="navbar-brand" href="#">Logo</a>
        <ul class="nav__links">
          <li><a href="">Notifications</a></li>
          <li><a href="">User</a></li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Header;

{/* <header>
    <img class="logo" src="/images/logo.jpg" alt="logo">
      <nav>
        <ul class="nav__links">
          <li><a href="index.html">Home</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">About</a></li>
        </ul>
      </nav>
    <a class="cta" href="mailto:tyleremmerson0216@gmail.com"><button>Contact</button></a>
  </header>

  header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 10%;
  background-color: #FAF7A6;
} */}