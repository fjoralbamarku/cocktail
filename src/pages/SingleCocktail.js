import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [singleCocktail, setSingleCocktail] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setSingleCocktail(newCocktail);
        } else {
          setSingleCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }, [id]);
  if (loading) return <Loading />;
  if (!singleCocktail) return <h2>No cocktail to display!!!</h2>;
  const {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  } = singleCocktail;
  return (
    <div>
      <Link to="/">BACK HOME</Link>
      <h2>{name}</h2>
      <img src={image} />
      <p>{info}</p>
      <h4>{category}</h4>
      <h4>{glass}</h4>
      <p>{instructions}</p>
      <p>
        {ingredients.map((ingridient) => {
          return <h1>{ingridient}</h1>;
        })}
      </p>
    </div>
  );
};
export default SingleCocktail;
