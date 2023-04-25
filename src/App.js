import React, { useState, useEffect } from "react";
import useWindowResize from "./hooks/useWindowResize";
import useFetch from "./hooks/useFetch";

export default function App() {
  const { windowHeight, windowWidth } = useWindowResize();
  const [url, setUrl] = useState("");
  const { loading, data, error } = useFetch(url);

  // function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault();
    setUrl(event.target.url.value);
  }

  // update the URL state if the URL prop changes
  useEffect(() => {
    if (url) {
      setUrl(url);
    }
  }, [url]);

  return (
    <div>
      <h1>Assignment 1</h1>
      <p>
        Height: <span style={{ fontWeight: 800 }}>{windowHeight}</span>
      </p>
      <p>
        Width: <span style={{ fontWeight: 800 }}>{windowWidth}</span>
      </p>
      <h1>Assignment 2</h1>
      <div>
        {/* Form for user to input URL */}
        <form onSubmit={handleSubmit}>
          <input type="text" name="url" placeholder="Enter URL..." />
          <button type="submit">Fetch Data</button>
        </form>

        {/* Display API fetch state */}
        <div>
          <p>loading: {loading ? "true" : "false"}</p>
          <p>data:{data ? JSON.stringify(data) : "{}"}</p>
          <p>error: {error ? JSON.stringify(error) : "{}"}</p>
        </div>
      </div>
    </div>
  );
}
