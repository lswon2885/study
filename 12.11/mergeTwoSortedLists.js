var mergeTwoLists = function(l1, l2) {
    // if(!l1 && ! l2) {
    //     return null;
    // }
    // if(!l1) {
    //     return l2;
    // }
    // if(!l2) {
    //     return l1;
    // }
    // const head = l1.val < l2.val ? l1 : l2;
    // console.log(l1.val+"----------l1.val");
    // l2 = l1.val < l2.val ? l2 : l1;
    // l1 = head;
    // while(l1.next && l2) {
    //     if(l2.val <= l1.next.val) {
    //         const temp = l1.next;
    //         l1.next = l2;
    //         l2 = l2.next;
    //         l1.next.next = temp;
    //     }
    //     l1 = l1.next
    // }
    // if(l2) {
    //     l1.next = l2;
    // }
    // return head;




    // console.log(list1+"-----1")
    // console.log(list2+"-----2")
    // const arr = [];
    // arr.push(...list1)
    // arr.push(...list2)
    // console.log(arr)


    // arr = [...list1,...list2]
    // console.log(arr)


     const arr = l1.concat(l2)
     console.log(arr.sort());
     return arr.sort();
};mergeTwoLists([2,3,4],[1,2,3,4]);
//두개의 배열을 합쳐서 오름차순으로 아웃