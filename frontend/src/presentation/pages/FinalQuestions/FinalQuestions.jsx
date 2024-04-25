import { useEffect, useState } from "react";
import "./FinalQuestions.css";
import { getQuestions } from "../../../services/questionsService";

export const FinalQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mainFinalQuestions">
      <h1>Ha llegado el momento de que preparéis vuestra presentación</h1>
      <section>
        <p>Utilizad las siguientes preguntas como guía.</p>
        <p>
          Recordad que tenéis 10 minutos para exponer la información y todas las
          personas del equipo deben participar. ¡Ánimo!
        </p>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              <span>{question.id + "."}</span>
              <p>{question.question}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
