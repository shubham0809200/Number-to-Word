function numberToWords(number, formate) {
  let oneToTwenty = [
    '',
    'one ',
    'two ',
    'three ',
    'four ',
    'five ',
    'six ',
    'seven ',
    'eight ',
    'nine ',
    'ten ',
    'eleven ',
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen ',
    'eighteen ',
    'nineteen ',
  ]
  let tenth = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ]

  // for chinees number in chinese
  let oneToTwentyChinese = [
    '',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
    '十三',
    '十四',
    '十五',
    '十六',
    '十七',
    '十八',
    '十九',
  ]
  let tenthChinese = [
    '',
    '',
    '二十',
    '三十',
    '四十',
    '五十',
    '六十',
    '七十',
    '八十',
    '九十',
  ]

  if (number === null || number === undefined) {
    return 'Number is required'
  }

  if (number.toString().length > 9) {
    return 'Number is too big'
  }

  if (number === 0) {
    return 'zero'
  }

  let num = ('000000000' + number)
    .slice(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/)

  if (!num) {
    return ''
  }

  let str = ''

  if (formate === 'INR') {
    str =
      num[1] != 0
        ? (oneToTwenty[Number(num[1])] ||
            tenth[num[1][0]] + ' ' + oneToTwenty[num[1][1]]) + 'crore '
        : ''
    str +=
      num[2] != 0
        ? (oneToTwenty[Number(num[2])] ||
            tenth[num[2][0]] + ' ' + oneToTwenty[num[2][1]]) + 'lakh '
        : ''
    str +=
      num[3] != 0
        ? (oneToTwenty[Number(num[3])] ||
            tenth[num[3][0]] + ' ' + oneToTwenty[num[3][1]]) + 'thousand '
        : ''
    str +=
      num[4] != 0
        ? (oneToTwenty[Number(num[4])] ||
            tenth[num[4][0]] + ' ' + oneToTwenty[num[4][1]]) + 'hundred '
        : ''
    str +=
      num[5] != 0
        ? oneToTwenty[Number(num[5])] ||
          tenth[num[5][0]] + ' ' + oneToTwenty[num[5][1]]
        : ''
  } else if (formate === 'USD') {
    str =
      num[1] != 0
        ? (oneToTwenty[Number(num[1])] ||
            tenth[num[1][0]] + ' ' + oneToTwenty[num[1][1]]) + 'billion '
        : ''
    str +=
      num[2] != 0
        ? (oneToTwenty[Number(num[2])] ||
            tenth[num[2][0]] + ' ' + oneToTwenty[num[2][1]]) + 'million '
        : ''
    str +=
      num[3] != 0
        ? (oneToTwenty[Number(num[3])] ||
            tenth[num[3][0]] + ' ' + oneToTwenty[num[3][1]]) + 'thousand '
        : ''
    str +=
      num[4] != 0
        ? (oneToTwenty[Number(num[4])] ||
            tenth[num[4][0]] + ' ' + oneToTwenty[num[4][1]]) + 'hundred '
        : ''
    str +=
      num[5] != 0
        ? oneToTwenty[Number(num[5])] ||
          tenth[num[5][0]] + ' ' + oneToTwenty[num[5][1]]
        : ''
  }
  // chinees number in chinese
  else if (formate === 'CN') {
    str =
      num[1] != 0
        ? (oneToTwentyChinese[Number(num[1])] ||
            tenthChinese[num[1][0]] + ' ' + oneToTwentyChinese[num[1][1]]) +
          '亿 '
        : ''
    str +=
      num[2] != 0
        ? (oneToTwentyChinese[Number(num[2])] ||
            tenthChinese[num[2][0]] + ' ' + oneToTwentyChinese[num[2][1]]) +
          '万 '
        : ''
    str +=
      num[3] != 0
        ? (oneToTwentyChinese[Number(num[3])] ||
            tenthChinese[num[3][0]] + ' ' + oneToTwentyChinese[num[3][1]]) +
          '千 '
        : ''
    str +=
      num[4] != 0
        ? (oneToTwentyChinese[Number(num[4])] ||
            tenthChinese[num[4][0]] + ' ' + oneToTwentyChinese[num[4][1]]) +
          '百 '
        : ''
    str +=
      num[5] != 0
        ? oneToTwentyChinese[Number(num[5])] ||
          tenthChinese[num[5][0]] + ' ' + oneToTwentyChinese[num[5][1]]
        : ''
  } else {
    return number
  }

  return str
}

module.exports = numberToWords
