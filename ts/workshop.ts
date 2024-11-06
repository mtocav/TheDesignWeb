class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null) {
        this.value = value;
        this.next = next;
    }

    map(callback: (value: number) => number): ListNode | null {
        if (this.next === null) {
            return new ListNode(callback(this.value), null);
        }
        else {
            return new ListNode(callback(this.value), this.next.map(callback));
        }
    }

}
let list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
let list2 = list1.map((x) => x+1);