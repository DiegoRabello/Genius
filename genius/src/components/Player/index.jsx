import './styles.css';
export function Player({ playerStyle, name }) {
  return (
    <div className={playerStyle}>
      <p>{name}</p>
    </div>
  );
}
