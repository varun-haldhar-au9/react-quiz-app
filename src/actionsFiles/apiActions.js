const baseURL = "https://quizapi.io/api/v1/questions";
const apiKey = "cyc3NBjsPYqpAVUL5NLdcxMx9W8fQ6Pr37JcW6JD";

export const getQuiz = (category) => {
  if (category === "random") {
    category = "";
  }
  const completeURL = `${baseURL}?apiKey=${apiKey}&category=${category}&limit=10`;
  const response = fetch(completeURL, { method: "GET" }).then((res) =>
    res.json()
  );
  return {
    type: "QUIZ_DATA",
    payload: response,
  };
};

const leaderBoardApi = "http://quiz-app-data.herokuapp.com/global_ranking";

export const getGlobalLeaderBoard = () => {
  const response = fetch(leaderBoardApi, { method: "GET" }).then((res) =>
    res.json()
  );
  return {
    type: "GLOBAL_LEADERBOARD",
    payload: response,
  };
};

export const setLoaded = () => {
  return {
    type: "LOADED",
  };
};
