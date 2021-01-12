import React, { Component } from "react";
import Loader from "../Loader/Loader";
import QuizBoard from "./QuizBoard";
import LeaderBoard from "./LeaderBoard";
import "../../css/QuizPanel.css";
import { connect } from "react-redux";
import * as action from "../../../actionsFiles/apiActions";

class QuizPanel extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.dispatch(action.getQuiz(params.id));
    this.props.dispatch(action.getGlobalLeaderBoard());
    this.props.dispatch(action.setLoaded());
  }
  render() {
    const {
      quizLoaded,
      isLoaded,
      lbLoaded,
      quizList,
      gLeaderboard,
    } = this.props.quiz;
    return (
      <div>
        {!quizLoaded || !lbLoaded || !isLoaded ? (
          <Loader />
        ) : (
          <div class="row">
            <div class="col-8">
              <QuizBoard quiz={quizList} />
            </div>
            <div class="col-4">
              <LeaderBoard users={this.highestFinder(gLeaderboard)} />
            </div>
          </div>
        )}
      </div>
    );
  }
  highestFinder = (array) => {
    array.sort(function (a, b) {
      return b.points - a.points;
    });
    return array;
  };
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(QuizPanel);
