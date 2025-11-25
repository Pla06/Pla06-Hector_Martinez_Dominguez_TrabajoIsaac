import type { IsaacItem } from '../../data/isaacData';
import '../../components/Card/Card.css';

interface CardProps {
  item: IsaacItem;
  onClick: (item: IsaacItem) => void;
  isSelected: boolean;
}

const Card: React.FC<CardProps> = ({ item, onClick, isSelected }) => {
  return (
    <div 
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(item)}
    >
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
      </div>
    </div>
  );
};

export default Card;