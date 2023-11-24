import React, { useState } from "react";
import { Paper } from "@mui/material";

const Item = ({ item }) => {
  return (
    <Paper>
      <div
        style={{
          backgroundImage: `url(${item})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "auto",
          height: "315px",
          overflow: "hidden",
          borderRadius: "6px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </Paper>
  );
};

export default Item;
