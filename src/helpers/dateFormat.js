import {
  format,
  formatDistanceToNowStrict,
  formatDuration,
  parse,
  isDate
} from 'date-fns';
import { AGES_IN_WORDS } from './constants';

const dateInFormat = (date, dateInFormat) => format(date, dateInFormat); 

const getAge = birthdate => {
  if (birthdate) {
    const pData = parseInFormat(birthdate, 'dd.mm.yyyy', new Date());
    if (isDate(pData)) {
      const age = formatDistanceToNowStrict(pData, {
        unit: 'year'
      });
      return ageInWords(age);
    }
  }
  return '00.00.0000';
}

const formatDurationInWords = date => formatDuration(date);

const parseInFormat = (date, dateInFormat, referenceDate) => parse(date, dateInFormat, referenceDate);

const ageInWords = age => {
  if (+age[0] > 5) {
    age = 'more 5 years';
  }
  return AGES_IN_WORDS[age];
}

export {
  ageInWords,
  dateInFormat,
  getAge,
  formatDurationInWords,
  parseInFormat
};