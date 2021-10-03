import React from "react";
import teamsList from "./teamsList";
import TeamsMini from "./teamsMini";

let state = {};

function HomePage() {
  return (
    <div className="body-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Team</th>
            <th scope="col">Team abbr.</th>
            <th scope="col">Strength</th>
          </tr>
        </thead>
        <tbody>
          <teamsList />
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
