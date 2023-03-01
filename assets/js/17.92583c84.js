(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{428:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("strong",[t._v("掘金团队号上线，助你 Offer 临门！ 点击 "),e("a",{attrs:{href:"https://juejin.cn/offer",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看详情"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("第一次参加掘金打卡活动，别的不说 主要是奔着奖励来的。4.12开始为了达到14题小目标 冲冲冲！！！")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/733d8d8d4b2a4210af53062d7e0bea68~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),e("h3",{attrs:{id:"题目描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),e("p",[t._v("题目链接："),e("a",{attrs:{href:"https://leetcode-cn.com/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("两数之和"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("题目描述我用截图leetcode的为主，所以题目如下图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95d6f074f466448f92664a315dd0b638~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),e("h3",{attrs:{id:"思路分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析")]),t._v(" "),e("p",[t._v("依照题目可以知道，这是输入一个数组和一个target目标值，求两数和为目标值的下标。\n我先考虑必定存在的情况，并且只存在一种的情况，那怎么样可以求出答案，因为和知道，所以我的想法去按照遍历数组然后target-item(当前值)的差是否存在于数组 是的话那么所得值和当前值的对应的下标就是要返回的答案。ps:不过我又想如果都保证是正正数的情况下，那是不是可以直接不考虑比target值大的情况，当然考虑了要是可以负正数反而错了。所以我按照常规解法去先来一下")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/241585b7155f45558be6be37ee26a8b0~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n最后通过两次修改才通过，我第一个数的求法思路是遍历数组然后然后从遍历的那个数之后的数组去找差值，存在则才是我们要的第一个数字。所以就有了个nums.slice(index+1),求出第一个数")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/895f68fd92154881b5a6ecc717d3a9d1~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n我以为第二个数字更简单，直接从原来找差值的下标，好的这里踩了坑，这样会导致相同数字下标求错，所以换了个思路既然在保证第一个数正确的情况下直接把原数组reverse()然后再找差值求得反转下标 这样思路是对的，然后第二个值就等于数组长度-(所得的反转下标+1),我以为对了然后又踩了个坑 数组在反转后是会改变原来数组的值 所以我才添加了arr存原数组，然后才通过")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cc3029012764935851f460cf310f1de~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),e("h3",{attrs:{id:"ac-代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ac-代码"}},[t._v("#")]),t._v(" AC 代码")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    let arr = [...nums]\n    if(nums&&nums.length>1){\n        let firstNum = nums.findIndex((item,index)=>{\n            return nums.slice(index+1).includes(target-item)\n        })\n        if(firstNum===-1){\n            return []\n        }else{\n            let secondNum = nums.length-nums.reverse().indexOf(target-arr[firstNum])-1\n            return [firstNum,secondNum]\n        }\n    }else{\n        return []\n    }\n};\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br")])]),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("考虑点要足，不然就有bug。第二题算法完成，坚持就是胜利")]),t._v(" "),e("p",[t._v("       ↓↓↓")]),t._v(" "),e("p",[t._v("→  "),e("a",{attrs:{href:"https://juejin.cn/post/6950903770834272292/",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法系列链接"),e("OutboundLink")],1),t._v(" ←")]),t._v(" "),e("p",[t._v("       ↑↑↑")]),t._v(" "),e("p",[t._v("这里可以点！这里可以点！这里可以点！")])])}),[],!1,null,null,null);e.default=n.exports}}]);