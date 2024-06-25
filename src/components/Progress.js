import { useQuiez } from "../contexts/QuiezContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiez();
  console.log(numQuestions);
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + +(answer !== null)}
      ></progress>
      <p>
        Question
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints} Points
      </p>
    </header>
  );
}

export default Progress;
