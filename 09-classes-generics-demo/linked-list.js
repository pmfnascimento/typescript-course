var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.lenght = 0;
    }
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.lenght++;
    };
    LinkedList.prototype.getNumberOfElements = function () {
        return this.lenght;
    };
    LinkedList.prototype.print = function () {
        var current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
var numberList = new LinkedList();
numberList.add(10);
numberList.add(50);
numberList.add(-3);
console.log(numberList.getNumberOfElements());
numberList.print();
var nameList = new LinkedList();
