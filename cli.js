const {
  kakaoAddrDirect,
  kakaoPlaceDirect,
  kakaoCoordsDirect,
} = require('./index.js')

const [_, __, type, searchText] = process.argv
let x, y
if (type === 'coord2address') {
  x = searchText
  y = process.argv[4]
}

// console.log(type, searchText)
const usage = `usage: kk [address|place] [searchText]
usage: kk [coord2address] [x] [y]`
if (!type || !searchText) {
  console.log(usage)
  process.exit(1)
}

if (type === 'coord2address' && !x && !y) {
  console.log(usage)
  process.exit(1)
}

if (type === 'address')
  kakaoAddrDirect(searchText).then(console.log).catch(console.error)
else if (type === 'place')
  kakaoPlaceDirect(searchText).then(console.log).catch(console.error)
else if (type === 'coord2address')
  kakaoCoordsDirect(x, y).then(console.log).catch(console.error)
else {
  console.log(usage)
  process.exit(1)
}
