"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/problems/[id]/page",{

/***/ "(app-pages-browser)/./data/Problems/mid-linkedList.ts":
/*!*****************************************!*\
  !*** ./data/Problems/mid-linkedList.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   midOfLL: function() { return /* binding */ midOfLL; }\n/* harmony export */ });\nconst intialcode = [\n    {\n        id: 1,\n        name: '\\n        #include <bits/stdc++.h>\\n        using namespace std;\\n        \\n        struct Node\\n        {\\n            int data;\\n            struct Node* next;\\n            \\n            Node(int x){\\n                data = x;\\n                next = NULL;\\n            }\\n        };\\n        void printList(Node* node) \\n        { \\n            while (node != NULL) { \\n                cout << node->data <<\" \"; \\n                node = node->next; \\n            } \\n        }\\n        '\n    },\n    {\n        id: 2,\n        name: '\\nimport java.util.*;\\nimport java.io.*;\\n\\nclass Node{\\n    int data;\\n    Node next;\\n    \\n    Node(int x){\\n        data = x;\\n        next = null;\\n    }\\n    \\n}\\nclass Main{\\n\tstatic void printList(Node node) \\n\t{ \\n\t\twhile (node != null) \\n\t\t{ \\n\t\t\tSystem.out.print(node.data + \" \"); \\n\t\t\tnode = node.next; \\n\t\t} \\n\t\tSystem.out.println(); \\n\t}\\n    public static void main(String args[]) throws IOException { \\n        Scanner sc = new Scanner(System.in);\\n        int t = sc.nextInt();\\n        while(t > 0){\\n        \tint n = sc.nextInt();\\n            Node head = new Node(sc.nextInt());\\n            Node tail = head;\\n            for(int i=0; i<n-1; i++)\\n            {\\n                tail.next = new Node(sc.nextInt());\\n                tail = tail.next;\\n            }\\n            Solution g = new Solution();\\n            int ans = g.getMiddle(head);\\n            System.out.print(ans+ \" \");\\n            t--;\\n        }\\n    } \\n} \\n   \\n'\n    }\n];\nconst endingcode = [\n    {\n        id: 1,\n        name: \"int main() {\\n    int t;\\n    cin>>t;\\n    while(t--){\\n        int N;\\n        cin>>N;\\n        int data;\\n        cin>>data;\\n        struct Node *head = new Node(data);\\n        struct Node *tail = head;\\n        for (int i = 0; i < N-1; ++i)\\n        {\\n            cin>>data;\\n            tail->next = new Node(data);\\n            tail = tail->next;\\n        }\\n        \\n        Solution ob;\\n        cout << ob.getMiddle(head) << endl;\\n    }\\n    return 0;\\n}\\n\\n\"\n    },\n    {\n        id: 2,\n        name: \"\"\n    }\n];\nconst boilercode = [\n    {\n        id: 1,\n        name: \"/* Link list Node \\nstruct Node {\\n    int data;\\n    Node* next;\\n    \\n    Node(int x){\\n        data = x;\\n        next = NULL;\\n    }\\n    \\n}; */\\nclass Solution{\\n    public:\\n    /* Should return data of middle node. If linked list is empty, then  -1*/\\n    int getMiddle(Node *head)\\n    {\\n        // Your code here\\n    }\\n};\\n\"\n    },\n    {\n        id: 2,\n        name: \"/* Node of a linked list\\nclass Node {\\n  int data;\\n   Node next;\\n   Node(int d)  { data = d;  next = null; }\\n}\\n*/\\n\\nclass Solution\\n{\\n   int getMiddle(Node head)\\n   {\\n        // Your code here.\\n   }\\n}\"\n    }\n];\nconst solutioncode = [\n    {\n        id: 1,\n        name: \"class Solution{\\n    public:\\n    /* Should return data of middle node. If linked list is empty, then  -1*/\\n    int getMiddle(Node *head)\\n    {\\n        Node *fast=head;\\n        Node *slow=head;\\n        while(fast!=NULL){\\n            fast=fast->next;\\n            if(fast!=NULL){\\n                slow=slow->next;\\n                fast=fast=fast->next;\\n            }\\n            \\n        }\\n        \\n        return slow->data;\\n    }\\n};\\n\"\n    },\n    {\n        id: 2,\n        name: \"class Solution\\n{\\n    int getMiddle(Node head)\\n    {\\n        if(head.next==null) return head.data;\\n        if(head.next.next==null) return head.next.data;\\n        Node slow=head;\\n        Node fast=head;\\n        while(fast.next!=null){\\n             slow=slow.next;\\n            if(fast.next.next==null)\\n                return slow.data;\\n                \\n            fast=fast.next.next;\\n        }\\n        return slow.data;\\n    }\\n}\"\n    }\n];\nconst midOfLL = {\n    id: \"mid-linkedList\",\n    title: \"Finding middle element in a linked list\",\n    problemStatement: '<div class=\"mt-1\">\\n    <p>\\n        Given a singly linked list of N nodes, the task is to find the middle of the linked list. For example, if the linked list is 1->2->3->4->5, then the middle node of the list is 3.\\n    </p>\\n    <p>\\n        If there are two middle nodes (in case, when N is even), print the second middle element. For example, if the linked list given is 1->2->3->4->5->6, then the middle node of the list is 4.\\n    </p>\\n</div>\\n',\n    examples: [\n        {\n            id: 1,\n            inputText: \"LL: 1->2->3->4->5\",\n            outputText: \" 3 \"\n        },\n        {\n            id: 2,\n            inputText: \"LL : 2->4->6->7->5->1\",\n            outputText: \" 7 \"\n        },\n        {\n            id: 3,\n            inputText: \"LL : 4->5->6\",\n            outputText: \" 5 \"\n        }\n    ],\n    constraints: '<div className=\"mt-4\">\\n            <ul>\\n                <li className=\"mt-2\">\\n                    <code>Expected Time Complexity: O(N)</code>\\n                </li>\\n                <li className=\"mt-2\">\\n                    <code>Expected Auxiliary Space: O(1)</code>\\n                </li>\\n                <li className=\"mt-2\">\\n                    <code>1 ≤ N ≤ 5000</code>\\n                </li>\\n            </ul>\\n        </div>',\n    starterCode: boilercode,\n    intialcode: intialcode,\n    endingcode: endingcode,\n    solutioncode: solutioncode,\n    inuputs: \"3 5 1 2 3 4 5 6 2 4 6 7 5 1 3 4 8 11\",\n    output: \"3 7 8 \",\n    order: 4,\n    difficulty: \"Medium\",\n    tag: [\n        {\n            id: 1,\n            name: \"Data Structure\"\n        },\n        {\n            id: 2,\n            name: \"LinkedList\"\n        }\n    ],\n    companies: [\n        {\n            id: 1,\n            name: \"Zoho\"\n        },\n        {\n            id: 2,\n            name: \"GE\"\n        },\n        {\n            id: 3,\n            name: \"Nagarro\"\n        }\n    ],\n    averagetime: \"15m\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2RhdGEvUHJvYmxlbXMvbWlkLWxpbmtlZExpc3QudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BLGFBQWE7SUFDbEI7UUFDQ0MsSUFBRztRQUNIQyxNQUFNO0lBc0JQO0lBQ0E7UUFDQ0QsSUFBRztRQUNIQyxNQUNEO0lBOENBO0NBRUE7QUFFRCxNQUFNQyxhQUFXO0lBQ2hCO1FBQ0NGLElBQUc7UUFDSEMsTUFDRDtJQXdCQTtJQUNBO1FBQ0NELElBQUc7UUFDSEMsTUFBTTtJQUNQO0NBQ0E7QUFFRCxNQUFNRSxhQUFXO0lBQ2hCO1FBQ0VILElBQUc7UUFDSEMsTUFDRjtJQW9CQTtJQUNBO1FBQ0NELElBQUc7UUFDSEMsTUFDRDtJQWVBO0NBQ0E7QUFFRCxNQUFNRyxlQUFhO0lBQ2pCO1FBQ0VKLElBQUc7UUFDSEMsTUFDSDtJQW9CQztJQUNBO1FBQ0VELElBQUc7UUFDSEMsTUFDSDtJQWtCQztDQUNEO0FBRU0sTUFBTUksVUFBbUI7SUFFNUJMLElBQUk7SUFDSk0sT0FBTztJQUNQQyxrQkFBbUI7SUFVckJDLFVBQVM7UUFDVjtZQUNFUixJQUFJO1lBQ0pTLFdBQVc7WUFDWEMsWUFBWTtRQUNkO1FBQ0E7WUFDRVYsSUFBSTtZQUNKUyxXQUFXO1lBQ1hDLFlBQVk7UUFDZDtRQUNHO1lBQ0lWLElBQUk7WUFDSlMsV0FBVztZQUNYQyxZQUFZO1FBQ2Q7S0FDSDtJQUNGQyxhQUFjO0lBY2RDLGFBQWFUO0lBQ2JKLFlBQVdBO0lBQ1hHLFlBQVdBO0lBQ1JFLGNBQWFBO0lBQ2hCUyxTQUFRO0lBQ1JDLFFBQU87SUFDUEMsT0FBTztJQUNQQyxZQUFZO0lBQ1pDLEtBQUk7UUFDSDtZQUNDakIsSUFBSTtZQUNKQyxNQUFNO1FBQ0w7UUFDQTtZQUNERCxJQUFJO1lBQ0pDLE1BQU07UUFDTDtLQUNGO0lBQ0RpQixXQUFXO1FBQ1Y7WUFDRWxCLElBQUk7WUFDSkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxJQUFJO1lBQ0pDLE1BQU07UUFDUjtLQUNFO0lBRURrQixhQUFZO0FBRWYsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL1Byb2JsZW1zL21pZC1saW5rZWRMaXN0LnRzPzM3MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvYmxlbSB9IGZyb20gXCIuLi90eXBlcy9wcm9ibGVtXCI7XHJcblxyXG5jb25zdCBpbnRpYWxjb2RlID0gW1xyXG5cdHtcclxuXHRcdGlkOjEsXHJcblx0XHRuYW1lOmBcclxuICAgICAgICAjaW5jbHVkZSA8Yml0cy9zdGRjKysuaD5cclxuICAgICAgICB1c2luZyBuYW1lc3BhY2Ugc3RkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN0cnVjdCBOb2RlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnQgZGF0YTtcclxuICAgICAgICAgICAgc3RydWN0IE5vZGUqIG5leHQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBOb2RlKGludCB4KXtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB4O1xyXG4gICAgICAgICAgICAgICAgbmV4dCA9IE5VTEw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZvaWQgcHJpbnRMaXN0KE5vZGUqIG5vZGUpIFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIHdoaWxlIChub2RlICE9IE5VTEwpIHsgXHJcbiAgICAgICAgICAgICAgICBjb3V0IDw8IG5vZGUtPmRhdGEgPDxcIiBcIjsgXHJcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS0+bmV4dDsgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOjIsXHJcblx0XHRuYW1lOlxyXG5gXHJcbmltcG9ydCBqYXZhLnV0aWwuKjtcclxuaW1wb3J0IGphdmEuaW8uKjtcclxuXHJcbmNsYXNzIE5vZGV7XHJcbiAgICBpbnQgZGF0YTtcclxuICAgIE5vZGUgbmV4dDtcclxuICAgIFxyXG4gICAgTm9kZShpbnQgeCl7XHJcbiAgICAgICAgZGF0YSA9IHg7XHJcbiAgICAgICAgbmV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5jbGFzcyBNYWlue1xyXG5cdHN0YXRpYyB2b2lkIHByaW50TGlzdChOb2RlIG5vZGUpIFxyXG5cdHsgXHJcblx0XHR3aGlsZSAobm9kZSAhPSBudWxsKSBcclxuXHRcdHsgXHJcblx0XHRcdFN5c3RlbS5vdXQucHJpbnQobm9kZS5kYXRhICsgXCIgXCIpOyBcclxuXHRcdFx0bm9kZSA9IG5vZGUubmV4dDsgXHJcblx0XHR9IFxyXG5cdFx0U3lzdGVtLm91dC5wcmludGxuKCk7IFxyXG5cdH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBtYWluKFN0cmluZyBhcmdzW10pIHRocm93cyBJT0V4Y2VwdGlvbiB7IFxyXG4gICAgICAgIFNjYW5uZXIgc2MgPSBuZXcgU2Nhbm5lcihTeXN0ZW0uaW4pO1xyXG4gICAgICAgIGludCB0ID0gc2MubmV4dEludCgpO1xyXG4gICAgICAgIHdoaWxlKHQgPiAwKXtcclxuICAgICAgICBcdGludCBuID0gc2MubmV4dEludCgpO1xyXG4gICAgICAgICAgICBOb2RlIGhlYWQgPSBuZXcgTm9kZShzYy5uZXh0SW50KCkpO1xyXG4gICAgICAgICAgICBOb2RlIHRhaWwgPSBoZWFkO1xyXG4gICAgICAgICAgICBmb3IoaW50IGk9MDsgaTxuLTE7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFpbC5uZXh0ID0gbmV3IE5vZGUoc2MubmV4dEludCgpKTtcclxuICAgICAgICAgICAgICAgIHRhaWwgPSB0YWlsLm5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgU29sdXRpb24gZyA9IG5ldyBTb2x1dGlvbigpO1xyXG4gICAgICAgICAgICBpbnQgYW5zID0gZy5nZXRNaWRkbGUoaGVhZCk7XHJcbiAgICAgICAgICAgIFN5c3RlbS5vdXQucHJpbnQoYW5zKyBcIiBcIik7XHJcbiAgICAgICAgICAgIHQtLTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59IFxyXG4gICBcclxuYFxyXG5cclxuXHR9XHJcblxyXG5dXHJcblxyXG5jb25zdCBlbmRpbmdjb2RlPVtcclxuXHR7XHJcblx0XHRpZDoxLFxyXG5cdFx0bmFtZTpcclxuYGludCBtYWluKCkge1xyXG4gICAgaW50IHQ7XHJcbiAgICBjaW4+PnQ7XHJcbiAgICB3aGlsZSh0LS0pe1xyXG4gICAgICAgIGludCBOO1xyXG4gICAgICAgIGNpbj4+TjtcclxuICAgICAgICBpbnQgZGF0YTtcclxuICAgICAgICBjaW4+PmRhdGE7XHJcbiAgICAgICAgc3RydWN0IE5vZGUgKmhlYWQgPSBuZXcgTm9kZShkYXRhKTtcclxuICAgICAgICBzdHJ1Y3QgTm9kZSAqdGFpbCA9IGhlYWQ7XHJcbiAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOLTE7ICsraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNpbj4+ZGF0YTtcclxuICAgICAgICAgICAgdGFpbC0+bmV4dCA9IG5ldyBOb2RlKGRhdGEpO1xyXG4gICAgICAgICAgICB0YWlsID0gdGFpbC0+bmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgU29sdXRpb24gb2I7XHJcbiAgICAgICAgY291dCA8PCBvYi5nZXRNaWRkbGUoaGVhZCkgPDwgZW5kbDtcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG5gXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDoyLFxyXG5cdFx0bmFtZTpgYFxyXG5cdH1cclxuXVxyXG5cclxuY29uc3QgYm9pbGVyY29kZT1bXHJcbiB7XHJcbiAgIGlkOjEsXHJcbiAgIG5hbWU6XHJcbmAvKiBMaW5rIGxpc3QgTm9kZSBcclxuc3RydWN0IE5vZGUge1xyXG4gICAgaW50IGRhdGE7XHJcbiAgICBOb2RlKiBuZXh0O1xyXG4gICAgXHJcbiAgICBOb2RlKGludCB4KXtcclxuICAgICAgICBkYXRhID0geDtcclxuICAgICAgICBuZXh0ID0gTlVMTDtcclxuICAgIH1cclxuICAgIFxyXG59OyAqL1xyXG5jbGFzcyBTb2x1dGlvbntcclxuICAgIHB1YmxpYzpcclxuICAgIC8qIFNob3VsZCByZXR1cm4gZGF0YSBvZiBtaWRkbGUgbm9kZS4gSWYgbGlua2VkIGxpc3QgaXMgZW1wdHksIHRoZW4gIC0xKi9cclxuICAgIGludCBnZXRNaWRkbGUoTm9kZSAqaGVhZClcclxuICAgIHtcclxuICAgICAgICAvLyBZb3VyIGNvZGUgaGVyZVxyXG4gICAgfVxyXG59O1xyXG5gXHQgXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDoyLFxyXG5cdFx0bmFtZTpcclxuYC8qIE5vZGUgb2YgYSBsaW5rZWQgbGlzdFxyXG5jbGFzcyBOb2RlIHtcclxuICBpbnQgZGF0YTtcclxuICAgTm9kZSBuZXh0O1xyXG4gICBOb2RlKGludCBkKSAgeyBkYXRhID0gZDsgIG5leHQgPSBudWxsOyB9XHJcbn1cclxuKi9cclxuXHJcbmNsYXNzIFNvbHV0aW9uXHJcbntcclxuICAgaW50IGdldE1pZGRsZShOb2RlIGhlYWQpXHJcbiAgIHtcclxuICAgICAgICAvLyBZb3VyIGNvZGUgaGVyZS5cclxuICAgfVxyXG59YFxyXG5cdH0gICAgICAgICAgICAgXHJcbl1cclxuXHJcbmNvbnN0IHNvbHV0aW9uY29kZT1bXHJcbiAge1xyXG4gICAgaWQ6MSxcclxuICAgIG5hbWU6XHJcbmBjbGFzcyBTb2x1dGlvbntcclxuICAgIHB1YmxpYzpcclxuICAgIC8qIFNob3VsZCByZXR1cm4gZGF0YSBvZiBtaWRkbGUgbm9kZS4gSWYgbGlua2VkIGxpc3QgaXMgZW1wdHksIHRoZW4gIC0xKi9cclxuICAgIGludCBnZXRNaWRkbGUoTm9kZSAqaGVhZClcclxuICAgIHtcclxuICAgICAgICBOb2RlICpmYXN0PWhlYWQ7XHJcbiAgICAgICAgTm9kZSAqc2xvdz1oZWFkO1xyXG4gICAgICAgIHdoaWxlKGZhc3QhPU5VTEwpe1xyXG4gICAgICAgICAgICBmYXN0PWZhc3QtPm5leHQ7XHJcbiAgICAgICAgICAgIGlmKGZhc3QhPU5VTEwpe1xyXG4gICAgICAgICAgICAgICAgc2xvdz1zbG93LT5uZXh0O1xyXG4gICAgICAgICAgICAgICAgZmFzdD1mYXN0PWZhc3QtPm5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzbG93LT5kYXRhO1xyXG4gICAgfVxyXG59O1xyXG5gXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDoyLFxyXG4gICAgbmFtZTpcclxuYGNsYXNzIFNvbHV0aW9uXHJcbntcclxuICAgIGludCBnZXRNaWRkbGUoTm9kZSBoZWFkKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGhlYWQubmV4dD09bnVsbCkgcmV0dXJuIGhlYWQuZGF0YTtcclxuICAgICAgICBpZihoZWFkLm5leHQubmV4dD09bnVsbCkgcmV0dXJuIGhlYWQubmV4dC5kYXRhO1xyXG4gICAgICAgIE5vZGUgc2xvdz1oZWFkO1xyXG4gICAgICAgIE5vZGUgZmFzdD1oZWFkO1xyXG4gICAgICAgIHdoaWxlKGZhc3QubmV4dCE9bnVsbCl7XHJcbiAgICAgICAgICAgICBzbG93PXNsb3cubmV4dDtcclxuICAgICAgICAgICAgaWYoZmFzdC5uZXh0Lm5leHQ9PW51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2xvdy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZhc3Q9ZmFzdC5uZXh0Lm5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbG93LmRhdGE7XHJcbiAgICB9XHJcbn1gXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgbWlkT2ZMTDogUHJvYmxlbSA9IHtcclxuXHRcclxuICAgIGlkOiBcIm1pZC1saW5rZWRMaXN0XCIsXHJcbiAgICB0aXRsZTogXCJGaW5kaW5nIG1pZGRsZSBlbGVtZW50IGluIGEgbGlua2VkIGxpc3RcIixcclxuICAgIHByb2JsZW1TdGF0ZW1lbnQ6IGA8ZGl2IGNsYXNzPVwibXQtMVwiPlxyXG4gICAgPHA+XHJcbiAgICAgICAgR2l2ZW4gYSBzaW5nbHkgbGlua2VkIGxpc3Qgb2YgTiBub2RlcywgdGhlIHRhc2sgaXMgdG8gZmluZCB0aGUgbWlkZGxlIG9mIHRoZSBsaW5rZWQgbGlzdC4gRm9yIGV4YW1wbGUsIGlmIHRoZSBsaW5rZWQgbGlzdCBpcyAxLT4yLT4zLT40LT41LCB0aGVuIHRoZSBtaWRkbGUgbm9kZSBvZiB0aGUgbGlzdCBpcyAzLlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgICAgSWYgdGhlcmUgYXJlIHR3byBtaWRkbGUgbm9kZXMgKGluIGNhc2UsIHdoZW4gTiBpcyBldmVuKSwgcHJpbnQgdGhlIHNlY29uZCBtaWRkbGUgZWxlbWVudC4gRm9yIGV4YW1wbGUsIGlmIHRoZSBsaW5rZWQgbGlzdCBnaXZlbiBpcyAxLT4yLT4zLT40LT41LT42LCB0aGVuIHRoZSBtaWRkbGUgbm9kZSBvZiB0aGUgbGlzdCBpcyA0LlxyXG4gICAgPC9wPlxyXG48L2Rpdj5cclxuYFxyXG4gICAgLFx0XHJcbiAgZXhhbXBsZXM6W1xyXG5cdHtcclxuXHQgIGlkOiAxLFxyXG5cdCAgaW5wdXRUZXh0OiBcIkxMOiAxLT4yLT4zLT40LT41XCIsXHJcblx0ICBvdXRwdXRUZXh0OiBcIiAzIFwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdCAgaWQ6IDIsXHJcblx0ICBpbnB1dFRleHQ6IFwiTEwgOiAyLT40LT42LT43LT41LT4xXCIsXHJcblx0ICBvdXRwdXRUZXh0OiBcIiA3IFwiLFxyXG5cdH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgaW5wdXRUZXh0OiBcIkxMIDogNC0+NS0+NlwiLFxyXG4gICAgICAgIG91dHB1dFRleHQ6IFwiIDUgXCIsXHJcbiAgICAgIH1cclxuICBdLFxyXG5cdGNvbnN0cmFpbnRzOiBgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGU+RXhwZWN0ZWQgVGltZSBDb21wbGV4aXR5OiBPKE4pPC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGU+RXhwZWN0ZWQgQXV4aWxpYXJ5IFNwYWNlOiBPKDEpPC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGU+MSDiiaQgTiDiiaQgNTAwMDwvY29kZT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+YCxcclxuXHJcblx0c3RhcnRlckNvZGU6IGJvaWxlcmNvZGUsXHJcblx0aW50aWFsY29kZTppbnRpYWxjb2RlLFxyXG5cdGVuZGluZ2NvZGU6ZW5kaW5nY29kZSxcclxuICAgIHNvbHV0aW9uY29kZTpzb2x1dGlvbmNvZGUsXHJcblx0aW51cHV0czpcIjMgNSAxIDIgMyA0IDUgNiAyIDQgNiA3IDUgMSAzIDQgOCAxMVwiLFxyXG5cdG91dHB1dDpcIjMgNyA4IFwiLFxyXG5cdG9yZGVyOiA0LFxyXG5cdGRpZmZpY3VsdHk6IFwiTWVkaXVtXCIsXHJcblx0dGFnOltcclxuXHRcdHtcclxuXHRcdFx0aWQ6IDEsXHJcblx0XHRcdG5hbWU6IFwiRGF0YSBTdHJ1Y3R1cmVcIixcclxuXHRcdCAgfSxcclxuXHRcdCAge1xyXG5cdFx0XHRpZDogMixcclxuXHRcdFx0bmFtZTogXCJMaW5rZWRMaXN0XCIsXHJcblx0XHQgIH1cclxuXHRdLFxyXG5cdGNvbXBhbmllcyA6W1xyXG5cdFx0e1xyXG5cdFx0ICBpZDogMSxcclxuXHRcdCAgbmFtZTogXCJab2hvXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBpZDogMixcclxuXHRcdCAgbmFtZTogXCJHRVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgaWQ6IDMsXHJcblx0XHQgIG5hbWU6IFwiTmFnYXJyb1wiLFxyXG5cdFx0fSxcclxuXHQgIF0sXHJcblxyXG5cdCAgYXZlcmFnZXRpbWU6XCIxNW1cIlxyXG5cdCAgXHJcbn07Il0sIm5hbWVzIjpbImludGlhbGNvZGUiLCJpZCIsIm5hbWUiLCJlbmRpbmdjb2RlIiwiYm9pbGVyY29kZSIsInNvbHV0aW9uY29kZSIsIm1pZE9mTEwiLCJ0aXRsZSIsInByb2JsZW1TdGF0ZW1lbnQiLCJleGFtcGxlcyIsImlucHV0VGV4dCIsIm91dHB1dFRleHQiLCJjb25zdHJhaW50cyIsInN0YXJ0ZXJDb2RlIiwiaW51cHV0cyIsIm91dHB1dCIsIm9yZGVyIiwiZGlmZmljdWx0eSIsInRhZyIsImNvbXBhbmllcyIsImF2ZXJhZ2V0aW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./data/Problems/mid-linkedList.ts\n"));

/***/ })

});