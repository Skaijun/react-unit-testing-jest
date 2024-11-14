import { useState } from "react";

export default function Greetings() {
  const [showChangedText, setShowChangedText] = useState(false);
  return (
    <div>
      <h2>Hello World</h2>
      {!showChangedText && <p>Testining React Components using Jest</p>}
      {showChangedText && <p>Changed!!</p>}
      <button onClick={() => setShowChangedText(true)}>change text</button>
    </div>
  );
}
