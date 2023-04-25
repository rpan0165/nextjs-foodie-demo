'use client'
import React from 'react';

function Solutions(recipeContent) {

    const recipes = recipeContent.props.recipe_section.group4;

    return (
        <section className="section-solutions">
            <div class="container-fluid">
              <div class="flex justify-between mx-auto" style={{ width: "84%" }}>
                <h2 className="text-left font-bold text-4xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{recipeContent.props.recipe_section.header}</h2>
                <a href="#" class="text-sky-600 font-bold text-sm">Explore Recipes</a>
              </div> 
              <div className='grid grid-cols-4 mr-5 mb-5 mx-auto' style={{ width: "85%" }}>
                {
                  recipes.map(recipe => (
                    <div className='flex flex-col border-2 rounded-lg' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
                      <div className='p-3' style={{ height: "10rem" }}>
                        <h3 href={recipe.link.href} className="text-sm font-bold text-sky-500">{recipe.link.title} </h3>
                        <h4 className='text-black font-bold my-2 text-lg'>{recipe.header}</h4>
                        <h3 className='text-sm text-black' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{recipe.subheader}</h3>
                      </div>
                      <div style={{ width: "100%", borderRadius: "0 0 7px 7px", height: "17.5rem", backgroundColor: "yellow", backgroundImage: `url(${recipe.background_image.url})` }}>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
        </section >
    );
}

export default Solutions
