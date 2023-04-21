'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Link from 'next/link';
import BottomCardsNew from '@component/app/components/BottomCardsNew';
import {RiBookmarkLine} from 'react-icons/ri';

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

        <div className="grid grid-cols-12 mx-auto" style={{ width: "85%" }}>
          <div className="col-span-6 m-2 rounded-2xl" style={{backgroundImage:"url('https://foodie.sysco.com/wp-content/uploads/2021/02/Shrimp-Tostadas-800x664.jpg')"}}>
            {/* <img className='rounded-3xl' src="https://foodie.sysco.com/wp-content/uploads/2021/02/Shrimp-Tostadas-800x664.jpg" alt="recipe-main-image" /> */}
            <div className='flex flex-row justify-between m-3'>
              <div className='flex flex-row'>
                <button className='bg-white border-1 px-3 pt-1 pb-2 text-sm font-bold text-sky-600 rounded-lg mr-1'>Email article</button>
                <button className='bg-white border-1 px-3 pt-1 pb-2 text-sm font-bold text-sky-600 rounded-lg ml-1'>Print article</button>
              </div>
              <div className='bg-white border-1 px-2 pt-2 text-md font-semibold text-sky-600 rounded-full'><RiBookmarkLine className='text-sky-600'/></div>
            </div>
          </div>
          <div className="col-span-6 m-2 p-3">
            <h5 className='font-bold text-sky-600 text-sm'>MEAL TYPE</h5>
            <h2 className='font-bold text-3xl py-2' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Vegan Thai Massaman Curry</h2>
            <h4 className='font-bold text-gray-500 py-2'>Plant based protein stars in this tasty Thai curry.</h4>
            <p className='font-bold text-sm text-gray-500 mb-4'>Sysco Culinary Team | Houston, TX</p>
            <p className='leading-relaxed text-sm mb-4'>Suitable for any customer from vegans to meat lovers, Sysco Simply Plant Based Protein (Pulled Oats) is made of a flavorful superfood blend of oats, beans, and peas. In this dish, it blends with Thai Massaman curry and fresh vegetables to create a satisfying main dish.</p>
            <div className='flex flex-row justify-between border-2 rounded-xl p-4'>
              <div>
                <p className='font-bold text-sm text-gray-500 mb-2'>Servings</p>
                <span className='text-sm'>4</span>
              </div>
              <div>
                <p className='font-bold text-sm text-gray-500 mb-2'>Prep Time</p>
                <p className='text-sm'>Not Available</p>
              </div>
              <div>
                <p className='font-bold text-sm text-gray-500 mb-2'>Cook Time</p>
                <p className='text-sm'>Not Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mx-auto" style={{ width: "85%" }}>
          <div className='col-span-6 m-2 rounded-xl' style={{ backgroundColor: "#F7F9FB" }}>
            <div className='flex flex-row justify-between m-5'>
              <h2 className='font-bold text-xl' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Ingredients</h2>
              <button className='bg-sky-600 rounded-3xl px-3 py-2 text-sm font-bold text-white'>Add to Basket</button>
            </div>
            <div className='flex flex-row justify-between mx-5 mb-2'>
              <p className='font-bold '>Thai Massaman Curry</p>
              <Link className='' href="#"><p className='font-bold text-sky-600 text-sm'>Select All</p></Link>
            </div>

            <div className='leading-8 text-sm'>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 2 Tbsp. coconut oil</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 3 Imperial Fresh garlic cloves, minced</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 1 large Imperial Fresh red onion, diced</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 2 tsp. Imperial Fresh minced ginger</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 1 large Imperial Fresh russet potato, diced</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 1 large Imperial Fresh sweet potato, diced</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 3 cups Jade Mountain coconut milk</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 1⁄4 cup massaman and/or yellow curry paste</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 1⁄2 tsp. Sysco Classic kosher salt</p>
              </div>
            </div>

            <br />
            <div className='flex flex-row justify-between mx-5 mb-2'>
              <p className='font-bold '>For Serving</p>
              <Link className='' href="#"><p className='font-bold text-sky-600 text-sm'>Select All</p></Link>
            </div>
            <div className='leading-8 text-sm mb-3 mt-2'>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 1⁄4 cup coconut oil</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 2 cups chopped green beans</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 2 cups Sysco Simply Plant Based Protein (Pulled Oats)</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 1 cup coarsely chopped Imperial Fresh carrots</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 1 cup coarsely chopped Imperial Fresh red bell pepper</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 1⁄2 cup loosely packed Imperial Fresh cilantro</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; 1⁄4 cup Sysco Classic chopped roasted peanuts</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; Imperial Fresh lime wedges</p>
              </div>
              <div className='flex flex-row justify-start mx-5'>
                <input type="checkbox" class=" checked:bg-sky-600 text-xl" />
                <p> &nbsp; Steamed Jade Mountain Imperial jasmine rice</p>
              </div>
            </div>
            <br />

          </div>


          <div className='col-span-6 m-2 rounded-xl' style={{ backgroundColor: "#F7F9FB" }}>
            <div className='flex flex-row justify-between m-5'>
              <h2 className='font-bold text-xl' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Directions</h2>
            </div>
            <div className='m-5'>
              <p className='font-bold '>For the Thai Massaman Curry</p>
              <br />
              <ol className='list-decimal leading-loose text-sm ml-3'>
                <li>Heat oil in a saucepan over medium heat. Add garlic, onion, and ginger; cook until garlic starts to brown, about 5 minutes, stirring frequently.</li>
                <li>Add potatoes, coconut milk, curry paste, and salt; reduce heat to medium-low. Cover and cook until potatoes are very tender and sauce is slightly thickened, about 45 minutes, stirring occasionally; cool.</li>
                <li>Refrigerate in an airtight container up to 6 days. Makes about 6 cups.</li>
              </ol>
              <br />
              <p className='font-bold'>For Serving</p>
              <br />
              <ol className='list-decimal leading-loose text-sm ml-3'>
                <li>Heat a portion of oil in a sauté pan over medium-high heat. Add a portion each of beans, plant based protein, and carrots; cook until golden brown and starting to char, about 6 minutes.</li>
                <li>Add a portion of Thai Massaman Curry; heat to a simmer, stirring occasionally. Stir in a portion of peppers; remove from heat.</li>
                <li>Serve curry sprinkled with a portion of cilantro and peanuts, garnished with lime wedges, along with rice.</li>
              </ol>
              <br />
              <p className='text-sm'>Ingredient availability varies by location*</p>
            </div>
          </div>
        </div>
        <br /><br />
        <hr />
        <h2 className="text-center font-semibold text-4xl py-2 mt-4" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Related Recipes</h2>
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
          <BottomCardsNew />
        </div>

      </div>
    </div>
  )
}

export default IndividualRecipe