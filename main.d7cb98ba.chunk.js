(this["webpackJsonptic-tac-toe-v1"]=this["webpackJsonptic-tac-toe-v1"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),l=n.n(r),u=(n(12),n(4)),i=n(1);var o=function(e){e.squares,e.onClick},s=function(){var e=Object(a.useState)([Array(9).fill(null)]),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(0),s=Object(i.a)(l,2),f=s[0],m=s[1],b=Object(a.useState)(!0),v=Object(i.a)(b,2),O=v[0],j=v[1],E=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(i.a)(t[n],3),c=a[0],r=a[1],l=a[2];if(e[c]&&e[c]===e[r]&&e[c]===e[l])return e[c]}return null}(n[f]),p=function(){return O?"X":"O"};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tic Tac Toe"),c.a.createElement(o,{squares:n[f],onClick:function(e){var t=n.slice(0,f+1),a=t[f],c=Object(u.a)(a);E||c[e]||(c[e]=p(),r([].concat(Object(u.a)(t),[c])),m(t.length),j(!O))}}),c.a.createElement("div",{className:"info-wrapper"},c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){r([Array(9).fill(null)]),m(0),j(!0)}},"Go to Start")),c.a.createElement("h3",null,function(e){return e?"Winner: "+e+"!":9===f&&null===e?"Tie Game!":"Next Player: "+p()}(E))))};l.a.render(c.a.createElement(s,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d7cb98ba.chunk.js.map