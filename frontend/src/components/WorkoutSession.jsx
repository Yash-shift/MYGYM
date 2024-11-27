import React from "react";
import { assets } from "../assests/assets";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p className="text-2xl">
          Designed by our world class trainers.
        </p>
        <img src={assets.img5} alt="workout" />
      </div>
      <div className="wrapper">
        <h1 className="text-2xl font-bold">FEATURED BOOTCAMPS</h1>
        <p>
          Various Training routines according to your goals.
        </p>
        <div className="bootcamps">
          <div>
            <h4>CHEST WORKOUT.</h4>
            <p>
              Get a awesome pump after this fst7 workout 
            </p>
          </div>
          <div>
            <h4>FULL BODY WORKOUT.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;