import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                className="home_image"
                alt=""
            />

            <div className="home_row">
                <Product
                    id="123"
                    title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
                    price={11.93}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
                />
                <Product
                    id="123"
                    title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
                    price={11.93}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg"
                />
            </div>

            <div className="home_row">
            <Product
                    id="123"
                    title="Garmin Forerunner 235, GPS Running Watch, Black/Gray "
                    price={11.93}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
                />
                <Product
                    id="123"
                    title="Dash Mini Maker: The Mini Waffle Maker Machine for Individual Waffles, Paninis, Hash browns, & other on the go Breakfast, Lunch, or Snacks - Red"
                    price={11.93}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41IF4qzFnEL._AC_SY200_.jpg"
                />
                <Product
                    id="123"
                    title="Play-Doh Modeling Compound 10 Pack Case of Colors, Non-Toxic, Assorted Colors, 2 Oz Cans, Ages 2 & Up, (Amazon Exclusive), Multicolor"
                    price={11.93}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/51d5cqa2fVL._AC_SY200_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="123"
                    title=" Hisense 40-Inch 40H5500F Class H55 Series Android Smart TV with Voice Remote (2020 Model)"
                    price={11.93}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71ZRTMwE3NL._AC_UY218_.jpg"
                />
            </div>
            
        </div>
    )
}

export default Home;
