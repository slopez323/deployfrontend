import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  const [clientMessage, setClientMessage] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const sendReceiveMessage = async () => {
    const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
    const url = `${urlEndpoint}/post-message`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientMessage }),
    });
    const responseJSON = await response.json();
    setServerMessage(responseJSON.serverMessage);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <HomePage
              clientMessage={clientMessage}
              setClientMessage={setClientMessage}
              serverMessage={serverMessage}
              sendReceiveMessage={sendReceiveMessage}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
