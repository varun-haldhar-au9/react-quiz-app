import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "../../../actionsFiles/apiActions";
import "../../css/Home.css";

class Home extends Component {
  getQuizFromApi = (e) => {
    const category = e.target.name;
    this.props.dispatch(action.getQuiz(category));
  };
  render() {
    return (
      <div className="container home">
        <div className="header-area">
          <h2>I'm QuizUp</h2>
          <p>
            <b>Bright emotions, happy audiences & beautiful memories</b>
          </p>
          <button type="button">Create Quiz</button>
        </div>
        <div className="footer-area">
          <div className="row">
            <div className="col-5"></div>
            <div className="col-7">
              <div className="quiz-section">
                <div className="quiz-heading">
                  <h4>Latest Quizzes</h4>
                </div>
                <div className="quiz-list">
                  <ul>
                    <li>
                      <b>QuizUP :</b>
                      <Link
                        to="/quiz/linux"
                        name="linux"
                        onClick={this.getQuizFromApi}
                      >
                        Linux based quiz
                      </Link>
                    </li>
                    <li>
                      <b>QuizUP :</b>
                      <Link
                        to="/quiz/devops"
                        name="docker"
                        onClick={this.getQuizFromApi}
                      >
                        DevOps based quiz
                      </Link>
                    </li>
                    <li>
                      <b>QuizUP :</b>
                      <Link
                        to="/quiz/docker"
                        name="docker"
                        onClick={this.getQuizFromApi}
                      >
                        Docker based quiz
                      </Link>
                    </li>
                    <li>
                      <b>QuizUP :</b>
                      <Link
                        onClick={this.getQuizFromApi}
                        name="random"
                        to="/quiz/random"
                      >
                        Random quiz
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Home);
