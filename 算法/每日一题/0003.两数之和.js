/*
 * @Author: your name
 * @Date: 2020-12-21 21:36:56
 * @LastEditTime: 2020-12-21 21:53:24
 * @LastEditors: Please set LastEditors
 * @Description: 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

 * @FilePath: \算法\每日一题\两数之和.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let c = 0;
  let head = {};
  let p = head;
  while (l1 && l2) {
    let sum = l1.val + l2.val + c;
    c = Math.floor(sum / 10);
    sum = sum % 10;
    l1 = l1.next;
    l2 = l2.next;
    p.val = sum;
    p.next = null;
    p = p.next;
  }
  while (l1) {
    let sum = l1.val + c;
    c = Math.floor(sum / 10);
    l1 = l1.next;
    p.val = sum;
    p.next = null;
    p = p.next;
  }
  while (l2) {
    let sum = l2.val + c;
    c = Math.floor(sum / 10);
    l1 = l1.next;
    p.val = sum;
    p.next = null;
    p = p.next;
  }
  console.log(head);
};
l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};
l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};
addTwoNumbers(l1, l2);
