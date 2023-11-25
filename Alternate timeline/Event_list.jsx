import React from "react";
import classes from "./Event_card.module.css";
import Event_Card_1 from "./Event_card_1";
import Event_Card_2 from "./Event_card_2";
import { eventData } from "../event_data";

function Event_list() {
  const combinedClasses_1 = `${classes["js-timeline"]} ${classes["ag-timeline"]}`;
  const combinedClasses_2 = `${classes["js-timeline_line"]} ${classes["ag-timeline_line"]}`;
  const combinedClasses_3 = `${classes["js-timeline_line-progress"]} ${classes["ag-timeline_line-progress"]}`;
  return (
    <section className={classes["ag-section"]}>
      <div className={classes["ag-format-container"]}>
        <div className={combinedClasses_1}>
          <div className={combinedClasses_2}>
            <div className={combinedClasses_3}></div>
          </div>
          <div className={classes["ag-timeline_list"]}>
            {eventData.map((Event, index) =>
              index % 2 === 0 ? (
                <Event_Card_1 key={Event.id} eventDetails={Event} />
              ) : (
                <Event_Card_2 key={Event.id} eventDetails={Event} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Event_list;
