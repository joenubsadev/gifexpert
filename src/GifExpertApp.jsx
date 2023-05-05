import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = newCategory => {
    console.log(newCategory)

    if (categories.includes(newCategory)) return;

    setCategories(categories => [
      ...categories, newCategory
    ])
  }


  console.log(categories);

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory
        onNewCategory={value => onAddCategory(value)}
      />
        {categories.map((category) => (
          <GifGrid
            category={category}
            key={category}
          />
        ))}

    </>
  )
}
