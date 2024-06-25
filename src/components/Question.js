import { useQuiez } from "../contexts/QuiezContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiez();
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
