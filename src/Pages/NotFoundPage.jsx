import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFoundPage.module.css";

export default function NotFound() {
  return (
    <section className={classes["page_404"]}>
      <div>
        <div>
          <div>
            <div className={classes.container}>
              <p>The page you are looking for is not available!</p>
              <img src="./404_page.gif" alt="404 page" />

              <Link to="/" className={classes["link_404"]}>
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
