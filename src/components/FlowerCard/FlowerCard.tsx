import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import s from "./FlowerCard.module.css";

type FlowerCardProps = {
  image: string;
  name: string;
  price: number;
};

const FlowerCard: React.FC<FlowerCardProps> = ({ image, name, price }) => {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleAddToCart = () => {
    setAddedToCart(!addedToCart);
  };

  return (
    <div className={s.card}>
      <img src={image} alt={name} className={s.image} />
      <h3 className={s.name}>{name}</h3>
      <p className={s.price}>{price.toLocaleString()} ₽</p>

      <div className={s.actions}>
        <button onClick={handleLike} className={s.button}>
          <Heart
            size={24}
            color={liked ? "red" : "black"}
            fill={liked ? "red" : "none"}
          />
        </button>
        <button onClick={handleAddToCart} className={s.button}>
          <ShoppingCart size={24} color={addedToCart ? "black" : "gray"} />
        </button>
      </div>
    </div>
  );
};

export default FlowerCard;
