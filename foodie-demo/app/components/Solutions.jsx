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
                    <div className='flex flex-col border-2 rounded-lg' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
                      <div className='p-3' style={{ height: "9rem" }}>
                        <h3 href={recipe.link.href} className="text-sm font-bold text-sky-500">{recipe.link.title} </h3>
                        <h4 className='text-black font-bold my-2 text-lg' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{recipe.header}</h4>
                        <h3 className='text-sm text-black' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{recipe.subheader}</h3>
                      </div>
                      <div className="bg-cover" style={{ width: "100%", borderRadius: "0 0 7px 7px", height: "17.5rem", backgroundColor: "yellow", backgroundImage: `url(${recipe.background_image.url})` }}>
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
