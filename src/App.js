import "./styles.css";
import { useState } from "react";

function MiniFigma() {
  const [font, setFont] = useState("");
  const [fontSize, setFontSize] = useState("");
  function fontHandler1() {
    setFont("'Redressed', cursive");
  }
  function fontHandler2() {
    setFont("'Lobster', cursive");
  }
  function fontSizeHandler1() {
    setFontSize("16px");
  }
  function fontSizeHandler2() {
    setFontSize("24px");
  }
  function fontSizeHandler3() {
    setFontSize("32px");
  }
  return (
    <div>
      <div style={{ height: "120px" }}>
        <p style={{ fontFamily: font, fontSize: fontSize }}>
          {" "}
          This is mini figma{" "}
        </p>
      </div>
      <div>
        <h3> Font Styles :</h3>
        <button onClick={fontHandler1}>Redressed</button>
        <button onClick={fontHandler2}>Lobster</button>
      </div>
      <div>
        <h3> Font Sizes :</h3>
        <button onClick={fontSizeHandler1}>Small</button>
        <button onClick={fontSizeHandler2}>Medium</button>
        <button onClick={fontSizeHandler3}> Large </button>
      </div>
      <div>
        <h3> Headings and Text :</h3>
        <button
          onClick={() => {
            fontSizeHandler3();
            fontHandler2();
          }}
        >
          Heading
        </button>
        <button
          onClick={() => {
            fontSizeHandler2();
            fontHandler1();
          }}
        >
          Text
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <MiniFigma />
    </div>
  );
}
