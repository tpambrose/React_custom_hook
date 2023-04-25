import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  // Set the initial state using an object instead of individual variables
  const [state, setState] = useState({
    loading: true,
    data: {},
    error: {},
  });

  useEffect(() => {
    // Make the API call using axios
    if (url === "") {
      return;
    }
    axios
      .get(url)
      .then((response) => {
        setState({
          loading: false,
          data: response.data,
          error: null,
        });
      })
      .catch((error) => {
        setState({
          loading: false,
          data: null,
          error: error,
        });
      });
  }, [url]); // Only re-run the effect if the URL changes

  return state; // Return the state object
}

export default useFetch;
