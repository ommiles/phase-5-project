import { useHistory } from "react-router-dom";

export default function TestButton(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/testpage");
  }

  return (
    <button type="button" onClick={handleClick}>
      TEST BUTTON
    </button>
  );
}
