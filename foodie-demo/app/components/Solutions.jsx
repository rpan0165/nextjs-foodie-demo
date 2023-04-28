'use client'
import React from 'react';

function Solutions(recipeContent) {

  const recipes = recipeContent.props.recipe_section.group4;

  return (
    <section className="section-solutions mt-5">
      <hr className='text-gray-300' />
      <div class="container-fluid mt-5 pt-4">
        <div class="flex lg:flex-row justify-between mx-auto md:flex-row sm:flex-col" style={{ width: "84%" }}>
          <h2 className="text-left font-bold mb-5 lg:text-4xl sm:text-2xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{recipeContent.props.recipe_section.header}</h2>
          <a href="#" class="text-sky-600 font-bold text-sm">Explore Recipes</a>
        </div>
        <section className="section-update mb-5">
          <div class="container-fluid mx-auto">
            {/* cards */}
            <br></br>
            <div className='grid lg:grid-cols-4 gap-4 mr-5 mb-5 mx-auto md:grid-cols-2 sm:grid-cols-1' style={{ width: "85%" }}>
              {
                recipes.map(recipe => (
                  <div className='flex flex-col border-2 rounded-lg flex-wrap justify-end' style={{ backgroundColor: "#FFF9F0" }}>
                    <div className='p-4' style={{minHeight:"10rem"}}>
                      <h5 className='text-sm text-sky-500 font-bold'>{recipe.link.title}</h5>
                      <h3 className='font-bold lg:text-lg md:text-sm sm:text-sm' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{recipe.header}</h3>
                      <h3 className='text-sm text-black' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{recipe.subheader}</h3>
                    </div>
                    <div className="bg-cover rounded-b-lg" style={{ width: "100%", height: "17rem", backgroundColor: "yellow",backgroundImage: `url(${recipe.background_image.url})`, backgroundRepeat:"none" }}></div>
                  </div>
                ))
              }
            </div>
          </div>
        </section >
      </div>
    </section >
  );
}

export default Solutions
