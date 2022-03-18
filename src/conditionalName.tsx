import { useState } from "react";

function saveItem(name: string, id: number) {
  console.log(name, id)
}

function ConditionalName({ name, id, isCheckedAdmin }: any) {
  const [newName, setNewName] = useState(name);

  if (isCheckedAdmin) return (
    <>
      <input defaultValue={name} onChange={e => setNewName(e.target.value)}></input>
      <button onClick={() => saveItem(newName, id)}>save</button>
    </>
  )

  return <h2>{name}</h2 >
}

export default ConditionalName;