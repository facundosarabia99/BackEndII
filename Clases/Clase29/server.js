const { default: cluster } = require('cluster')
const http = require('http')

// const numCPUs = require('os').cpus().length
console.log(require('os').cpus())

// if (clusters.isPrimary){
//     console.log(`PID MASTER ${process.pid}`)

// for (let i = 0; i < numCPUs; i++){
//     clusters.fork()
// }

// cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`)
// })
// } else {
//     http.createServer((req, res) => {
//         res.writeHead(200)
//         res.end('hola mundo!')
//     }).listen(8000)

//     console.log(`worker ${process.pid} started`)
// }