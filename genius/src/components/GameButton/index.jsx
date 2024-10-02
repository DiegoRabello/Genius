import './styles.css'
export function GameButton({number,text}) {
  return (
    <button className="game-button"  id={number}>
      {text} 
    </button>
  );
}
