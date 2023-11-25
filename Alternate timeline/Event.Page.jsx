import { useEffect } from "react";
import classes from "../components/Event_card.module.css";
import Event_list from "../components/Event_list";

const Event = () => {
  useEffect(() => {
    var agTimeline = document.querySelector("._js-timeline_idr3n_549"),
      agTimelineLine = document.querySelector("._js-timeline_line_idr3n_553 "),
      agTimelineLineProgress = document.querySelector(
        "._js-timeline_line-progress_idr3n_557 "
      ),
      agTimelineItem = document.querySelectorAll(
        "._js-timeline_item_idr3n_561"
      ),
      agOuterHeight = window.outerHeight,
      agHeight = window.innerHeight,
      f = -1,
      agFlag = false;
    var agPosY;
    const agTop = agTimelineItem[agTimelineItem.length - 1]
      .querySelector("._js-timeline-card_point-box_idr3n_565")
      .getBoundingClientRect().top;
    const timeLineTop = agTimelineLineProgress.getBoundingClientRect().top;
    const agTopConstant = Array.from(agTimelineItem).map((item) => {
      return (
        item
          .querySelector("._js-timeline-card_point-box_idr3n_565")
          .getBoundingClientRect().top + window.scrollY
      );
    });

    function fnUpdateProgress() {
      const i = agTop + agPosY - window.scrollY;
      var a = timeLineTop + agPosY - window.scrollY;
      var n = agPosY - a + agOuterHeight / 2;
      if (i <= agPosY + agOuterHeight / 2) {
        n = i - a;
      }
      agTimelineLineProgress.style.height = n + "px";

      agTimelineItem.forEach(function (item, index) {
        const position = agTopConstant[index] - agPosY;

        if (position < +0.5 * agOuterHeight) {
          item.classList.add("_js-ag-active_idr3n_325");
        } else {
          item.classList.remove("_js-ag-active_idr3n_325");
        }
      });
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.style.top =
        agTimelineItem[0]
          .querySelector("._js-timeline-card_point-box_idr3n_565")
          .getBoundingClientRect().top -
        agTimelineItem[0].getBoundingClientRect().top +
        "px";
      agTimelineLine.style.bottom =
        agTimeline.getBoundingClientRect().top +
        agTimeline.offsetHeight -
        agTimelineItem[agTimelineItem.length - 1].firstElementChild
          .querySelector("._js-timeline-card_point-box_idr3n_565")
          .getBoundingClientRect().top +
        "px";

      if (f !== agPosY) {
        f = agPosY;
        agHeight;
        fnUpdateProgress();
      }
    }

    function fnUpdateFrame() {
      if (!agFlag) {
        requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
    }

    function fnOnScroll() {
      agPosY = window.scrollY;
      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = window.scrollY;
      agHeight = window.innerHeight;
      fnUpdateFrame();
    }

    window.addEventListener("scroll", fnOnScroll);
    window.addEventListener("resize", fnOnResize);
  }, []);

  return (
    <div>
      <div className={classes["ag-timeline-block"]}>
        <div className={classes["ag-timeline_title-box"]}>
          <div className={classes["ag-timeline_tagline"]}>Timeline</div>
          <div className={classes["ag-timeline_title"]}>Events</div>
        </div>
        <Event_list />
      </div>

      <script src="main.js"></script>
    </div>
  );
};

export default Event;
