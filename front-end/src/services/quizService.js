import axios from "axios";

export default class QuizService {
  getRandomQuiz() {
    return axios.get("https://quizapi.io/api/v1/questions", {
      params: { apiKey: "qdEzmI1siD96pLSOfUQ6PlDvZ8RNUeelHdLTWzf7" },
    });
  }
}
