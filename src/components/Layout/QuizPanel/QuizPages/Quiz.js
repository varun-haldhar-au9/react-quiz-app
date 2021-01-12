import React from "react";
import Timer from "./Timer";
import "../../../css/Quiz.css";

const Quiz = ({ currentQuiz, currentPage }) => {
  return (
    <div>
      <Timer />
      <p>{currentPage + 1}/10</p>
      {currentQuiz.map((quiz) => {
        return (
          <div className="quizzes">
            <div className="question-title">
              <h4>{quiz.question}</h4>
            </div>

            <div className="options">
              <div type="button" className="option a">
                <h5>a</h5>
                <h6>{quiz.answers.answer_a}</h6>
              </div>
              <div type="button" className="option b">
                <h5>b</h5>
                <h6>{quiz.answers.answer_b}</h6>
              </div>
              <div type="button" className="option c">
                <h5>c</h5>
                <h6>{quiz.answers.answer_c}</h6>
              </div>
              <div type="button" className="option d">
                <h5>d</h5>
                <h6>{quiz.answers.answer_d}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;
