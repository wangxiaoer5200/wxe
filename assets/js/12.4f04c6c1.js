(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{422:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("掘金团队号上线，助你 Offer 临门！ 点击 "),a("a",{attrs:{href:"https://juejin.cn/offer",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看详情"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("第一次参加掘金打卡活动，别的不说 主要是奔着奖励来的。4.12开始为了达到14题小目标 冲冲冲！！！这是第10题。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/733d8d8d4b2a4210af53062d7e0bea68~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("题目链接："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/roman-to-integer/",target:"_blank",rel:"noopener noreferrer"}},[s._v("罗马数字转整数"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("题目描述我用截图leetcode的为主，所以题目如下图")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/249f27efaa294de6b37da426610fcebe~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[s._v("#")]),s._v(" 思路分析")]),s._v(" "),a("p",[s._v("特殊情况：空字符串先判断一下，然后进入分析\n先根据题目写个初始对象"),a("code",[s._v("{ 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 }")]),s._v(" 方便接下来转换，提示也说明了不会包含这些字符外的情况，可以少考虑很多，再思考一下那些是特殊的IV=4,IX=9,XL=40,XC=90,CD=400,CM=900\n共同的规律就是前一位小于后一位")]),s._v(" "),a("p",[s._v("解法.每次切割去判断后一位是否大于前一位是的话用减，然后直到遍历结束")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ade5b997b6014b87b8582ad2a8898b5b~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"ac-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ac-代码"}},[s._v("#")]),s._v(" AC 代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/**\n * @param {string} s\n * @return {number}\n */\nvar romanToInt = function(s) {\n   if(!s){\n       return 0\n   }\n   let map={\n       'I':1,\n       'V':5,\n       'X':10,\n       'L':50,\n       'C':100,\n       'D':500,\n       'M':1000\n   }\n   let result=0\n   s.split('').forEach((item,index)=>{\n      if(s[index+1]){\n        if(map[item]<map[s[index+1]]){\n            result -=map[item]\n        }else{\n            result +=map[item]\n        }\n      }else{\n          result +=map[item]\n      }\n   })\n   return result\n};\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("坚持就是胜利。第10题算法完成，坚持就是胜利！！！")]),s._v(" "),a("p",[s._v("       ↓↓↓")]),s._v(" "),a("p",[s._v("→  "),a("a",{attrs:{href:"https://juejin.cn/post/6950903770834272292/",target:"_blank",rel:"noopener noreferrer"}},[s._v("算法系列链接"),a("OutboundLink")],1),s._v(" ←")]),s._v(" "),a("p",[s._v("       ↑↑↑")]),s._v(" "),a("p",[s._v("这里可以点！这里可以点！这里可以点！")])])}),[],!1,null,null,null);a.default=e.exports}}]);