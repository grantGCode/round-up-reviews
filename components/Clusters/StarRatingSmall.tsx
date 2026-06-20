import Image from "next/image";
import SmallStar from '../../public/stars/Small-Star.png';

interface StarDisplayProps {
  rating: number;
}

const StarDisplay: React.FC<StarDisplayProps> = ({ rating }) => {
  return (
    <div className="flex flex-row items-center">
      {Array.from({ length: rating }).map((_, index) => (
        <Image
          key={index}
          className="mx-1"
          src={index < rating ? SmallStar : ''}
          alt={index < rating ? "SmallStar" : ''}
        />
      ))}
    </div>
  );
};

export default StarDisplay;