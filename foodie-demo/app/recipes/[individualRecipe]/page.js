'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

function IndividualRecipe(params) {

  const recipes = [
    {
        "recipeTitle": "shrimp-tostadas",
        "id": 1,
        "title": "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "subtitle": "Sysco Culinary Team, Houston, TX",
        "ingredients": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "imgUrl": "#"
    },
    {
        "recipeId": "shredded-chicken-lemon-orzo-soup",
        "id": 2,
        "title": "Squi est esse",
        "subtitle": "Sysco Culinary Team, Houston, TX",
        "ingredients": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "directions": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "imgUrl": "#"
    },
    {
        "recipeId": "truck-stop-breakfast",
        "id": 3,
        "title": "Ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "subtitle": "Sysco Culinary Team, Houston, TX",
        "ingredients": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "directions": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "imgUrl": "#"
    },
    {
        "recipeId": "apple-caramel-basque-cheesecake",
        "id": 4,
        "title": "Nesciunt quas odio",
        "subtitle": "Sysco Culinary Team, Houston, TX",
        "ingredients": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "directions": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "imgUrl": "#"
    }
   
]

  console.log("Parameters: "+params);

  const router = useRouter()


  return (
    <div>
      <div style={{marginTop:"9rem"}}>

  
      <h1>Recipe  Details</h1>
      </div>
    </div>
  )
}

export default IndividualRecipe