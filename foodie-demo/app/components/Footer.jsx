import Link from 'next/link';
import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className='row'>
            <div className='column col-4'>
                {/* Column 1 content */}
                <img src='https://sysco.com/dam/jcr:d604081f-3334-4d87-93bb-a1f2c4c07731/Sysco-Logo-White_GreenLeaf.png'></img>
                <br></br>
                <p className='text-sm'>Sysco is the global leader in selling, marketing and distributing food products to restaurants, healthcare and educational facilities, lodging establishments and other customers who prepare meals away from home. Its family of products also includes equipment and supplies for the foodservice and hospitality industries. With more than 58,000 associates, the company operates 343 distribution facilities worldwide and serves more than 650,000 customer locations. For fiscal 2021 that ended July 3, 2021, the company generated sales of more than $51 billion. Information about our CSR program, including Sysco’s 2020 Corporate Social Responsibility Report, can be found at <Link href="#" className='links'>sysco.com/csr2020report</Link></p>
                <br></br>
            </div>
            <div className='column col'>
                {/* Column 2 content */}
                <h3 className='text-sm font-bold '>ABOUT</h3>
                <ul>
                    <li>
                        <Link href="#" className='links'>The Sysco Story</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>Corporate Social Responsibility</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>Diversity</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>News Room</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>At a Glance</Link>
                    </li>
                </ul>
            </div>
            <div className='column col'>
                {/* Column 3 content */}
                <h3 className='text-sm font-bold  '>CUSTOMER SOLUTIONS</h3>
                <ul>
                    <li>
                        <Link href="#" className='links'>The Sysco Story</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>Corporate Social Responsibility</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>Diversity</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>News Room</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>At a Glance</Link>
                    </li>
                </ul>
            </div>
            <div className='column col'>
                {/* Column 4 content */}
                <h3 className='text-sm font-bold '>RESOURCES</h3>
                <ul>
                    <li>
                        <Link href="#" className='links'>The Sysco Story</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>Corporate Social Responsibility</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>Diversity</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>News Room</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>At a Glance</Link>
                    </li>
                </ul>
            </div>
            <div className='column col'>
                {/* Column 5 content */}
                <h3 className='text-sm font-bold '>CONTACT US</h3>
                <ul>
                    <li>
                        <Link href="#" className='links'>Become a Customer</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>Our Locations</Link>
                    </li>

                </ul>
                <div className='column overlap col'>
                {/* Column 6 content */}
                <h3 className='text-sm font-bold '>SUPPORT</h3>
                <ul>
                    <li>
                        <Link href="#" className='links'>Report an ethics concern</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>Do Not Sell or Share My Personal Information</Link>
                    </li>
                    <li>
                        <Link href="#" className='links'>Limit the Use of My Sensitive Personal Information</Link>
                    </li>
                </ul>
            </div>
            </div>
           
            <div className='socialButtons col'>
                {/* Social buttons */}
            </div>
            </div>
            <hr className='divider-line'></hr>
            <div className='bottomLine'>
                <a href="#">Terms of use</a>
                <a href="#">Privacy policy</a>
                <a href="#">System usage policy</a>
            </div>
        </footer>
    );
}

export default Footer
