import React from 'react'
import Link from 'next/link'

function Solutions() {
    return (
        <div>
            <div class="container-fluid bg-gray-100 py-5">
                <h2 className="text-center font-bold text-4xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Shop Our Cutting Edge Solutions Popular Recipes</h2>
                {/* <p className="text-center pb-2" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "1.3rem" }}>Stay informed of current supply and demand changes in the market</p> */}
                <div class="h_line mt-3 mb-4 pt-0 " style={{
                    color: "red", borderBottom: "5px solid #56B146",
                    width: "10rem",
                    margin: "auto",
                }}>
                <br></br>
                </div>
                <div className="grid grid-flow-row-dense grid-cols-3  px-5">
                    <div className="col-span-3 m-2">
                        <div className="container bg-white flex flex-row justify-between">
                            <div className="my-auto border-spacing-8 border-4 mx-4 py-5 w-50 pl-5">
                                <br></br>
                                <br></br>
                                <Link href="#">
                                    <p className='py-0 md-0 font-bold text-sky-600 text-lg'>APPETIZER</p>
                                </Link>
                                <h2 className='text-4xl font-extrabold font-serif ml-5 my-0 text-left'>BBQ Chicken Pizza</h2>
                                <p className='text-xl font-gray-800 font-sans mt-0 py-0'>GSC Culinary Team</p>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <div className="image-container w-50 ">
                                <img src="https://foodie.sysco.com/wp-content/uploads/2022/09/Sous-Vide-Pan-Dinner-1536x1234.jpg" alt="Slide 1 Image" />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col basis-2'>
                    <div className=" m-2">
                        <div className="container bg-white flex flex-row ">
                            <div className="image-container">
                                <img src="https://foodie.sysco.com/wp-content/uploads/2022/09/shrimp.png" alt="Slide 1 Image" />
                            </div>
                            <div className="my-auto border-spacing-8 mr-5 py-3 ">
                                {/* <Link href="#">
                                    <p className='py-0 md-0 font-bold text-sky-600'>APPETIZER</p>
                                </Link> */}
                                <h2 className='text-xl font-extrabold font-serif ml-5 my-0 text-left'>Buffalo Lemon Pepper Shrimp with Salt & Pepper</h2>
                                <p className='text-sm font-gray-800 font-serif mt-0 py-0'>An edge above the rest - Cutting Edge Solutions Fall 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className="container bg-white flex flex-row ">
                            <div className="image-container">
                                <img className='h-max' src="https://foodie.sysco.com/wp-content/uploads/2022/09/Cheesecake.png" alt="Slide 1 Image" />
                            </div>
                            <div className="my-auto border-spacing-8 mr-5 py-3 ">
                                {/* <Link href="#">
                                    <p className='py-0 md-0 font-bold text-sky-600'>APPETIZER</p>
                                </Link> */}
                                <h2 className='text-xl font-extrabold font-serif ml-5 my-0 text-left'>Chocalate, Banana and Peanut Butter Cheeesecake with Fruit</h2>
                                <p className='text-sm font-gray-800 font-serif mt-0 py-0'>An edge above the rest - Cutting Edge Solutions Fall 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className="container bg-white flex flex-row ">
                            <div className="image-container">
                                <img src="https://foodie.sysco.com/wp-content/uploads/2022/09/biscuits.png" alt="Slide 1 Image" />
                            </div>
                            <div className="my-auto border-spacing-8 mr-5 py-3 ">
                                {/* <Link href="#">
                                    <p className='py-0 md-0 font-bold text-sky-600'>APPETIZER</p>
                                </Link> */}
                                <h2 className='text-xl font-extrabold font-serif ml-5 my-0 text-left'>Hot Habenero Chicken Biscuit</h2>
                                <p className='text-sm font-gray-800 font-serif mt-0 py-0'>An edge above the rest - Cutting Edge Solutions Fall 2022</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='m-2'>
                        <div className="container bg-white flex flex-col ">
                            <div className="image-container">
                                <img src="//foodie.sysco.com/wp-content/uploads/2022/09/Lemon-Leche-Parfait.png" alt="Slide 1 Image" />
                            </div>
                            <div className="my-auto border-spacing-8 mr-5 py-3 ">
                                <Link href="#">
                                    <p className='py-0 md-0 font-bold text-sky-600'>DESSERT</p>
                                </Link>
                                <h2 className='text-xl font-extrabold font-serif ml-5 my-0 text-left'>Lemon Leche Cake Parfait</h2>
                                <p className='text-sm font-gray-800 font-serif mt-0 py-0'>Recipe by GSC Culinary Team</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className="container bg-white flex flex-col">
                            <div className="image-container">
                                <img className='static z-1' src="https://foodie.sysco.com/wp-content/uploads/2022/10/Pepper-Jelly-Glazed-Pork-scaled.jpg" alt="Slide 1 Image" />
                                <Link className=' z-5' href="#">
                                    <p className='py-0 font-bold text-sky-600 text-md z-5'>EXPLORE RECIPES</p>
                                </Link>
                                <h2 className='text-3xl font-extrabold text-black font-serif ml-4 text-left z-4 '>Find more recipes</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Solutions
