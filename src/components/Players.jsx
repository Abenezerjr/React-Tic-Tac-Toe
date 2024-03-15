import { useState } from "react";

export default function Player({
  initialaName,
  symbol,
  isActive,
  onChageName,
}) {
  const [playName, setPlayerName] = useState(initialaName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChageName(symbol, playName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
