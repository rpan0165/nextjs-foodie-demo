import Link from 'next/link';
import React from 'react';
import '../styles/footer.scss';
import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <hr className='mb-5'/>
            <div className='grid grid-flow-row-dense lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 mx-auto px-5'>
                <div className='col-span-1'>
                    {/* Column 1 content */}
                    <img className='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Sysco-Logo.svg/2560px-Sysco-Logo.svg.png' width={"25%"}></img>
                    <br></br>
                    <p className='' style={{ fontSize: "13px" }}>Sysco is the global leader in selling, marketing and distributing food products to restaurants, healthcare and educational facilities, lodging establishments and other customers who prepare meals away from home. Its family of products also includes equipment and supplies for the foodservice and hospitality industries. With more than 58,000 associates, the company operates 343 distribution facilities worldwide and serves more than 650,000 customer locations. For fiscal 2021 that ended July 3, 2021, the company generated sales of more than $51 billion. Information about our CSR program, including Sysco’s 2020 Corporate Social Responsibility Report, can be found at <Link href="#" className='links'>sysco.com/csr2020report</Link></p>
                    <br></br>
                </div>
                <div className='col-span-3'>
                    <div className='flex flex-row justify-between ml-5 px-5 mb-3 sm:flex sm:flex-col'>
                        <div className='footer-column-item'>
                            <h5 className='text-sm font-bold'>About Us</h5>
                            <ul>
                                <Link href="https://www.sysco.com/About/Company-Profile/The-Sysco-Story.html" className='decoration-sky-600'>
                                    <li>The Sysco Story</li>
                                </Link>
                                <Link href="https://www.sysco.com/About/Company-Profile/Annual-Report.html">
                                    <li>Annual Report</li>
                                </Link>
                                <Link href="https://www.sysco.com/About/Company-Profile/Corporate-Social-Responsibility.html">
                                    <li>Corporate Social <br /> Responsibility</li>
                                </Link>
                                <Link href="https://www.sysco.com/About/Our-People/Diversity-and-Inclusion.html">
                                    <li>Diversity</li>
                                </Link>
                                <Link href="https://www.sysco.com/About/Sysco-Today/News-Room.html">
                                    <li>News Room</li>
                                </Link>
                                <Link href="https://www.sysco.com/dam/jcr:d6782af6-9e29-46c1-930a-2ac3df9964a4/Sysco-At-A-Glance-9.7.pdf" target='_blank'>
                                    <li>At a Glance</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='footer-column-item'>
                            <h3 className='text-sm font-bold'>Customer Solutions</h3>
                            <ul>
                                <Link href="https://www.sysco.com/Products/Products/Product-Categories.html" className='decoration-sky-600'>
                                    <li>Product Categories</li>
                                </Link>
                                <Link href="https://www.sysco.com/Products/Products/Sysco-Brand-Family.html">
                                    <li>Sysco Brand Family</li>
                                </Link>
                                <Link href="https://www.sysco.com/Products/Solutions-and-Services/Services.html">
                                    <li>Services</li>
                                </Link>
                                <Link href="https://www.sysco.com/Products/Solutions-and-Services/Culinary-and-Product-Solutions.html">
                                    <li>Culinary Solutions</li>
                                </Link>
                                <Link href="https://www.sysco.com/Products/Solutions-and-Services/Technology-Solutions.html">
                                    <li>Technology Solutions</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='footer-column-item'>
                            <h3 className='text-sm font-bold'>Resources</h3>
                            <ul>
                                <Link href="https://www.sysco.com/Suppliers/Supplier-Partnerships/Supplier-Resources.html" className='decoration-sky-600'>
                                    <li>Suppliers</li>
                                </Link>
                                <Link href="https://www.sysco.com/Investors.html">
                                    <li>Investors</li>
                                </Link>
                                <Link href="https://www.sysco.com/Careers.html">
                                    <li>Careers</li>
                                </Link>
                            </ul>

                            <h3 className='text-sm font-bold mt-4'>Contact Us</h3>
                            <ul>
                                <Link href="https://portal.sysco.com/become-a-customer?utm_medium=landing_page&utm_source=syscofoodie.com&utm_campaign=customer_acquisitions&utm_content=cta_button" className='decoration-sky-600'>
                                    <li>Become a <br /> Customer</li>
                                </Link>
                                <Link href="https://www.sysco.com/Contact/Contact/Our-Locations.html">
                                    <li>Our Locations</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='footer-column-item'>
                            <h3 className='text-sm font-bold'>Support</h3>
                            <ul>
                                <Link href="http://ethicsline.sysco.com/" className='decoration-sky-600'>
                                    <li>Report an Ethics<br /> Concern</li>
                                </Link>
                                <Link href="https://privacyportal.onetrust.com/webform/6a7eb96f-702a-4b18-a6f3-67bdff91cc97/85a666bf-1859-4df0-9bbe-0bd8409f0db8">
                                    <li>Do Not Sell or <br /> Share My Personal<br />Information</li>
                                </Link>
                                <Link href="https://privacyportal.onetrust.com/webform/6a7eb96f-702a-4b18-a6f3-67bdff91cc97/338eba68-062c-4da3-9e30-cd87d5b8247b">
                                    <li>Limit the Use of <br />My  Sensitive <br />Personal  Information</li>
                                </Link>
                            </ul>
                        </div>


                    </div>
                    <hr className='mb-4 text-gray-400' style={{ marginLeft: "4rem" }} />
                    <div className='grid grid-cols-2 ml-5 px-5 mb-4' style={{marginLeft:"3rem"}}>
                        <div>
                            <h5 className='font-bold'>Follow Sysco</h5>

                            <div className='SocialButtons flex flex-row mt-3'>
                                <Link href="https://syys.co/36xtdv4">
                                    <FaFacebookF className='social-icon-footer mr-2' style={{ backgroundColor: '#008CD2', color: 'white' }} />
                                </Link>
                                <Link href="https://syys.co/2UAYASy">
                                    <FaInstagram className='social-icon-footer mx-2' style={{ backgroundColor: '#008CD2', color: 'white' }}/>
                                </Link>
                                <Link href="https://www.pinterest.com/syscofoodie/"> 
                                    <FaLinkedinIn className='social-icon-footer mx-2' style={{ backgroundColor: '#008CD2', color: 'white' }}/>
                                </Link>
                                <Link href="https://syys.co/3xu9rwf">
                                    <FaTwitter className='social-icon-footer mx-2' style={{ backgroundColor: '#008CD2', color: 'white' }}/>
                                </Link>
                            </div>

                        </div>
                        <div>
                            <h5 className='font-bold'>Follow Sysco Foodie</h5>
                            <div className='SocialButtons flex flex-row mt-3'>
                                <Link href="https://syys.co/36xtdv4">
                                    <FaFacebookF className='social-icon-footer mr-2' style={{ backgroundColor: '#008CD2', color: 'white' }}/>
                                </Link>
                                <Link href="https://syys.co/2UAYASy">
                                    <FaInstagram className='social-icon-footer mx-2' style={{ backgroundColor: '#008CD2', color: 'white' }} />
                                </Link>
                                <Link href="https://syys.co/3xu9rwf">
                                    <FaTwitter className='social-icon-footer mx-2' style={{ backgroundColor: '#008CD2', color: 'white' }}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <hr className='divider-line'></hr>
            <div className='flex flex-row justify-between mx-4 my-3 px-3'>
                <div> <p className='text-sm'> &copy; 2023 All Rights Reserved. Sysco Corporation</p> </div>
                <div className='flex flex-row text-sky-500 font-bold text-sm'>
                    <a className='mx-2' href="https://www.sysco.com/terms" target='_blank'>Terms of use</a>
                    <a className='mx-2' href="https://sysco.com/Privacy-Notice.html"  target='_blank'>Privacy policy</a>
                    <a className='mx-2' href="https://www.sysco.com/System-Usage-Policy.html"  target='_blank'>System usage policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer
