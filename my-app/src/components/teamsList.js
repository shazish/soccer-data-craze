import React from "react";
import TeamsMini from "./teamsMini";

class teamsList extends React.Component {
  render() {
    return (
      <div>
        {this.state.teams?.map((el) => (
          <div>
            <span>{el}</span>
            <TeamsMini team={el} />
          </div>
        ))}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      teams: ["a", "b", "c"],
    };
  }
}

export default teamsList;
