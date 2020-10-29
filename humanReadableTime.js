//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59
//The maximum time never exceeds 359999 (99:59:59)
//
//You can find some examples in the test fixtures.


//solution
function humanReadable(seconds) {
  const oneMinute = 60
  const oneHour = oneMinute * 60
  const H = ('0' + Math.floor(seconds / oneHour)).slice(-2)
  const M = ('0' + Math.floor(seconds / oneMinute) % 60).slice(-2)
  const S = ('0' + seconds % 60).slice(-2)
  return `${H}:${M}:${S}`
}

