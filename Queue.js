class Queue {
    constructor() {
        this.queue = []
    }

    enqueue (v) {
        this.queue.push(v)
    }

    dequeue () {
       return this.queue.shift()
    }

    isEmpty () {
        return this.queue.length === 0
    }
}

module.exports = Queue