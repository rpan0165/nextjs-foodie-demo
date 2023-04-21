import React from 'react'
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri'

function RecipesMain() {

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
        },
        {
            id: 5,
            category: 'MEAL TYPE',
            title: 'Shrimp Tostadas',
            subtitle: 'Recipe by Sysco Culinary Team',
            href: '/recipes/recipefive',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/02/Shrimp-Tostadas-300x415.jpg',
        },
        {
            id: 6,
            category: 'MEAL TYPE',
            title: 'Shredded Chicken Lemon Orzo Soup',
            subtitle: 'Recipe by Sysco Culinary Team',
            href: '/recipes/recipesix',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/02/Shredded-Chicken-300x415.png',
        },
        {
            id: 7,
            category: 'MEAL TYPE',
            title: 'Shredded Chicken Lemon Orzo Soup',
            subtitle: 'Recipe by Sysco Culinary Team',
            href: '/recipes/recipeseven',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/02/Truck-Stop-Breakfast-300x415.png',
        },
        {
            id: 8,
            category: 'MEAL TYPE',
            title: 'Apple Caramel Basque Cheesecake',
            subtitle: 'Recipe by GSC Culinary Team',
            href: '/recipes/recipeeight',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2022/03/7188544-Basque-cheesecake-1-300x415.jpg',
        },
        {
            id: 9,
            category: 'MEAL TYPE',
            title: 'Apple Caramel Basque Cheesecake',
            subtitle: 'Recipe by GSC Culinary Team',
            href: '/recipes/recipenine',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/02/Shrimp-Tostadas-300x415.jpg',
        },
        {
            id: 10,
            category: 'MEAL TYPE',
            title: 'Apple Caramel Basque Cheesecake',
            subtitle: 'Recipe by GSC Culinary Team',
            href: '/recipes/recipeten',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/02/Shredded-Chicken-300x415.png',
        },
        {
            id: 11,
            category: 'MEAL TYPE',
            title: 'Apple Caramel Basque Cheesecake',
            subtitle: 'Recipe by GSC Culinary Team',
            href: '/recipes/recipeeleven',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/02/Truck-Stop-Breakfast-300x415.png',
        },
        {
            id: 12,
            category: 'MEAL TYPE',
            title: 'Apple Caramel Basque Cheesecake',
            subtitle: 'Recipe by GSC Culinary Team',
            href: '/recipes/recipetwelve',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2022/03/7188544-Basque-cheesecake-1-300x415.jpg',
        },
        {
            id: 13,
            category: 'MEAL TYPE',
            title: 'Apple Caramel Basque Cheesecake',
            subtitle: 'Recipe by GSC Culinary Team',
            href: '/recipes/recipethirteen',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2022/03/7188544-Basque-cheesecake-1-300x415.jpg',
        },
        {
            id: 14,
            category: 'MEAL TYPE',
            title: 'Apple Caramel Basque Cheesecake',
            subtitle: 'Recipe by GSC Culinary Team',
            href: '/recipes/recipefourteen',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/02/Shredded-Chicken-300x415.png',
        },
        {
            id: 15,
            category: 'MEAL TYPE',
            title: 'Apple Caramel Basque Cheesecake',
            subtitle: 'Recipe by GSC Culinary Team',
            href: '/recipes/recipefifteen',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/02/Truck-Stop-Breakfast-300x415.png',
        },
        {
            id: 16,
            category: 'MEAL TYPE',
            title: 'Apple Caramel Basque Cheesecake',
            subtitle: 'Recipe by GSC Culinary Team',
            href: '/recipes/recipesixteen',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2022/03/7188544-Basque-cheesecake-1-300x415.jpg',
        },
        // More posts...
    ];

    return (
        <div style={{ marginTop: "10rem" }}>
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
                    <div className='grid grid-cols-4 mr-5'>
                        {
                            posts.map((post) => (
                                <Link href={post.href} style={{textDecoration:"none"}}>
                                    <div className='flex flex-col border-2 border-orange-200 rounded-lg' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
                                        <div className='p-3' style={{ height: "10rem" }}>
                                            <h4 className='text-sky-600 text-sm font-bold my-2'>{post.category}</h4>
                                            <h3 className='font-bold text-lg text-black' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{post.title}</h3>
                                            <p className='font-bold text-black my-2' style={{ fontSize: "12px" }}>{post.subtitle}</p>
                                        </div>
                                        <div style={{ width: "100%", borderRadius: "0 0 7px 7px", height: "18rem", backgroundColor: "yellow", backgroundImage: `url(${post.imageUrl})` }}>
                                        </div>
                                    </div>
                                </Link>

                            ))

                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RecipesMain
