//import React from "react";
import herocard3img from '../assets/heor-card-img-1.png';
import herocard2 from '../assets/pdf-png.png';
import middleimg from '../assets/middleimg.png';
const Cards = () => {


   const handleClick1 = () => {
      window.location.href = "https://drive.google.com/file/d/1uyC5gGMvTuOAdw4VtIdWtZ-9dmoC7yZw/view?usp=drivesdk";
    };
    const handleClick2 = () => {
      window.location.href = "https://drive.google.com/file/d/1uxO1DK7AvwJMWlcJD4mRAscDh-PLfoU9/view?usp=drivesdk";
    };
    const handleClick3 = () => {
      window.location.href = "https://drive.google.com/file/d/1unE_K2I1t4DP6-AR7tIDTC3usNxtqSSu/view?usp=drivesdk";
    };
  return (
    <>
      <div className="cards-container">
        {/* card 1 */}
        <div className="hero-cards-div  hero-card-outter-div-1-bg" onClick={handleClick1} >
          <img className="hero-card-img-2" src={herocard2} alt="asdf" />
          <p className="hero-card-title-1">Abstract</p>
          {/* <p className="hero-card-desc-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elilabore, ipsum
            aut reprehenderit est!
          </p> */}
        </div>

        {/* card 2 */}
        <div className="hero-cards-div  hero-card-outter-div-2-bg" onClick={handleClick2} >
          <img className="hero-card-img-2" src={middleimg} alt="asdf" />
          <p className="hero-card-title-1">Research Paper</p>
          {/* <p className="hero-card-desc-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elilabore, ipsum
            aut reprehenderit est!
          </p> */}
        </div>

        {/* card 3 */}
        <div className="hero-cards-div  hero-card-outter-div-3-bg" onClick={handleClick3} >
          <img className="hero-card-img-1" src={herocard3img} alt="asdf" />
          <p className="hero-card-title-1">Visualization</p>
          {/* <p className="hero-card-desc-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elilabore, ipsum
            aut reprehenderit est!
          </p> */}
        </div>

        {/* card 4 */}
        {/* <div className='hero-cards-div  hero-card-outter-div-4-bg'>
                    <img className='hero-card-img-1' src={heroCardImg1} alt="asdf" />
                    <p className='hero-card-title-1'>Title</p>
                    <p className='hero-card-desc-1'>Lorem ipsum dolor sit amet consectetur adipisicing elilabore, ipsum aut reprehenderit est!</p>
                </div> */}
      </div>
    </>
  );
};

export default Cards;
