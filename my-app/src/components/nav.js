import { Route } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <Route exact path="/" component="{HomePage}" />
      <Route path="/login" component="{Login}" />
    </div>
  );
}

export default Nav;
