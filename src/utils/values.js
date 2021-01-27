const values = {
  mulValue: localStorage.getItem('mulValue') || 0,
  costValue: localStorage.getItem('costValue') || 0,
};

const $values = new Proxy(values, {
  get(target, prop) {
    if(!Reflect.has(target, prop)) {
      console.error(`${prop} no existe en el objeto values`);
      return;
    }
    return Number(Reflect.get(target, prop));
  },
  set(target, prop, value) {
    localStorage.setItem(prop, value);
    Reflect.set(target, prop, Number(value))
  }
});

export default $values;