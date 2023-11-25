import React from "react";
import classes from "./Event_card.module.css";

function Event_Card_2({ eventDetails }) {
  const combinedClasses_1 = `${classes["js-timeline_item"]} ${classes["ag-timeline_item"]}`;
  const combinedClasses_2 = `${classes["js-timeline-card_point-box"]} ${classes["ag-timeline-card_point-box"]}`;
  const { year, eventName, src, description } = eventDetails;
  return (
    <div className={combinedClasses_1}>
      <div className={classes["ag-timeline-card_box"]}>
        <div className={classes["ag-timeline-card_meta-box"]}>
          <div className={classes["ag-timeline-card_meta"]}>{eventName}</div>
        </div>
        <div className={combinedClasses_2}>
          <div className={classes["ag-timeline-card_point"]}>{year}</div>
        </div>
      </div>
      <div className={classes["ag-timeline-card_item"]}>
        <div className={classes["ag-timeline-card_inner"]}>
          <div className={classes["ag-timeline-card_img-box"]}>
            <img
              src={src}
              className={classes["ag-timeline-card_img"]}
              width="640"
              height="360"
            />
          </div>
          <div className={classes["ag-timeline-card_info"]}>
            <div className={classes["ag-timeline-card_title"]}>{eventName}</div>
            <div className={classes["ag-timeline-card_desc"]}>
              {description}
            </div>
          </div>
        </div>
        <div className={classes["ag-timeline-card_arrow"]}></div>
      </div>
    </div>
  );
}

export default Event_Card_2;
