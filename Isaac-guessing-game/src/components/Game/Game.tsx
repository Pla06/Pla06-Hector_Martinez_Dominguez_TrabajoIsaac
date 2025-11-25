import { useState, useEffect } from 'react';
import{ isaacData, type IsaacItem } from '../../data/isaacData';
import Card from '../Card/Card';
import Score from '../Score/Score';
import '../Game/Game.css';

const Game: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<IsaacItem | null>(null);
  const [options, setOptions] = useState<IsaacItem[]>([]);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [streak, setStreak] = useState(0);
  const [message, setMessage] = useState('');
  const [selectedItem, setSelectedItem] = useState<IsaacItem | null>(null);

  // Inicializar nueva ronda
  const startNewRound = () => {
    // Seleccionar un item aleatorio como respuesta correcta
    const correctItem = isaacData[Math.floor(Math.random() * isaacData.length)];
    setCurrentItem(correctItem);
    
    // Seleccionar opciones incorrectas
    const incorrectOptions = isaacData
      .filter(item => item.id !== correctItem.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    // Mezclar opciones correctas e incorrectas
    const allOptions = [correctItem, ...incorrectOptions]
      .sort(() => Math.random() - 0.5);
    
    setOptions(allOptions);
    setSelectedItem(null);
    setMessage('');
  };

  // Manejar selección de respuesta
  const handleCardClick = (item: IsaacItem) => {
    if (selectedItem) return; // Evitar múltiples selecciones
    
    setSelectedItem(item);
    setTotalQuestions(prev => prev + 1);
    
    if (item.id === currentItem?.id) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
      setMessage('¡Correcto! 🎉');
    } else {
      setStreak(0);
      setMessage(`Incorrecto 😞 Era: ${currentItem?.name}`);
    }
    
    // Siguiente ronda después de 2 segundos
    setTimeout(() => {
      startNewRound();
    }, 2000);
  };

  // Iniciar el juego al cargar el componente
  useEffect(() => {
    startNewRound();
  }, []);

  return (
    <div className="game-container">
      <h1>Adivina el Elemento de The Binding of Isaac</h1>
      
      <Score 
        score={score} 
        totalQuestions={totalQuestions} 
        streak={streak} 
      />

      {currentItem && (
        <div className="question-section">
          <h2>¿Qué es esto?</h2>
          <div className="image-container">
            <img 
              src={currentItem.image} 
              alt="¿Qué elemento es?"
              className="question-image"
            />
          </div>
          {/* Mostrar solo la imagen como pista (sin texto) */}
        </div>
      )}

      {message && (
        <div className={`message ${message.includes('Correcto') ? 'correct' : 'incorrect'}`}>
          {message}
        </div>
      )}

      <div className="options-grid">
        {options.map((item) => (
          <Card
            key={item.id}
            item={item}
            onClick={handleCardClick}
            isSelected={selectedItem?.id === item.id}
          />
        ))}
      </div>

      <div className="game-info">
        <p>Selecciona la opción correcta entre los elementos mostrados</p>
        <p>Personajes • Objetos • Jefes</p>
      </div>
    </div>
  );
};

export default Game;