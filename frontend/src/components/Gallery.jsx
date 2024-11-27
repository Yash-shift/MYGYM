import React from "react";
import { assets } from "../assests/assets";

const Gallery = () => {
  // const gallery = [
  //   "frontendsrcassestsimg1.webp",
  //   ".img2.jpg",
  //   "/img3.jpg",
  //   "/img4.jpg",
  //   "/img7.jpg",
  //   "/img8.jpg",
  //   "/img5.jpg",
  //   "/img6.jpg",
  // ];
  return (
    <section className="gallery ">
      <h1 className="font-bold animate-pulse">OUR TOP ATHELETES</h1>
      <hr className="w-5/6 mx-auto"/>
      <div className="flex flex-row max-w-screen-md mx-auto justify-between ">
      <div className="flex flex-col items-center mx-auto p">
      <img src={assets.img2} alt="workout" />
      <img src={assets.img3} alt="workout" />
      <img src={assets.img4} alt="workout" />
      </div>
      <div className="flex-col">
      <img src={assets.img7} alt="workout" />
      <img src={assets.img8} alt="workout" />
      <img src={assets.img5} alt="workout" />
      <img src={assets.img6} alt="workout" />
      </div>
      </div>

      {/* <div>
        {gallery.slice(0, 3).map((element, index) => (
          <img key={index} src={element} alt="galleryImage" />
        ))}
      </div>
      <div>
        {gallery.slice(3, 6).map((element, index) => (
          <img key={index} src={element} alt="galleryImage" />
        ))}
      </div>
      <div>
        {gallery.slice(6, 9).map((element, index) => (
          <img key={index} src={element} alt="galleryImage" />
        ))}
      </div> */}
    </section>
  );
};

export default Gallery;
