import { useState } from "react";

export default function Player({ initialaName, symbol }) {
  // in order to update the value of  the playe name we defind the new state
  const [playName, setPlayerName] = useState(initialaName);
  // in order to use edit playe name must use usestate and then defind the use state
  const [isEditing, setIsEditing] = useState(false);

  // defind the funtion when the playe click the edit button and this trigger
  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    // in react you should not do like this updating state besd on the the previous state
    // setIsEditing(!isEditing);a => schedules a sate update to true but does not immmideteliy change the state
    // you should add function in order to update besd on prevois statit
    setIsEditing((editing) => !editing);
  }
  //and theis new state have afuntion triggred when click the edeti butt outomaticaliy change thiat
  // that lisne event on the input button that event is a list of carcther or pasr of charactr target emmit the target add in to the value of the input
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  // in order to use when the user edit the name and seen i stor playername varibal in the jsx code to use conditionaliy
  let editablePlayerName = <span className="player-name">{playName}</span>;

  //if play click the edit button then isediting = true then  the play see this inpuut button
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
