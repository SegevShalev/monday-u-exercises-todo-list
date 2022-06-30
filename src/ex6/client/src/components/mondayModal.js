import { DialogContentContainer } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import React from "react";

export default function mondayModal() {
  return (
    <div>
      <DialogContentContainer
        type={DialogContentContainer.types.MODAL}
        size={DialogContentContainer.sizes.MEDIUM}
        className={""}
        // this is how you can pass ref to the dialog
      >
        <div>hello</div>
      </DialogContentContainer>
    </div>
  );
}
