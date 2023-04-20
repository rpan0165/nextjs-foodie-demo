'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Link from 'next/link';

function IndividualRecipe(params) {

  const posts = [
    {
      id: 1,
      category: 'MEAL TYPE',
      title: 'Shrimp Tostadas',
      subtitle: 'Recipe by Sysco Culinary Team',
      href: '/recipes/recipeone',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

      imageUrl:
        'https://foodie.sysco.com/wp-content/uploads/2021/02/Shrimp-Tostadas-300x415.jpg',
    },
    {
      id: 2,
      category: 'MEAL TYPE',
      title: 'Shredded Chicken Lemon Orzo Soup',
      subtitle: 'Recipe by Sysco Culinary Team',
      href: '/recipes/recipetwo',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

      imageUrl:
        'https://foodie.sysco.com/wp-content/uploads/2021/02/Shredded-Chicken-300x415.png',
    },
    {
      id: 3,
      category: 'MEAL TYPE',
      title: 'Shredded Chicken Lemon Orzo Soup',
      subtitle: 'Recipe by Sysco Culinary Team',
      href: '/recipes/recipethree',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

      imageUrl:
        'https://foodie.sysco.com/wp-content/uploads/2021/02/Truck-Stop-Breakfast-300x415.png',
    },
    {
      id: 4,
      category: 'MEAL TYPE',
      title: 'Apple Caramel Basque Cheesecake',
      subtitle: 'Recipe by GSC Culinary Team',
      href: '/recipes/recipefour',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

      imageUrl:
        'https://foodie.sysco.com/wp-content/uploads/2022/03/7188544-Basque-cheesecake-1-300x415.jpg',
    }
  ]

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

  console.log("Parameters: " + params);

  const router = useRouter()


  return (
    <div>
      <div style={{ marginTop: "8rem" }}>
        <div style={{
          display: 'block',
          width: 700, padding: 30
        }}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
              Recipes
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Vegan Thai Massaman Curry
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <hr />
        <h2 className="text-center font-bold text-4xl py-2 mt-4" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Related Recipes</h2>
        <p className='text-center font-bold mb-4'>Find more innovative dishes for your menu.</p>
        <div className='grid grid-cols-4 mr-5 mb-5 mx-auto' style={{ width: "85%" }}>
          {
            posts.map((post) => (
              <Link href={post.href} style={{ textDecoration: "none" }}>
                <div className='flex flex-col border-2 border-orange-200 rounded-lg' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
                  <div className='p-3' style={{ height: "10rem" }}>
                    <h4 className='text-sky-600 text-sm font-bold my-2'>{post.category}</h4>
                    <h3 className='font-bold text-lg text-black' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{post.title}</h3>
                    <p className='font-bold text-black my-2' style={{ fontSize: "12px" }}>{post.subtitle}</p>
                  </div>
                  <div style={{ width: "100%", borderRadius: "0 0 10px 10px", height: "18rem", backgroundColor: "yellow", backgroundImage: "url(https://foodie.sysco.com/wp-content/uploads/2021/02/Shrimp-Tostadas-300x415.jpg)" }}>
                  </div>
                </div>
              </Link>

            ))

          }
        </div>

        <hr />

        <div>
          <h1>Bottom Cards</h1>
        </div>

      </div>
    </div>
  )
}

export default IndividualRecipe