import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = ({ id, name, price, description, image, ingredients }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const handleToggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // const ingredientsList = ingredients.split(",").map((ingredient, index) => (
  //   <p key={index} className="food-item-ingredient">
  //     {ingredient.trim()}
  //   </p>
  // ));
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
        <button className="btn-ingredients" onClick={handleToggleIngredients}>
          {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
        </button>
        {showIngredients && (
          <div className="food-item-ingredients">
            <p className="food-item-ingredient">{ingredients}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
