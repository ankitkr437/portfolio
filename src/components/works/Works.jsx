import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/note.png",
      title: "MERN stack website",
      desc:
        "Used ReactJs for frontend, Redux Toolkit for state management, Implemented Chat feature using Socket.io, Created Backend using Node js and Mongodb.",
      url:"https://notesharing.onrender.com/",
      img:
        "/assets/notesharing.png",
    },
    {
      id: "2",
      icon: "./assets/ecomercework.png",
      title: "Ecommerce Website",
      desc:
        "Used React js for developing frontend, Redux toolkit for managing the states, Styled components for styling the website. Implemented Jwt authentication in backend, Created various Api using NodeJs and MongoDB ",
      url:"https://ecomkart.onrender.com/",
      img:
        "./assets/ecomerce.png",
    },
    {
      id: "3",
      icon: "./assets/crypto.png",
      title: "CryptoTracker",
      desc:
        "A website which allows a user to manage a portfolio of cryptocurrency coins, showing the details of each crypto and past prices of each coin using a graph",
        url:"https://cryptoworld0.netlify.app/",
      img:
        "./assets/cryptotracker.png",
    },
    {
      id: "3",
      icon: "./assets/code.png",
      title: "Leetcode Profile",
      desc:
        "I am Knight(Rated 1900+) on Leetcode, Solved 850+ questions on Leetcode",
        url:"https://leetcode.com/Ankitkr437/",
      img:
        "./assets/leetcode_profile.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
       <h1 className='skill-title'>My Works </h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
          
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.url} target="_blank">
              Project
            </a>
                </div>
                
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
             
            </div>
            
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}