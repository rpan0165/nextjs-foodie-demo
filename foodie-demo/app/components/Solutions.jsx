'use client'
import React from 'react';

function Solutions(recipeContent) {

    const recipes = recipeContent.props.recipe_section.group4;

    return (
        <section className="section-solutions mt-14 mb-16">
            <div class="container">
              <div class="flex justify-between mx-auto" >
                <h2 className="text-left font-bold font-serif text-4xl mb-12">{recipeContent.props.recipe_section.header}</h2>
                <a href="#" class="text-sky-600 font-bold text-lg pt-2">Explore Recipes</a>
              </div> 
              <div className="grid grid-cols-4 mr-5 mb-5 mx-auto">
                {
                  recipes.map(recipe => (
                    <div className="flex flex-col border-2 rounded-lg m-3 bg-[#FFF9F0] overflow-hidden">
                      <div className="p-3 h-36 flex flex-column justify-center">
                        <h3 href={recipe.link.href} className="text-sm font-bold text-sky-500">{recipe.link.title} </h3>
                        <h4 className='text-black font-bold my-2 text-lg font-serif'>{recipe.header}</h4>
                        <h3 className='text-sm text-black font-serif'>{recipe.subheader}</h3>
                      </div>
                      <div className="bg-cover w-full h-72 bg-[#FFF9F0]" style={{ backgroundImage: `url(${recipe.background_image.url})` }}>
                      </div>
                    </div>
                  ))
                }
              </div>
              <hr />
            </div>
        </section >
    );
}

export default Solutions
