import Image from "next/image";
import YellowStar from '../public/stars/Star-Yellow-Medium.png';
import GrayStar from '../public/stars/Star-Gray-Medium.png';

interface StarDisplayProps {
  rating: number;
}

const StarDisplay: React.FC<StarDisplayProps> = ({ rating }) => {

  return (
    <div className="flex flex-row justify-center my-1 w-full max-w-[140px] flex-wrap overflow-hidden">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          className="w-5 h-5.5 mx-0.5"
          src={index < rating ? YellowStar : GrayStar}
          alt={index < rating ? "YellowStar" : "GrayStar"}
        />
      ))}
    </div>
  );
};

export default StarDisplay;