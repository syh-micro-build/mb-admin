import{C as a}from"./vue-chunks-BFNeukf4.js";function c(e){return{all:e=e||new Map,on:function(f,n){var t=e.get(f);t?t.push(n):e.set(f,[n])},off:function(f,n){var t=e.get(f);t&&(n?t.splice(t.indexOf(n)>>>0,1):e.set(f,[]))},emit:function(f,n){var t=e.get(f);t&&t.slice().map(function(o){o(n)}),(t=e.get("*"))&&t.slice().map(function(o){o(f,n)})}}}const i=c(),m=e=>(e&&(i.on(e.name,e.callback),a(()=>{i.off(e.name)})),{on:i.on,off:i.off,emit:i.emit,all:i.all});export{m as u};
