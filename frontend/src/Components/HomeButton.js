import { useHistory } from "react-router-dom";

export default function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      HOME
    </button>
  );
}
