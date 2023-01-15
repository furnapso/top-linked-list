export class Node {
    value;
    nextNode;

    constructor(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    setNextNode(nextNode) {
        this.nextNode = nextNode;
    }

    getNextNode() {
        return this.nextNode;
    }

    removeNextNode() {
        this.nextNode = null;
    }
}