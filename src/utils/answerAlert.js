export default function answerAlert(result = 1) {
  const divAlert = document.createElement('div');
  divAlert.classList.add('success');
  const spanSuccesIcon = document.createElement('span');
  Reflect.set(spanSuccesIcon, 'innerHTML','&#10003;');
  spanSuccesIcon.classList.add('successIcon');
  divAlert.append(spanSuccesIcon);
  divAlert.append(`$ ${Number(result).toFixed(2)}`);
  return divAlert;
}