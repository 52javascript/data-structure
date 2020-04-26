function Tree() {
    let root = null
    this.insert = function (key) {
        const node = new Node(key)
        if (root === null) {
            root = node
        } else {
            insertUtil(root, node)
        }
    }
    this.zhong = function () {
        zhongUtil(root,function (val) {
            console.log(val)
        })
    }
    this.min = function () {
        return minUtil(root)
    }
    this.max = function () {
        return maxUtil(root)
    }
    this.search = function (key) {
        return searchUtil(root, key)
    }
    var searchUtil = function (node, key) {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return searchUtil(node.left, key)
        } else if (key > node.key) {
            return searchUtil(node.right, key)
        } else {
            return true
        }
    }
    var minUtil = function (node) {
        while (node && node.left !== null) {
            node = node.left
        }
        return node.key
    }
    var maxUtil = function (node) {
        while (node && node.right !== null) {
            node = node.right
        }
        return node.key
    }
    var zhongUtil = function (node, callback) {
        if (node !== null) {
            zhongUtil(node.left, callback)
            callback(node.key)
            zhongUtil(node.right, callback)
        }
    }
    var insertUtil = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertUtil(node.left, newNode)
            }
        } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertUtil(node.right, newNode)
                }
        }
    }
}

function Node(key) {
    this.key = key
    this.left = null
    this.right = null
}

const tree = new Tree()

tree.insert(1)
tree.insert(2)
tree.insert(3)
let min = tree.min()
let max = tree.max()
// console.log(min, max)
console.log(tree.search(4))