import { useState, useEffect } from "react";

function useWindowResize() {
  // Initialize the state with the current window size
  const [windowSize, setWindowSize] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  // Function to update the state with the new window size
  const handleResize = () => {
    setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    // Add an event listener for the "resize" event on the window object
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Only run this effect once, when the component mounts

  return windowSize; // Return the current window size
}

export default useWindowResize;
