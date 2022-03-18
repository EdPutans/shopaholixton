import { useState } from "react";
import { saveItem } from "./utils";


function ConditionalName({ name, id, isCheckedAdmin }: any) {
  const [newName, setNewName] = useState(name);

  if (isCheckedAdmin) return (
    <>
      <input defaultValue={name} onChange={e => setNewName(e.target.value)}></input>
      <button onClick={() => saveItem(newName, id)}>save</button>
    </>
  )

  return <p>{name}</p >
}

export default ConditionalName;