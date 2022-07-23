import { useState } from "react";

export const Message = (props) => {
  const [message, setMessage] = useState("Welcome Visitor");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage('Thank you')}>Click for Change</button>
    </div>
  );
};
