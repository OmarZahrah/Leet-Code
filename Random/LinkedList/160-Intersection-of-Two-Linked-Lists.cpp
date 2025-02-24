/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    unordered_map<ListNode* ,int> map;
    ListNode* current=headA;
    while(current){
        map[current]=1;
        current=current->next;
    }    
    current =headB;

    while(current){
        if(map.count(current))return current ;
        current =current->next;
    }
    return current;

    }
};