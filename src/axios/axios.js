import axios from "axios";

  const instance = axios.create({
    baseURL: "https://chitter-backend-api-v2.herokuapp.com"
  });

  const addHeader = (token) => {
    instance.defaults.headers.common['Authorization'] = `Token token=${token}`;
  }

  export { instance, addHeader }



