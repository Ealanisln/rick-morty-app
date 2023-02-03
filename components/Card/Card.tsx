import Image from 'next/image';
import { Character } from "@/app/information/characters/models";
import { Location } from "@/app/information/locations/models";
import "./Card.css";

export interface CardData {
  name: string;
  type?: string;
  created: string;
  image?: string;
}

interface Props {
    data: CardData;
}

function Card({data}: Props) {
  let formattedType = data.type;
  formattedType ||= "No type"; 
  return (
    <div className="Card">
        <p>Name: {data.name}</p>
        <p>Type: {formattedType}</p>
        <p>Created: {data.created}</p>
        {!!data.image && (
          <Image width='100' height='100' src={data.image} alt={data.name} />
        )}
    </div>
  )
}

export default Card