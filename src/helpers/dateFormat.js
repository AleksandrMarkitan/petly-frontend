import {
  format,
  formatDistanceToNowStrict,
  formatDuration,
  parse,
  isDate,
} from 'date-fns';
import { AGES_IN_WORDS } from './constants';

const dateInFormat = (birthdate, dformat) => {

  if (birthdate) {
    const date = new Date(birthdate);

    if (isDate(date)) return format(date, dformat);
  }

  return 'no info';
}

const getAge = birthdate => {

  if (birthdate) {

    const date = new Date(birthdate);

    if (isDate(date)) return ageInWords(formatDistanceToNowStrict(date, { unit: 'year' }));

    const pData = parseInFormat(date, 'dd.MM.yyyy', new Date());

    if (isDate(pData)) {
      const age = formatDistanceToNowStrict(pData, { unit: 'year' });
      return ageInWords(age);
    }
  }

  return 'no info';
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
  parseInFormat,
};