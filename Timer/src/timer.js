import React from "react";

function App() {
  const [seconds, setSeconds] = React.useState(100);
  const [timerActive, setTimerActive] = React.useState(false);

  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 100, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  return (
    <div>
      {seconds ? (
        <React.Fragment>
          <button onClick={() => setTimerActive(!timerActive)}>
            {timerActive ? "Pause" : "Start"}
          </button>
          <div>{seconds}</div>
        </React.Fragment>
      ) : (
        <button onClick={() => setSeconds(100)}>Start again</button>
      )}
    </div>
  );
}
export default App;
