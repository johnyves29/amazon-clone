import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  
  return (
    <div className="home">
      <div className="home__container">
        <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true} className="home__image">
          <div >
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="images\amazon-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="images\amazon-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="images\amazon-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="images\amazon-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="images\amazon-5.jpg"
              alt=""
            />
          </div>
        </Carousel>

        <div className="home__row">
          <Product
            id="00100"
            title="PlayStation 4 Slim 1TB Console"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31qwualUaLL._AC_SY200_.jpg"
            rating={5}
           
          />
          <Product
            id="00200"
            title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest"
            price={32.67}
            image="https://images-na.ssl-images-amazon.com/images/I/51vOyKGea+L._AC_SY200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="00300"
            title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light"
            price={500.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="00500"
            title="Orzly Carry Case Compatible with Nintendo Switch - Black Protective Hard Portable Travel Carry Case Shell Pouch"
            price={499.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51mZVG8qQZL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="00600"
            title="The Road to React: Your journey to master plain yet pragmatic React.js"
            price={3.99}
            image="https://images-na.ssl-images-amazon.com/images/I/519rgWOYPjL._AC_SY220_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="00700"
            title="PlayStation 4 Pro 1TB Console"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg"
            rating={4}
          />
           <Product
            id="00800"
            title="Minecraft PS4 Game"
            price={6.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51IY2jXTlRL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="00900"
            title="Oculus Quest All-in-one VR Gaming Headset – 128GB"
            price={549.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31AZvhYLyeL._AC_SY200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
