const TeamsMini = ({team}) => {
  return (
    <tr>
      <td>{team.name}</td> 
      <td>{team.short_name}</td> 
      <td>{team.strength}</td> 
  </tr>)
}

export default TeamsMini;
