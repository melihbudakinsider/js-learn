const whiteListedExts = ['.css', '.js'];

const events = [
    {
        fileName: 'test1.js'
    },
    {
        fileName: 'test2.css'
    },
    {
        fileName: 'test3.html'
    }
]

const filteredItems = events.filter(event => whiteListedExts.indexOf(require('path').extname(event.fileName)) > -1)

console.log(filteredItems);