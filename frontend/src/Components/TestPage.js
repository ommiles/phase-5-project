import React from "react";
import TestButton from "./TestButton";
import HomeButton from "./HomeButton";

export default function TestPage({ history }) {
  return (
    <div>
      <TestButton />
      <HomeButton />
      <h1>This is the TestPage Component.</h1>
    </div>
  );
}
