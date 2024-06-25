import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";
import { useQuiez } from "../contexts/QuiezContext";

function Timer() {
  const { secondsRemaining, dispatch } = useQuiez();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && 0}
      {mins} : {seconds < 10 && 0}
      {seconds}
      {/* `${mins < 10 && 0}${mins}:${
      seconds < 10 && 0
    }${seconds}`} */}
    </div>
  );
}

export default Timer;
