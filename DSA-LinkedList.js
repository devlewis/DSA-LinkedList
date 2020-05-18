class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertAt(item, pos) {
    if (this.head === null || pos === 1) {
      this.insertFirst(item);
    } else {
      let previousNode = this.head;
      let currNode = this.head;
      let counter = 1;
      while (counter !== pos) {
        if (currNode.next === null) {
          return null;
        } else {
          previousNode = currNode;
          currNode = currNode.next;
          counter++;
        }
      }
      previousNode.next = new _Node(item, currNode);
    }
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(key, item) {
    let currNode = this.head;
    let previousNode = this.head;
    if (!this.head) {
      return null;
    } else {
      while (currNode.value !== key) {
        if (currNode.next === null) {
          return null;
        } else {
          previousNode = currNode;
          currNode = currNode.next;
        }
      }
    }
    previousNode.next = new _Node(item, currNode);
  }

  insertAfter(key, item) {
    let currNode = this.head;
    let previousNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currNode.value !== key) {
      if (currNode.next === null) {
        return null;
      } else {
        previousNode = currNode;
        currNode = currNode.next;
      }
    }
    currNode.next = new _Node(item, currNode.next);
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
      return currNode;
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;

    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  SLL.remove("Husker");
  SLL.insertBefore("Boomer", "Athena");
  SLL.insertAfter("Helo", "Hotdog");
  SLL.insertAt("Kat", 3);
  SLL.remove("Tauhida");

  return SLL;
}

let SLL = main();

function display(list) {
  let current = list.head;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function size(list) {
  if (list.head === null) {
    return 0;
  }

  let current = list.head;
  let counter = 0;
  while (current) {
    current = current.next;
    counter++;
  }
  console.log(counter);
  return counter;
}

function isEmpty(list) {
  if (list.head === null) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

function findPrevious(item, list) {
  let currNode = list.head;

  if (!list.head) {
    return null;
  }

  while (currNode.next.value !== item) {
    if (currNode.next === null) {
      return null;
    } else {
      currNode = currNode.next;
    }
  }
  console.log(currNode.value);
  return currNode.value;
}

// Iterative solution O(n) time & O(1) space
function reverse(head) {
  let curr = head,
    previous,
    tmp;

  while (curr) {
    // save next before we overwrite curr.next!
    tmp = curr.next;

    // reverse pointer
    curr.next = previous;

    // step forward in the list
    previous = curr;
    curr = tmp;
  }
  console.log(previous);
  return previous;
}

//practice
// function reverse(list) {
//   let current = list.head;
//   let previous;
//   let temp;

//   while (current) {
//     temp = current.next;

//     current.next = previous;

//     previous = current;
//     current = temp;
//   }
//   console.log(previous);
//   return previous;
// }

reverse(SLL.head);

// Recursive solution: O(n) time & O(n) space
// function reverse(head) {
//   if (!head || !head.next) {
//     return head;
//   }
//   let tmp = reverse(head.next);
//   head.next.next = head;
//   head.next = undefined;
//   return tmp;
// }
