import Image from "next/image";
import StarYellow from "../public/StarYellow.png";
import StarGray from "../public/StarGray.png";

interface StarDisplayProps {
  rating: number;
}

const StarDisplay: React.FC<StarDisplayProps> = ({ rating }) => {
  return (
    <div className="flex flex-row justify-center items-center mb-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          className="mx-1"
          src={index < rating ? StarYellow : StarGray}
          alt={index < rating ? "Yellow Star" : "Gray Star"}
        />
      ))}
    </div>
  );
};

export default StarDisplay;