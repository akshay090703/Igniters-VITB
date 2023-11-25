import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../slider-data";
import classes from "./Slider-Banner.module.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft
        className={`${classes.arrow} ${classes.prev}`}
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className={`${classes.arrow} ${classes.next}`}
        onClick={nextSlide}
      />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={
              index === currentSlide
                ? `${classes.slide} ${classes.current}`
                : `${classes.slide}`
            }
            key={index}
          >
            {index === currentSlide && (
              <div className={classes.overlay}>
                <img src={slide.image} alt="slide" className={classes.image} />
                <div className={`${classes.content}`}>
                  <h2 style={{ textAlign: "center", fontSize: "1.8em" }}>
                    Igniters
                  </h2>
                  <p>
                    We are the "Igniters" of VIT Bhopal. We gamify interactions
                    and interventions for enhancing & democratizing learning and
                    hiring. Known for turning ordinary days into extraordinary
                    tech fiestas, Igniters is the go-to crew for all things
                    geeky and fun.
                  </p>
                  <hr />
                  <Link to="/events">
                    <button
                      className={`${classes["--btn"]} ${classes["--btn-primary"]}`}
                    >
                      All Events
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
