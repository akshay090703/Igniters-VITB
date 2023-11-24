import classes from "./EventsPage.module.css";
import { MdOutlineEventNote } from "react-icons/md";
import { LuListStart } from "react-icons/lu";

import eventsTimeline from "../events-data";
import CarouselComponent from "../components/EventsCarousel";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function EventsPage() {
  const sortedEvents = eventsTimeline
    .slice()
    .sort((a, b) => b.dateStr - a.dateStr);

  return (
    <div>
      <h1 className={classes.title}>Our Journey</h1>
      <VerticalTimeline>
        {sortedEvents.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName={classes.date}
              iconClassName={classes.iconStyles}
              icon={<MdOutlineEventNote />}
              className={classes["timeline-card"]}
              textClassName={classes.card}
            >
              {element.youtubeLink ? (
                <iframe
                  width="560"
                  height="315"
                  src={element.youtubeLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <CarouselComponent propitems={element.imgSrc} />
              )}
              <h3 className={classes["vertical-timeline-element-title"]}>
                {element.title}
              </h3>
              <p className={classes.description}>{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default EventsPage;
