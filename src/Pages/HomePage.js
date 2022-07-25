const HomePage = ({
  clientMessage,
  setClientMessage,
  serverMessage,
  sendReceiveMessage,
}) => {
  return (
    <div>
      <p>{clientMessage}</p>
      <p>{serverMessage}</p>

      <div>
        <input
          placeholder="New client message"
          onChange={(e) => {
            const dateTime = new Date();
            setClientMessage(
              `Message: ${e.target.value} at time ${dateTime.toString()}`
            );
          }}
        />
        <button onClick={() => sendReceiveMessage()}>Send</button>
      </div>
    </div>
  );
};

export default HomePage;
