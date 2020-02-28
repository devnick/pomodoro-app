import React from "react";

export function TimerActions(props) {
  const startButtonDisabled = props.currentTime > 0;
  const stopButtonDisabled = props.currentTime === 0;
  return (
    <div className="TimerActions">
      <button onClick={props.startTimer} disabled={startButtonDisabled}>
        Start Timer
      </button>
      <button onClick={props.stopTimer} disabled={stopButtonDisabled}>
        Stop Timer
      </button>
    </div>
  );
}

export default TimerActions;
