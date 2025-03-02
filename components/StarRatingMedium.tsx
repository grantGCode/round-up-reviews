import Image from "next/image";
import YellowStar from '../public/stars/Star-Yellow-Medium.png';
import GrayStar from '../public/stars/Star-Gray-Medium.png';

interface StarDisplayProps {
  rating: number;
}

const StarDisplay: React.FC<StarDisplayProps> = ({ rating }) => {

  return (
    <div className="flex flex-row items-center my-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          className="mx-1"
          src={index < rating ? YellowStar : GrayStar}
          alt={index < rating ? "YellowStar" : "GrayStar"}
        />
      ))}
    </div>
  );
};

export default StarDisplay;