import React, { useEffect, useLayoutEffect, useRef } from "react";

export default function App() {
  const boxRef = useRef();

  useEffect(() => {
    console.log("useEffect run");
    boxRef.current.style.transform = "translateX(300px)";
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect run");
    boxRef.current.style.transform = "translateX(300px)";
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          background: "tomato",
          transition: "all 0.5s"
        }}
      ></div>
    </div>
  );
}
