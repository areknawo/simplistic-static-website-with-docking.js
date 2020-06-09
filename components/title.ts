import { ComponentFunction } from "@isotope/docking/lib/declarations";

const component: ComponentFunction = (page) => (parent) => {
  return parent.child("title", `config:title - ${page}`);
};
const type = "static";

export { component, type };
