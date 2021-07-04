import { useHistory } from "react-router-dom";
// import TestPage from "./TestPage";

export default function TestButton(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/testpage")
  }

  return (
    <button type="button" onClick={handleClick}>
      TEST BUTTON
    </button>
  );
}