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
  } else {
    return number
  }

  return str
}

module.exports = numberToWords
