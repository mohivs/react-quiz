import { useQuiez } from "../contexts/QuiezContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiez();

  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        youre Score <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-ui"
      >
        reset
      </button>
    </>
  );
}

export default FinishScreen;
