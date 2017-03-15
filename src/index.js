import moment from 'moment';

const render = () => {
  document.getElementsByName('app').innerHTML = 'The times now is ' + moment().toString();
};

render();
