import React, { useState } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerActions from "./TimerActions";

export function PomodoroApp() {
  // Default value for current time
  const [currentTime, setCurrentTime] = useState(0);
  // Default value for timer
  const [timer, setTimer] = useState(null);
  // Interval in milliseconds
  const interval = 1000;

  // Start the timer
  function startTimer() {
    const timerId = setInterval(incrementCurrentTime, interval);
    setTimer(timerId);
  }

  // Stop the timer
  function stopTimer() {
    clearInterval(timer);
    resetCurrentTime();
  }

  // Increment the current time by 1
  function incrementCurrentTime() {
    setCurrentTime(currentTime => currentTime + 1);
  }

  // Reset the current time
  function resetCurrentTime() {
    setCurrentTime(() => 0);
  }

  return (
    <div className="PomodoroApp">
      <TimerDisplay currentTime={currentTime} />
      <TimerActions
        currentTime={currentTime}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
    </div>
  );
}

export default PomodoroApp;
