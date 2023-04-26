'use client';
import React from 'react'
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import axios from "axios";

const recipeMain = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchRecipes = async () => {
        setLoading(true);
        const res = await axios.get('https://cdn.contentstack.io/v3/content_types/foodie_recipe_main_page/entries?environment=development',
          {
            headers: {
              'api_key': 'blt16b29db83ad01635',
              'access_token': 'cse3066d807437d70a5cc6bee6',
              'Content-Type': 'application/json',
            }
          }
        );
  
        setRecipes(res.data.entries[0].recipe_cards);
        setLoading(false);
      };
  
      fetchRecipes();
      console.log("fetched")
  
    }, []);
  
    return loading && recipes.length == 0 ? (
      <div className="spinner-UI">
        <p>loading</p>
      </div>
    ) : (
        <div style={{ marginTop: "1rem" }}>
            <h2 className="text-center font-bold text-4xl py-2 mt-4" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Recipes</h2>
            <div className='grid grid-cols-12 grid-flow-col-dense mt-4 mb-5'>
                <div className='col-span-2 flex flex-col mx-3 px-3' style={{ color: "#1B4F72" }}>
                    <div className='flex flex-row justify-between mb-3'>
                        <p className='text-sm font-bold'>Filter By</p>
                        <Link href="#">
                            <p className='text-sm text-sky-600 font-bold'>Clear All</p>
                        </Link>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between py-3'>
                        <p className='text-sm font-bold'>Meal</p>
                        <RiArrowDropDownLine className='text-lg' />
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between py-3'>
                        <p className='text-sm font-bold'>Main Ingredient</p>
                        <RiArrowDropDownLine className='text-lg' />
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between py-3'>
                        <p className='text-sm font-bold'>Cuisine</p>
                        <RiArrowDropDownLine className='text-lg' />
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between py-3'>
                        <p className='text-sm font-bold'>Dish Type</p>
                        <RiArrowDropDownLine className='text-lg' />
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between py-3'>
                        <p className='text-sm font-bold'>Dietary Need</p>
                        <RiArrowDropDownLine className='text-lg' />
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between py-3'>
                        <p className='text-sm font-bold'>Technique</p>
                        <RiArrowDropDownLine className='text-lg' />
                    </div>
                    <hr />
                </div>

                <div className='col-span-10'>
                    <div className='grid mr-5 lg:grid-cols-4 md:grid-cols-4  sm:grid-cols-1'>
                        {
                            recipes.map((recipe) => (
                                // <Link href={product.href} style={{textDecoration:"none"}}>
                                    <Link href={`/recipes/${recipe.link.href}`} style={{textDecoration:"none"}}>
                                        <div className='flex flex-col justify-end border-2 border-orange-200 rounded-lg' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
                                            <div className='p-3 pb-2 my-auto' style={{ height: "12rem", alignItems:"center" }}>
                                                <h4 className='text-sky-600 text-sm font-bold my-2'>{recipe.meal_type}</h4>
                                                <h3 className='font-bold lg:text-xl text-black sm:text-sm' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{recipe.main_title}</h3>
                                                <p className='font-bold text-black my-2 pb-2' style={{ fontSize: "12px" }}>{recipe.sub_title}</p>
                                            </div>
                                            <div className="" style={{ width: "100%", borderRadius: "0 0 7px 7px", height:"15rem", backgroundColor: "yellow", backgroundImage: `url(${recipe.image.url})`, backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>
                                            </div>
                                        </div>
                                    </Link>
                                // </Link>

                            ))

                        }
                    </div>

                </div>

            </div>
        </div>
   )
}
export default recipeMain

