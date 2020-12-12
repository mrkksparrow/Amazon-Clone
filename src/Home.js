import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/SBD_Dec20/GW/WebHero-Categories_1500x600._CB413380489_.jpg" alt=""
                />

                <div className="home__row">
                    <Product id="00001"
                             title='Acer 2019 Predator Helios 300 15.6 Inch FHD Gaming Laptop (9th Gen Intel 6-Core i7-9750H up to 4.5 GHz' 
                             price={200.00} 
                             image="https://images-na.ssl-images-amazon.com/images/I/71lTWpqrtxL._SL1500_.jpg" 
                             rating={4} 
                             unfilledstar={1} 
                    />
                    <Product id="00002"
                             title='Poco F1 by Xiaomi (Rosso Red, 8GB RAM, 256GB Storage)' 
                             price={120.00} 
                             image="https://images-na.ssl-images-amazon.com/images/I/812MBICsvnL._SL1500_.jpg" 
                             rating={3} 
                             unfilledstar={2} 
                    />
                    <Product id="00003"
                             title='Mi Smart Band 5-1.1” AMOLED Color Display, 2 Weeks Battery Life, 5ATM Water Resistant' 
                             price={45.00} 
                             image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg" 
                             rating={5} 
                             unfilledstar={0} 
                    />
                </div>

                <div className="home__row">
                <   Product id="00003"
                            title='HP Odyssey L8J88AA Backpack for 15.6-inch Laptop' 
                            price={20.00} 
                            image="https://images-na.ssl-images-amazon.com/images/I/71ao4gJJnFL._SL1500_.jpg" 
                            rating={3} 
                            unfilledstar={2} 
                    />
                    <Product id="00004"
                             title='Avengers Printed Hoodies for Men | Avengers Casual Sweatshirt 2 | 100% Cotton' 
                             price={35.00} 
                             image="https://images-na.ssl-images-amazon.com/images/I/61nbnwV08-L._UL1500_.jpg" 
                             rating={4} 
                             unfilledstar={1} 
                    />
                    <Product id="00005"
                             title="ASIAN Men's Kosko Mesh Sports Running Shoes"
                             price={32.00} 
                             image="https://images-na.ssl-images-amazon.com/images/I/61LctS6qp7L._UL1100_.jpg" 
                             rating={2} 
                             unfilledstar={3} 
                    />
                    <Product id="00006"
                             title="Fossil Grant Analog Blue Dial Men's Watch - FS5061" 
                             price={40.00} 
                             image="https://images-na.ssl-images-amazon.com/images/I/81p6EcZc1gL._UL1500_.jpg" 
                             rating={5} 
                             unfilledstar={0} 
                    />
                </div>

                <div className="home__row">
                    <Product id="00007"
                             title="Nivia Storm Football - Size 5" 
                             price={18.00} 
                             image="https://images-na.ssl-images-amazon.com/images/I/71ggjr3PegL._SL1024_.jpg" 
                             rating={4} 
                             unfilledstar={1} 
                    />
                    <Product id="00008"
                             title="The Great Unravelling: India after 2014 Hardcover – 21 December 2020" 
                             price={65.00} 
                             image="https://images-na.ssl-images-amazon.com/images/I/51dBfbnKqfL._SX325_BO1,204,203,200_.jpg" 
                             rating={3} 
                             unfilledstar={2} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home