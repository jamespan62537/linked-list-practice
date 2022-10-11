class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode?.next) currentNode = currentNode.next;
      currentNode.next = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.head) return null;
    if (this.length === 1) {
      const tmp = this.head;
      this.head = null;
      this.length = 0;
      return tmp;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      const tmp = currentNode.next;
      currentNode.next = null;
      this.length--;
      return tmp;
    }
  }

  shift() {
    if (!this.head) return null;

    const tmp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.length = 0;
      return tmp;
    } else {
      this.head = this.head.next;
      this.length--;
      return tmp;
    }
  }

  unShift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      const tmp = this.head;
      this.head = newNode;
      this.head.next = tmp;
    }

    this.length++;
  }

  insert(index, value) {
    if (index > this.length || index < 0) {
      return null;
    } else if (index === 0) {
      this.unShift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let currentNode = this.head;
      let newNode = new Node(value);

      for (let i = 1; i <= index - 1; i++) {
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
    }
  }

  remove(index) {
    if (index > this.length - 1 || index < 0) {
      return null;
    } else if (index === this.length - 1) {
      this.pop();
    } else if (index === 0) {
      this.shift();
    } else {
      let currentNode = this.head;

      for (let i = 1; i < index; i++) {
        currentNode = currentNode.next;
      }

      currentNode.next = currentNode.next.next;
      this.length--;
    }
  }

  printAll() {
    if (!this.head) {
      console.log("there's nothing to print!");
    }

    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const userList = new LinkedList();

userList.push("James");
userList.push("Leo");
userList.push("Tom");
// James Leo Tom
userList.unShift("John");
// John James Leo Tom
userList.insert(1, "Jack");
// John Jack James Leo Tom
userList.remove(2);
// John Jack Leo Tom
userList.printAll();
