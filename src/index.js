import * as components from "./components";

const ponLibrary = {
  install(Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
  },
};

export default ponLibrary;
