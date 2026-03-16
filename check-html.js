const fs = require('fs')
const html = fs.readFileSync('sample-page.html', 'utf8')
const matches = html.match(/content\/lisans[^'"]+/g) || []
console.log('Dynamic endpoints:')
console.log([...new Set(matches)].join('\n'))

// Also find ajax calls
const ajax = html.match(/ajax[^;]{0,100}/g) || []
console.log('\nAjax calls:')
console.log(ajax.slice(0, 10).join('\n'))
