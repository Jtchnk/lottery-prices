import 'moment/locale/th';
import moment from 'moment';

export const getRoundDateString = (_roundDate) => {
  if (_roundDate) {
    const momentObj = moment(`${_roundDate.slice(0, 5)}-25${_roundDate.slice(-2)}`, 'DD-MM-YYYY');
    return `${momentObj.format('DD MMMM YYYY')}`;
  }
  return '';
};