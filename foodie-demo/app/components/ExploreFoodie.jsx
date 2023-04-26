import React from 'react';
import Book from '../assets/images/explore-foodie-logos/book.png';
import Brands from '../assets/images/explore-foodie-logos/brands.png';
import Diamond from '../assets/images/explore-foodie-logos/diamond.png';
import Heart from '../assets/images/explore-foodie-logos/heart.png';
import Idea from '../assets/images/explore-foodie-logos/idea.png';
import People from '../assets/images/explore-foodie-logos/people.png';
import Restaurant from '../assets/images/explore-foodie-logos/restaurant.png';
import Star from '../assets/images/explore-foodie-logos/star.png';
import Testimonials from '../assets/images/explore-foodie-logos/testimonials.png';
import Tips from '../assets/images/explore-foodie-logos/tips.png';
import Image from 'next/image';

function ExploreFoodie() {
    return (
        <section className="section-explore-foodie mt-16 mb-14">
            <h2 className="heading-circles text-4xl font-bold font-serif">Great Ways To Explore Sysco Foodie</h2>
            <div className='grid grid-flow-row-dense lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 mx-auto px-5 text-center font-bold'>
                <div className='my-4'>
                    <Image src={Tips} width={200} height={200} className='mx-auto' />
                    <h5 className='my-3'>Tips & Trends</h5>
                </div>
                <div className='my-4'>
                    <Image src={Brands} width={200} height={200} className='mx-auto' />
                    <h5 className='my-3'>Sysco Brands</h5>
                </div>
                <div className='my-4'>
                    <Image src={Idea} width={200} height={200} className='mx-auto' />
                    <h5 className='my-3'>Cutting Edge Solutions</h5>
                </div>
                <div className='my-4'>
                    <Image src={People} width={200} height={200} className='mx-auto my-3 py-1' />
                    <h5 className='my-3'>Sysco Exclusive Webinars</h5>
                </div>
                <div className='my-4'>
                    <Image src={Testimonials} width={200} height={200} className='mx-auto my-3 py-1' />
                    <h5 className='my-3'>Testimonials</h5>
                </div>
                <div className='my-4'>
                    <Image src={Book} width={200} height={200} className='mx-auto' />
                    <h5 className='my-3'>Recipes</h5>
                </div>
                <div className='my-4'>
                    <Image src={Diamond} width={200} height={200} className='mx-auto' />
                    <h5 className='my-3'>Foodie Solutions</h5>
                </div>
                <div className='my-4'>
                    <Image src={Restaurant} width={200} height={200} className='mx-auto' />
                    <h5 className='my-3'>Virtual Restaurant</h5>
                </div>
                <div className='my-4'>
                    <Image src={Heart} width={200} height={200} className='mx-auto my-3 py-1' />
                    <h5 className='my-3'>Send Us A Story</h5>
                </div>
                <div className='my-4'>
                    <Image src={Star} width={200} height={200} className='mx-auto my-3 py-1' />
                    <h5 className='my-3'>Become a Customer</h5>
                </div>
            </div>
            <div className="container mb-16 mt-12">
                <hr />
            </div>
        </section>
    )
}

export default ExploreFoodie
