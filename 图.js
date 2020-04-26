const Queue = require('./Queue')

function Graph() {
    let vertices = [] // 所有的定点
    let adjList = new Map() // 邻接表

    // 添加顶点
    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v, [])
    }

    // 添加边
    this.addEdge = function (v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }
    this.toString = function () {
        let s = '';
        for (let i = 0; i < vertices.length; i++) { //{10}
            s += vertices[i] + ' -> ';
            let neighbors = adjList.get(vertices[i]); //{11}
            for (let j = 0; j < neighbors.length; j++) { //{12}
                s += neighbors[j] + ' ';
            }
            s += '\n'; //{13}
        }
        return s;
    }

    var initColor = function () {
        let color = {}
        vertices.forEach(item => {
            color[item] = 'white'
        })
        return color
    }
    this.bfs = function (v, callback) {
        const color = initColor()
        const queue = new Queue()
        queue.enqueue(v)
        while (!queue.isEmpty()) {
            let u = queue.dequeue()
            let neighbors = adjList.get(u)
            color[u] = 'grey'
            neighbors.forEach(item => {
                if (color[item] === 'white') {
                    color[item] = 'grey'
                    queue.enqueue(item)
                }
            })
            color[u] = 'black'
            callback(u)
        }
    }
}

let graph = new Graph()
let myVertices = ['A', 'B', 'C', 'D', "E", "F", "G", "H", 'I']

myVertices.forEach(item => {
    graph.addVertex(item)
})

graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.bfs(myVertices[0], function (val) {
    console.log('Visited vertex: ' + val); //{17}
})