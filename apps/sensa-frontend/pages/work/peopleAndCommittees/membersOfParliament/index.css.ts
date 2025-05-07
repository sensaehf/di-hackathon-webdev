import { style } from "@vanilla-extract/css";
import { alignItems, flexDirection } from "libs/island-ui/core/src/lib/Box/useBoxStyles.css";

export const root = style({
  display: "flex",
  maxWidth: "898px",
  padding: "0px 0px 48px 105px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  flex: "1 0 0",
})