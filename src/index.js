import './css/style.css';
import './css/animation.css';
import './css/mediasQueries.css';
import { 
  inputs,
  form,
  result,
} from './utils/refs';
import answerAlert from './utils/answerAlert';
import values from './utils/values'

const cache = {
  value: '',
};

const handleInput = ({ target: { value, name }}) => {
  Reflect.set(values, name, value);
};

inputs.forEach(el => {
  el.value = Reflect.get(values, el.name);
  el.addEventListener('input', handleInput)
})

const op = (cb, time) => {
  const { mulValue: newMulValue, costValue: newCostValue } = values;
  const resultado = newMulValue * newCostValue;
  if(cache.value === resultado) {
    return;
  };
  Reflect.set(cache, 'value', resultado);
  if(!Reflect.get(result, 'innerHTML')) {
    result.append(answerAlert(resultado))
    return;    
  }
  result.classList.add('fade');
  [...result.childNodes].forEach((el) => {
    result.replaceChild(answerAlert(resultado), el);
  });
  setTimeout(cb, time)
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  op(() => {
    result.classList.remove('fade');
  }, 1000);
});