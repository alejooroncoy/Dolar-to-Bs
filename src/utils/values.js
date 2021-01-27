const values = {
  mulValue: localStorage.getItem('mulValue') || '',
  costValue: localStorage.getItem('costValue') || '',
};

const $values = new Proxy(values, {
  get(target, prop) {
    if(!Reflect.has(target, prop)) {
      console.error(`${prop} no existe en el objeto values`);
      return;
    }
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    localStorage.setItem(prop, value);
    Reflect.set(target, prop, value)
  }
});

export default $values;