import "./styles.css";
export function GameButton({ number, text }) {

  function handleClick() {
    console.log(text)
  }
  
  return (
    <button className="game-button" id={number} onClick={handleClick}>
      {text}
    </button>
  );
}
