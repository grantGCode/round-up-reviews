'use client'
import { useState } from "react";
import Image from "next/image"
import StarYellow from '../public/StarYellow.png';
import StarGray from '../public/StarGray.png';
import type {AddStarRatingProps} from '../app/types/common'

const AddStarRating: React.FC<AddStarRatingProps> = ({ onRatingChange }) => {
    const [rating, setRating] = useState<number>(0); // Stores the clicked rating
    const [hovered, setHovered] = useState<number | null>(null); // Stores the hovered index

    const handleClick = (index: number) => {
      const newRating = index + 1;
      setRating(newRating);
      if (onRatingChange) {
        onRatingChange(newRating);
      }
    };
    console.log(rating)
    return (
        <div id="Stars" className="flex flex-row justify-center items-center m-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
          key={index}
          className="mx-1 cursor-pointer transition-opacity duration-200"
          src={index < (hovered !== null ? hovered + 1 : rating) ? StarYellow : StarGray}
          alt={index < (hovered !== null ? hovered + 1 : rating) ? "Yellow Star" : "Gray Star"}
          onClick={() => handleClick(index)}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        />
        ))}
      </div>
  )
}

export default AddStarRating