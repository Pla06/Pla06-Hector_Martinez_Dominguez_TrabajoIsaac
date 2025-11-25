import '../Score/Score.css';

interface ScoreProps {
  score: number;
  totalQuestions: number;
  streak: number;
}

const Score: React.FC<ScoreProps> = ({ score, totalQuestions, streak }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="score-container">
      <h2>Puntuación</h2>
      <div className="score-stats">
        <div className="stat">
          <span className="stat-value">{score}</span>
          <span className="stat-label">Aciertos</span>
        </div>
        <div className="stat">
          <span className="stat-value">{totalQuestions}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat">
          <span className="stat-value">{percentage}%</span>
          <span className="stat-label">Precisión</span>
        </div>
        <div className="stat">
          <span className="stat-value streak">{streak}</span>
          <span className="stat-label">Racha</span>
        </div>
      </div>
    </div>
  );
};

export default Score;