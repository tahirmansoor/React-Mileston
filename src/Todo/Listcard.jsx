import React, { useState } from "react";
import { Container } from "@mui/material";

const Listcard = () => {
  const [text, Setext] = useState([]);
  console.log(text);

  function addItem() {
    const newTask = { id: Date(), text }; 
    Setext([...text,newTask ]);
  }

  return (
    <>
      <Container>
        <input
          type="text"
          value={text}
          onChange={(e) => Setext(e.target.value)}
        />
        <button onClick={addItem}> Add More</button>
      </Container>
    </>
  );
};

export default Listcard;
