import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MyImage from '../assets/images/footer-top-logo.png'
import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import '../styles/footertop.css'

function FooterTop() {
    return (
        <div className='' style={{ backgroundColor: "#2A2F33" }}>
            <hr className='text-white ' />
            <Image src={MyImage} alt="footer-top-logo" width={400} height={250} className='mx-auto mt-4' />
            <div className='SocialButtons flex flex-row justify-center mt-3'>
                <Link href="https://syys.co/3xu9rwf">
                    <FaTwitter className='social-icon mx-2' />
                </Link>
                <Link href="https://syys.co/36xtdv4">
                    <FaFacebookF className='social-icon mx-2' />
                </Link>
                <Link href="https://syys.co/2UAYASy">
                    <FaInstagram className='social-icon mx-2' />
                </Link>
                <Link href="https://www.pinterest.com/syscofoodie/">
                    <FaPinterestP className='social-icon mx-2' />
                </Link>
                <Link href="https://syys.co/3e1hvwE">
                    <FaYoutube className='social-icon mx-2' />
                </Link>
            </div>
            <div className='flex flex-row justify-center mt-4 mb-3'>
                <Link href="https://foodie.sysco.com/publications/">
                    <h3 className='row-element mx-2'>Publications</h3>
                </Link>
                <Link href="/recipes">
                    <h3 className='row-element mx-2'>Recipes</h3>
                </Link>
                <Link href="https://foodie.sysco.com/tips-and-trends/">
                    <h3 className='row-element mx-2'>Tips & Trends</h3>
                </Link>
                <Link href="https://foodie.sysco.com/operations-and-resources/">
                    <h3 className='row-element mx-2'>Operations & Resources</h3>
                </Link>
                <Link href="https://www.sysco.com/Products/Products/Product-Categories.html">
                    <h3 className='row-element mx-2'>Sysco Brands</h3>
                </Link>
                <Link href="https://foodie.sysco.com/send-us-a-story/">
                    <h3 className='row-element mx-2'>Send Us A Story</h3>
                </Link>
            </div>

            <br />
            <hr className='text-white' />
        </div>
    )
}

export default FooterTop
