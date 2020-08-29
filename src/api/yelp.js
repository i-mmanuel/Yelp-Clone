import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 8CJhDqruwlM83dlzpqQMhp9Zuf1p19x-zvLTTcBnrqIYsd8G0-qTqzHHcWT6xu2lDUAxKFUcUwOheWTgbkloxJQcdvvEoGOAi40NpAkoVdnkScHZS1XjlknuV8kdX3Yx",
  },
});
