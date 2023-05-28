import React from 'react';
import './Featured.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white my-20 pt-6 pb-10'>
            <SectionTitle
            subHeading='Check It Out'
            heading='Featured items'
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36'>
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vel, voluptatum facere sequi laboriosam velit repellat labore nostrum, iste itaque quas exercitationem? In sed blanditiis dolorum assumenda repellendus illum esse!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;