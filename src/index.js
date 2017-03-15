import moment from 'moment';

const render = () => {
  document.getElementsByName('app').innerHTML = 'The time now is ' + moment().toString();
};

render();
