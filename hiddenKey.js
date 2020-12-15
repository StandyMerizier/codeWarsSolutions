//#hidden key You must find the key, there's no time to waste!
//
//Don't forget console.log can be your friend and your enemy...
//
//GET THAT KEY!


//solution
const __KEY__ = '<!--F*&DFN7gdh7*(D^G-->';


//another solution
const __KEY__ = arguments.callee.toString().match(/(?=\(__KEY__\s===\s).*?(?=,)/g)[0].replace(/(^.*?)?'/g, '');

