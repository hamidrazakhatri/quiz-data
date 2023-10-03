import React from "react";
import Button from "@mui/material/Button";

function SmButton(props) {
  return (
    <div>
      <Button  className="w-100 p-3 bg-secondary rounded" onClick={props.onClick} variant="contained">
        {props.label}
      </Button>
    </div>
  );
}

export default SmButton;
