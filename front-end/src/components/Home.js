import React from "react";
import { useState, useEffect } from "react";
import QuizService from "services/quizService";
export default function Home(props) {
  let quizService = new QuizService();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    quizService
      .getRandomQuiz()
      .then((res) => setQuestions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    // menu at the top -> profile, competitive, exercise options
    // when signed in
    <div>
      Welcome {props.user.name}, you can start challenging your friends
      <h2>Your Statistics</h2>
      Total Points = {props.user.points}
      Total Wins = {props.user.wins}
      Total Loses = {props.user.loses}
      {/* Your Win rate =
      {parseInt(props.user.wins) /
        (parseInt(props.user.loses) + parseInt(props.user.wins))} */}
      <br></br>
      <h2>Your Daily questions</h2>
      <ul>
        {questions.map((question) => (
          <li className="questions" key={question.id}>
            {question.question}
          </li>
        ))}
      </ul>
      <button onClick={props.Logout}>Logout</button>
    </div>
  );
}
