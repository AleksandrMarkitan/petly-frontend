import {
  format,
  formatDistanceToNowStrict,
  formatDuration,
  parse,
  isDate,
} from 'date-fns';
import { AGES_IN_WORDS } from './constants';

const dateInFormat = (date, dateInFormat) => format(date, dateInFormat);

const getAge = birthdate => {

  const date = new Date(birthdate);

  if (birthdate) {

    if (isDate(date)) return ageInWords(formatDistanceToNowStrict(date, { unit: 'year' }));

    const pData = parseInFormat(date, 'dd.mm.yyyy', new Date());

    if (isDate(pData)) {
      const age = formatDistanceToNowStrict(pData, { unit: 'year' });
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
  parseInFormat,
};