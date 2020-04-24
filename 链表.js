function LinkedList() {
    let head = null
    let length = 0
    this.append = function (element) {
        let node = new Node(element)
        let current
        if (head === null) {
            head = node
        } else {
            current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }

    this.removeAt = function (position) {
        let current = head,
        previous,
        index = 0

        if (position  === 0) {
            head = current.next
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
            return current.element
        }
        length--
    }

    this.insert = function (position, element) {
        let node = new Node(element),
            current = head,
            previous,
            index = 0

        if (position === 0) {
            node.next = current
            head = node
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
        }
        length++
    }

    this.toString = function () {
        let current = head,
            string = ''
        while (current) {
            string += current.element
            current = current.next
        }
        return string
    }
    this.indexOf = function (element) {
        let current = head,
            index = 0
        while (current) {
            if (current.element === element) {
                return index
            }
            index++
            current = current.next
        }
    }
    this.getHead = function () {
        return head
    }
}

function Node(element) {
    this.element = element
    this.next = null
}
function reverse (head) {
    let pre = null
    let next = null
    while (head) {
        next = head.next
        head.next = pre
        pre = head
        head = next
        console.log('****')
        console.log(pre)
        console.log(head)
        console.log(next)
        console.log('########')
    }
    return  pre
}
let link = new LinkedList()
link.append(1)
link.append(2)
link.append(3)
link.append(4)
/*
console.log(link.removeAt(2))
console.log(link.toString())
console.log(link.indexOf(4))
*/

/*let head = link.getHead()
let a = reverse(head)*/
// console.log(a)
// console.log(link.getHead())

function revers(old) {
    let head = old.getHead()
    let pre = null,
        next = null
    while (head) {
        next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
}

let a = revers(link)
console.log(a)