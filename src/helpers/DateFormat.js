import {
  format,
  formatDistanceToNowStrict,
  formatDuration,
  parse,
  isDate
} from 'date-fns';

const dateInFormat = (date, dateInFormat) => format(date, dateInFormat);

const ageInWords = birthdate => {
  if (birthdate) {
    const pData = parseInFormat(birthdate, 'dd.mm.yyyy', new Date());
    if (isDate(pData)) {
      return formatDistanceToNowStrict(pData);
    }
  }
  return '00.00.0000';
}

const formatDurationInWords = date => formatDuration(date);

const parseInFormat = (date, dateInFormat, referenceDate) => parse(date, dateInFormat, referenceDate);

export {
  dateInFormat,
  ageInWords,
  formatDurationInWords,
  parseInFormat
};