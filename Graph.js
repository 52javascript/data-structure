const Queue = require('./Queue')

function Graph() {
    let points = []
    let table = new Map()

    this.appPoint = function (v) {
        points.push(v)
        table.set(v, [])
    }

    this.addEdge = function (v, w) {
        table.get(v).push(w)
        table.get(w).push(v)
    }

    this.bfs = function (v, cb) {
        const color = initColor()
        const queue = new Queue()
        queue.enqueue(v)
        while (!queue.isEmpty()) {
            const u = queue.dequeue()
            let lingju = table.get(u)
            color[u] = 'grey'
            lingju.forEach(item => {
                if (color[item] === 'white') {
                    color[item] = 'grey'
                    queue.enqueue(item)
                }
            })
            cb(u)
        }
    }

    var initColor = function () {
        var color = {}
        points.forEach(item => {
            color[item] = 'white'
        })
        return color
    }

    this.dfs = function (cb) {
        var color = initColor()
        points.forEach(item => {
            if (color[item] === 'white') {
                dfsUtil(item, color, cb)
            }
        })
    }

    var dfsUtil = function (u, color, cb) {
        color[u] = 'grey'
        cb && cb(u)
        let lingju = table.get(u)
        lingju.forEach(item => {
            if (color[item] === 'white') {
                dfsUtil(item, color, cb)
            }
        })
        color[u] = 'black'
    }
}
const g  = new Graph()
let myVertices = ['A', 'B', 'C', 'D', "E", "F", "G", "H", 'I']

myVertices.forEach(item => {
    g.appPoint(item)
})

g.addEdge('A', 'B'); //{9}
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('C', 'D');
g.addEdge('C', 'G');
g.addEdge('D', 'G');
g.addEdge('D', 'H');
g.addEdge('B', 'E');
g.addEdge('B', 'F');
g.addEdge('E', 'I');

/*
g.bfs(myVertices[0], function (val) {
    console.log(val)
})
*/

g.dfs(function (val) {
    // console.log(val)
})