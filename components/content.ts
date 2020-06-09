import { mt } from "@isotope/prototope";
import { ComponentFunction } from "@isotope/docking/lib/declarations";

const component: ComponentFunction = (page, content, parse) => (parent) => {
  return parent.div([mt(16), parse(content)]);
};
const type = "static";

export { component, type };
