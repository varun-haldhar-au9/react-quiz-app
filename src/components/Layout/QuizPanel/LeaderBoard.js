import React, { Component } from "react";
import { connect } from "react-redux";
import * as female from "../../img/profiles/female";
import * as male from "../../img/profiles/male";
import "../../css/LeaderBoard.css";

class LeaderBoard extends Component {
  state = {
    user: [],
  };
  componentDidMount() {
    this.setState({
      user: { ...this.props.users[0], index: "1st", avatar: female.d },
    });
  }
  render() {
    const users = this.props.users;
    const { user } = this.state;
    return (
      <div className="leaderboard">
        <div className="leaderboard-header">
          <div className="profile d-flex">
            <img src={user.avatar} alt="" />
            <div className="profile-text">
              <h5>{user.name}</h5>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="position text-center">
            <p>
              You are in <b>{user.index}</b> place with <b>{user.points}</b>{" "}
              points
            </p>
          </div>
        </div>
        <div className="leaderboard-footer overflow-auto ">
          {this.makeProfile(users)}
        </div>
      </div>
    );
  }
  makeProfile = (users) => {
    return users.map((user, index) => {
      let image = "";
      if (user.avatar === "") {
        image = this.imageGenerator(user);
      } else {
        image = user.avatar;
      }
      return (
        <div
          onClick={(e) => this.onClickHandler(user, image, index + 1)}
          type="button"
          className="user d-flex justify-content-between"
        >
          <div>
            <b className="number">{index + 1}</b>
            <img src={image} alt="" />
            <b className="name">{user.name}</b>
          </div>
          <div>
            <b className="point">{user.points}</b>
          </div>
        </div>
      );
    });
  };

  onClickHandler(user, image, index) {
    let position = "1st";
    if (index === 2) {
      position = "2nd";
    } else if (index === 3) {
      position = "3rd";
    } else if (index > 3) {
      position = `${index}th`;
    }
    this.setState({
      user: { ...user, index: position, avatar: image },
    });
  }

  imageGenerator = (user) => {
    const rand = parseInt(0 + Math.random() * 4);
    const fimg = [female.a, female.b, female.c, female.d];
    const mimg = [male.a, male.b, male.c, male.d];
    if (user.gender === "male") {
      return mimg[rand];
    } else {
      return fimg[rand];
    }
  };
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(LeaderBoard);
