import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      let response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "london",
        },
      });
      setResult(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("London");
  }, []);

  return [searchApi, result, errorMessage];
};
