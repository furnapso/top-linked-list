import { Node } from "./node.js"

export class LinkedList {
    #HEAD;
    #length = 0;

    append(value) {
        const newNode = Node(value);
        length++;

        if (HEAD === null) {
            HEAD = newNode;
            return;
        }

        let pointer = HEAD;
        while (pointer !== null) {
            pointer = pointer.getNextNode();
        }

        pointer.nextNode(newNode);
    }

    prepend(value) {
        const newNode = new Node(value);
        length++;
        if (this.#HEAD !== null) {
            newNode.setNextNode(HEAD);
        }
        this.HEAD = newNode;
    }

    size() {
        return this.#length;
    }

    head() {
        return this.#HEAD;
    }

    at(index) {
        if ((index + 1) > this.#length) {
            return null;
        }

        let pointer = this.#HEAD;
        for (let i = 0; i < index; i++) {
            pointer = pointer.getNextNode()
        }
        return pointer;
    }

    tail() {
        return this.at(this.#length - 1)
    }

    pop() {
        let lastNode;
        if (this.#length === 0) {
            return null
        } else if (this.#length === 1) {
            lastNode = HEAD;
            HEAD = null;
        } else {
            lastNode = this.tail()
            let secondLastNode = this.at(this.#length - 2)
            secondLastNode.removeNextNode();
        }

        length--;
        return lastNode;
    }

    find(value) {
        let pointer = this.#HEAD;

        for (let i = 0; i < this.#length; i++) {
            if (pointer === null) {
                return null;
            }

            if (pointer.getValue() === value) {
                return pointer;
            }
        }

        return null;
    }

    contains(value) {
        return this.find(value) !== null;
    }

    toString() {
        let value = "";
        let pointer = this.#HEAD;

        for (let i = 0; i < this.#length; i++) {
            value += `(${pointer.getValue()})`
            if (i !== (this.#length - 1)) {
                value += " -> "
            }
        }

        return value;
    }
}