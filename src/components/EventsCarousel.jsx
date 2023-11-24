import Carousel from "react-material-ui-carousel";
import Item from "./ItemComponent";
import classes from "./EventsCarousel.module.css";

const CarouselComponent = ({ propitems }) => {
  return (
    <Carousel
      className={classes["carousel-container"]}
      interval={4000}
      animation="slide"
      duration={800}
    >
      {propitems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
