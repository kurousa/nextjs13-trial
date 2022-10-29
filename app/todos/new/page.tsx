"use client";

import { useState } from "react"

export default function Page() {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>New Todo</h1>
      <form onSubmit={() => {
        alert("submitted new todo")
      }}>
        <input
          value={value}
          onChange={(e) => { setValue(e.target.value) }}
        />
        <input type="submit" />
      </form>
    </>
  )
}