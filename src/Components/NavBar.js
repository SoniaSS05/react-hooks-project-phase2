import React from "react";
import { useHistory } from "react-router-dom";

function NavBar() {
  console.log('ENTRE A NAVBAR')
  const history = useHistory();

  function handleClick() {
    history.push("/AddBook");
  }

  return (
    <nav>
      <button onClick={handleClick}>Logout</button>
    </nav>
  );
} 

export default NavBar;