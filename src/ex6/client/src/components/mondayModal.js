import { Tipseen, TipseenImage, TipseenContent } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import React from "react";

export default function MondayModal() {
  const content = [
    <div>Popover message will appear here lorem ipsum dolor samet…</div>,
  ];
  return (
    <Tipseen
      content={
        <TipseenContent isDismissHidden={false}>
          {content}
          <TipseenImage
            className="monday-style-story-tipseen_image"
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            }
          />
        </TipseenContent>
      }
      modifiers={[
        {
          name: "preventOverflow",
          options: {
            mainAxis: false,
          },
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: [],
          },
        },
      ]}
      position="right"
      id={1}
    >
      <div className="monday-style-story-tipseen_container" />
    </Tipseen>
  );
}
