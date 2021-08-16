import axios from "axios";

export default class UserService {
  getUsers() {
    return axios.get("http://localhost:8080/api/users/getAll");
  }

  getByUserName(userName) {
    return axios.get(
      "http://localhost:8080/api/users/getByName?name=" + userName
    );
  }
}
