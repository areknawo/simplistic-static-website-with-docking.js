import {
  bgColor,
  fixed,
  h,
  left,
  top,
  w,
  flex,
  justifyCenter,
  itemsCenter,
  textXl,
} from "@isotope/prototope";
import { ComponentFunction } from "@isotope/docking/lib/declarations";

const component: ComponentFunction = () => (parent) => {
  return parent
    .div([
      bgColor("light"),
      fixed,
      flex,
      justifyCenter,
      itemsCenter,
      textXl,
      h(16),
      w("full"),
      left(0),
      top(0),
    ])
    .text("config:title");
};
const type = "static";

export { component, type };
