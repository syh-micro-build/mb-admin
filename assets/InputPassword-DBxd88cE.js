var be=Object.defineProperty,Me=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var D=Math.pow,V=(r,e,t)=>e in r?be(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,E=(r,e)=>{for(var t in e||(e={}))xe.call(e,t)&&V(r,t,e[t]);if($)for(var t of $(e))ke.call(e,t)&&V(r,t,e[t]);return r},A=(r,e)=>Me(r,ye(e));import{p as q}from"./index-BX5Y7Zbz.js";import{D as Ee,q as ve,w as F,r as H,d as Se,t as B,v as Z,P as we,I as Ae,u as R,M as _,x as Te,Y as De}from"./vue-chunks-DOWhatC1.js";import{A as Ie}from"./element-plus-6v3c1uXT.js";import{_ as Ce}from"./Icon-jk1cmimt.js";const Re=()=>({configGlobal:Ee("configGlobal",{})}),U=(r,e)=>r.push.apply(r,e),I=r=>r.sort((e,t)=>e.i-t.i||e.j-t.j),X=r=>{const e={};let t=1;return r.forEach(s=>{e[s]=t,t+=1}),e};var Pe={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const K=2050,J=1e3,Le=Pe,je=10,_e=1e4,re=10,ie=50,ae=20,oe=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,Ne=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,Oe=/^[A-Z\xbf-\xdf]+$/,ce=/^[^a-z\xdf-\xff]+$/,Ue=/^[a-z\xdf-\xff]+$/,We=/^[^A-Z\xbf-\xdf]+$/,Ge=/[a-z\xdf-\xff]/,ze=/[A-Z\xbf-\xdf]/,Ye=/[^A-Za-z\xbf-\xdf]/gi,$e=/^\d+$/,G=new Date().getFullYear(),Ve={recentYear:/19\d\d|200\d|201\d|202\d/g},le=[" ",",",";",":","|","/","\\","_",".","-"],qe=le.length;class Fe{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return I(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let i=n+5;i<=n+9&&!(i>=e.length);i+=1){const a=e.slice(n,+i+1||9e9),c=s.exec(a);if(c!=null){const o=this.mapIntegersToDayMonthYear([parseInt(c[1],10),parseInt(c[3],10),parseInt(c[4],10)]);o!=null&&t.push({pattern:"date",token:a,i:n,j:i,separator:c[2],year:o.year,month:o.month,day:o.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=i=>Math.abs(i.year-G);for(let i=0;i<=Math.abs(e.length-4);i+=1)for(let a=i+3;a<=i+7&&!(a>=e.length);a+=1){const c=e.slice(i,+a+1||9e9);if(s.exec(c)){const o=[],l=c.length;if(Le[l].forEach(([f,p])=>{const m=this.mapIntegersToDayMonthYear([parseInt(c.slice(0,f),10),parseInt(c.slice(f,p),10),parseInt(c.slice(p),10)]);m!=null&&o.push(m)}),o.length>0){let f=o[0],p=n(o[0]);o.slice(1).forEach(m=>{const d=n(m);d<p&&(f=m,p=d)}),t.push({pattern:"date",token:c,i,j:a,separator:"",year:f.year,month:f.month,day:f.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let i=0;i<n;i+=1){const a=e[i];if(t!==a&&a.i<=t.i&&a.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let i=0,a=e.length;i<a;i+=1){const c=e[i];if(c>99&&c<J||c>K)return null;c>31&&(s+=1),c>12&&(t+=1),c<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[i,a]=t[n];if(J<=i&&i<=K){const c=this.mapIntegersToDayMonth(a);return c!=null?{year:i,month:c.month,day:c.day}:null}}for(let n=0;n<s;n+=1){const[i,a]=t[n],c=this.mapIntegersToDayMonth(a);if(c!=null)return{year:this.twoToFourDigitYear(i),month:c.month,day:c.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],i=n[0],a=n[1];if(i>=1&&i<=31&&a>=1&&a<=12)return{day:i,month:a}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const w=new Uint32Array(65536),He=(r,e)=>{const t=r.length,s=e.length,n=1<<t-1;let i=-1,a=0,c=t,o=t;for(;o--;)w[r.charCodeAt(o)]|=1<<o;for(o=0;o<s;o++){let l=w[e.charCodeAt(o)];const h=l|a;l|=(l&i)+i^i,a|=~(l|i),i&=l,a&n&&c++,i&n&&c--,a=a<<1|1,i=i<<1|~(h|a),a&=h}for(o=t;o--;)w[r.charCodeAt(o)]=0;return c},Be=(r,e)=>{const t=e.length,s=r.length,n=[],i=[],a=Math.ceil(t/32),c=Math.ceil(s/32);for(let d=0;d<a;d++)i[d]=-1,n[d]=0;let o=0;for(;o<c-1;o++){let d=0,b=-1;const v=o*32,y=Math.min(32,s)+v;for(let g=v;g<y;g++)w[r.charCodeAt(g)]|=1<<g;for(let g=0;g<t;g++){const k=w[e.charCodeAt(g)],x=i[g/32|0]>>>g&1,S=n[g/32|0]>>>g&1,z=k|d,Y=((k|S)&b)+b^b|k|S;let C=d|~(Y|b),L=b&Y;C>>>31^x&&(i[g/32|0]^=1<<g),L>>>31^S&&(n[g/32|0]^=1<<g),C=C<<1|x,L=L<<1|S,b=L|~(z|C),d=C&z}for(let g=v;g<y;g++)w[r.charCodeAt(g)]=0}let l=0,h=-1;const f=o*32,p=Math.min(32,s-f)+f;for(let d=f;d<p;d++)w[r.charCodeAt(d)]|=1<<d;let m=s;for(let d=0;d<t;d++){const b=w[e.charCodeAt(d)],v=i[d/32|0]>>>d&1,y=n[d/32|0]>>>d&1,g=b|l,k=((b|y)&h)+h^h|b|y;let x=l|~(k|h),S=h&k;m+=x>>>s-1&1,m-=S>>>s-1&1,x>>>31^v&&(i[d/32|0]^=1<<d),S>>>31^y&&(n[d/32|0]^=1<<d),x=x<<1|v,S=S<<1|y,h=S|~(g|x),l=x&g}for(let d=f;d<p;d++)w[r.charCodeAt(d)]=0;return m},Ze=(r,e)=>{if(r.length<e.length){const t=e;e=r,r=t}return e.length===0?r.length:r.length<=32?He(r,e):Be(r,e)},Xe=(r,e,t)=>{const s=r.length<=e.length,n=r.length<=t;return s||n?Math.ceil(r.length/4):t},Ke=(r,e,t)=>{let s=0;const n=Object.keys(e).find(i=>{const a=Xe(r,i,t);if(Math.abs(r.length-i.length)>a)return!1;const c=Ze(r,i),o=c<=a;return o&&(s=c),o});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var Q={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},N={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class P{constructor(e=[]){this.parents=e,this.children=new Map}addSub(e,...t){const s=e.charAt(0);this.children.has(s)||this.children.set(s,new P([...this.parents,s]));let n=this.children.get(s);for(let i=1;i<e.length;i+=1){const a=e.charAt(i);n.hasChild(a)||n.addChild(a),n=n.getChild(a)}return n.subs=(n.subs||[]).concat(t),this}getChild(e){return this.children.get(e)}isTerminal(){return!!this.subs}addChild(e){this.hasChild(e)||this.children.set(e,new P([...this.parents,e]))}hasChild(e){return this.children.has(e)}}var ee=(r,e)=>(Object.entries(r).forEach(([t,s])=>{s.forEach(n=>{e.addSub(n,t)})}),e);class Je{constructor(){this.matchers={},this.l33tTable=Q,this.trieNodeRoot=ee(Q,new P),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=N,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable,this.trieNodeRoot=ee(e.l33tTable,new P)),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold),e.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),e.maxLength!==void 0&&(this.maxLength=e.maxLength)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(N).forEach(s=>{if(s in e){const n=s;Object.keys(N[n]).forEach(i=>{i in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach(s=>{e[s]=X(this.dictionary[s]),t[s]=this.getRankedDictionariesMaxWordSize(this.dictionary[s])}),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=e.map(s=>typeof s!="string"?s.toString().length:s.length);return t.length===0?0:t.reduce((s,n)=>Math.max(s,n),-1/0)}buildSanitizedRankedDictionary(e){const t=[];return e.forEach(s=>{const n=typeof s;(n==="string"||n==="number"||n==="boolean")&&t.push(s.toString().toLowerCase())}),X(t)}extendUserInputsDictionary(e){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...e];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(e,t){this.matchers[e]?console.info(`Matcher ${e} already exists`):this.matchers[e]=t}}const u=new Je;class Qe{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>A(E({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class et{constructor({substr:e,limit:t,trieRoot:s}){this.buffer=[],this.finalPasswords=[],this.substr=e,this.limit=t,this.trieRoot=s}getAllPossibleSubsAtIndex(e){const t=[];let s=this.trieRoot;for(let n=e;n<this.substr.length;n+=1){const i=this.substr.charAt(n);if(s=s.getChild(i),!s)break;t.push(s)}return t}helper({onlyFullSub:e,isFullSub:t,index:s,subIndex:n,changes:i,lastSubLetter:a,consecutiveSubCount:c}){if(this.finalPasswords.length>=this.limit)return;if(s===this.substr.length){e===t&&this.finalPasswords.push({password:this.buffer.join(""),changes:i});return}const o=[...this.getAllPossibleSubsAtIndex(s)];let l=!1;for(let h=s+o.length-1;h>=s;h-=1){const f=o[h-s];if(f.isTerminal()){if(a===f.parents.join("")&&c>=3)continue;l=!0;const p=f.subs;for(const m of p){this.buffer.push(m);const d=i.concat({i:n,letter:m,substitution:f.parents.join("")});if(this.helper({onlyFullSub:e,isFullSub:t,index:h+1,subIndex:n+m.length,changes:d,lastSubLetter:f.parents.join(""),consecutiveSubCount:a===f.parents.join("")?c+1:1}),this.buffer.pop(),this.finalPasswords.length>=this.limit)return}}}if(!e||!l){const h=this.substr.charAt(s);this.buffer.push(h),this.helper({onlyFullSub:e,isFullSub:t&&!l,index:s+1,subIndex:n+1,changes:i,lastSubLetter:a,consecutiveSubCount:c}),this.buffer.pop()}}getAll(){return this.helper({onlyFullSub:!0,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.helper({onlyFullSub:!1,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.finalPasswords}}const tt=(r,e,t)=>new et({substr:r,limit:e,trieRoot:t}).getAll(),st=(r,e,t)=>{const n=r.changes.filter(l=>l.i<e).reduce((l,h)=>l-h.letter.length+h.substitution.length,e),i=r.changes.filter(l=>l.i>=e&&l.i<=t),a=i.reduce((l,h)=>l-h.letter.length+h.substitution.length,t-e+n),c=[],o=[];return i.forEach(l=>{c.findIndex(f=>f.letter===l.letter&&f.substitution===l.substitution)<0&&(c.push({letter:l.letter,substitution:l.substitution}),o.push(`${l.substitution} -> ${l.letter}`))}),{i:n,j:a,subs:c,subDisplay:o.join(", ")}};class nt{constructor(e){this.defaultMatch=e}isAlreadyIncluded(e,t){return e.some(s=>Object.entries(s).every(([n,i])=>n==="subs"||i===t[n]))}match({password:e}){const t=[],s=tt(e,u.l33tMaxSubstitutions,u.trieNodeRoot);let n=!1,i=!0;return s.forEach(a=>{if(n)return;const c=this.defaultMatch({password:a.password,useLevenshtein:i});i=!1,c.forEach(o=>{n||(n=o.i===0&&o.j===e.length-1);const l=st(a,o.i,o.j),h=e.slice(l.i,+l.j+1||9e9),f=E(A(E({},o),{l33t:!0,token:h}),l),p=this.isAlreadyIncluded(t,f);h.toLowerCase()!==o.matchedWord&&!p&&t.push(f)})}),t.filter(a=>a.token.length>1)}}class rt{constructor(){this.l33t=new nt(this.defaultMatch),this.reverse=new Qe(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return I(t)}defaultMatch({password:e,useLevenshtein:t=!0}){const s=[],n=e.length,i=e.toLowerCase();return Object.keys(u.rankedDictionaries).forEach(a=>{const c=u.rankedDictionaries[a],o=u.rankedDictionariesMaxWordSize[a],l=Math.min(o,n);for(let h=0;h<n;h+=1){const f=Math.min(h+l,n);for(let p=h;p<f;p+=1){const m=i.slice(h,+p+1||9e9),d=m in c;let b={};const v=h===0&&p===n-1;u.useLevenshteinDistance&&v&&!d&&t&&(b=Ke(m,c,u.levenshteinThreshold));const y=Object.keys(b).length!==0;if(d||y){const g=y?b.levenshteinDistanceEntry:m,k=c[g];s.push(E({pattern:"dictionary",i:h,j:p,token:e.slice(h,+p+1||9e9),matchedWord:m,rank:k,dictionaryName:a,reversed:!1,l33t:!1},b))}}}}),s}}class it{match({password:e,regexes:t=Ve}){const s=[];return Object.keys(t).forEach(n=>{const i=t[n];i.lastIndex=0;let a;for(;a=i.exec(e);)if(a){const c=a[0];s.push({pattern:"regex",token:c,i:a.index,j:a.index+a[0].length-1,regexName:n,regexMatch:a})}}),I(s)}}var T={nCk(r,e){let t=r;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(r){return r===0?0:Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let e=1;for(let t=2;t<=r;t+=1)e*=t;return e}},at=({token:r})=>{let e=D(je,r.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return r.length===1?t=re+1:t=ie+1,Math.max(e,t)},ot=({year:r,separator:e})=>{let s=Math.max(Math.abs(r-G),ae)*365;return e&&(s*=4),s};const ct=r=>{const e=r.split(""),t=e.filter(a=>a.match(ze)).length,s=e.filter(a=>a.match(Ge)).length;let n=0;const i=Math.min(t,s);for(let a=1;a<=i;a+=1)n+=T.nCk(t+s,a);return n};var lt=r=>{const e=r.replace(Ye,"");if(e.match(We)||e.toLowerCase()===e)return 1;const t=[oe,Ne,ce],s=t.length;for(let n=0;n<s;n+=1){const i=t[n];if(e.match(i))return 2}return ct(e)};const te=(r,e)=>{let t=0,s=r.indexOf(e);for(;s>=0;)t+=1,s=r.indexOf(e,s+e.length);return t},ht=({sub:r,token:e})=>{const t=e.toLowerCase(),s=te(t,r.substitution),n=te(t,r.letter);return{subbedCount:s,unsubbedCount:n}};var ut=({l33t:r,subs:e,token:t})=>{if(!r)return 1;let s=1;return e.forEach(n=>{const{subbedCount:i,unsubbedCount:a}=ht({sub:n,token:t});if(i===0||a===0)s*=2;else{const c=Math.min(a,i);let o=0;for(let l=1;l<=c;l+=1)o+=T.nCk(a+i,l);s*=o}}),s},dt=({rank:r,reversed:e,l33t:t,subs:s,token:n,dictionaryName:i})=>{const a=r,c=lt(n),o=ut({l33t:t,subs:s,token:n}),l=e&&2||1;let h;return i==="diceware"?h=D(6,5)/2:h=a*c*o*l,{baseGuesses:a,uppercaseVariations:c,l33tVariations:o,calculation:h}},ft=({regexName:r,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return D(s[r],t.length);switch(r){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-G),ae)}return 0},gt=({baseGuesses:r,repeatCount:e})=>r*e,pt=({token:r,ascending:e})=>{const t=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*r.length};const mt=r=>{let e=0;return Object.keys(r).forEach(t=>{const s=r[t];e+=s.filter(n=>!!n).length}),e/=Object.entries(r).length,e},bt=({token:r,graph:e,turns:t})=>{const s=Object.keys(u.graphs[e]).length,n=mt(u.graphs[e]);let i=0;const a=r.length;for(let c=2;c<=a;c+=1){const o=Math.min(t,c-1);for(let l=1;l<=o;l+=1)i+=T.nCk(c-1,l-1)*s*D(n,l)}return i};var Mt=({graph:r,token:e,shiftedCount:t,turns:s})=>{let n=bt({token:e,graph:r,turns:s});if(t){const i=e.length-t;if(t===0||i===0)n*=2;else{let a=0;for(let c=1;c<=Math.min(t,i);c+=1)a+=T.nCk(t+i,c);n*=a}}return Math.round(n)},yt=()=>qe;const xt=(r,e)=>{let t=1;return r.token.length<e.length&&(r.token.length===1?t=re:t=ie),t},se={bruteforce:at,date:ot,dictionary:dt,regex:ft,repeat:gt,sequence:pt,spatial:Mt,separator:yt},kt=(r,e)=>se[r]?se[r](e):u.matchers[r]&&"scoring"in u.matchers[r]?u.matchers[r].scoring(e):0;var Et=(r,e)=>{const t={};if("guesses"in r&&r.guesses!=null)return r;const s=xt(r,e),n=kt(r.pattern,r);let i=0;typeof n=="number"?i=n:r.pattern==="dictionary"&&(i=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const a=Math.max(i,s);return A(E(E({},r),t),{guesses:a,guessesLog10:T.log10(a)})};const M={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(r,e){const t=[];for(let s=0;s<r;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(r,e){return{pattern:"bruteforce",token:this.password.slice(r,+e+1||9e9),i:r,j:e}},update(r,e){const t=r.j,s=Et(r,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let i=T.factorial(e)*n;this.excludeAdditive||(i+=D(_e,e-1));let a=!1;Object.keys(this.optimal.g[t]).forEach(c=>{const o=this.optimal.g[t][c];parseInt(c,10)<=e&&o<=i&&(a=!0)}),a||(this.optimal.g[t][e]=i,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(r){let e=this.makeBruteforceMatch(0,r);this.update(e,1);for(let t=1;t<=r;t+=1){e=this.makeBruteforceMatch(t,r);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(r){const e=[];let t=r-1,s=0,n=1/0;const i=this.optimal.g[t];for(i&&Object.keys(i).forEach(a=>{const c=i[a];c<n&&(s=parseInt(a,10),n=c)});t>=0;){const a=this.optimal.m[t][s];e.unshift(a),t=a.i-1,s-=1}return e}};var W={mostGuessableMatchSequence(r,e,t=!1){M.password=r,M.excludeAdditive=t;const s=r.length;let n=M.fillArray(s,"array");e.forEach(o=>{n[o.j].push(o)}),n=n.map(o=>o.sort((l,h)=>l.i-h.i)),M.optimal={m:M.fillArray(s,"object"),pi:M.fillArray(s,"object"),g:M.fillArray(s,"object")};for(let o=0;o<s;o+=1)n[o].forEach(l=>{l.i>0?Object.keys(M.optimal.m[l.i-1]).forEach(h=>{M.update(l,parseInt(h,10)+1)}):M.update(l,1)}),M.bruteforceUpdate(o);const i=M.unwind(s),a=i.length,c=this.getGuesses(r,a);return{password:r,guesses:c,guessesLog10:T.log10(c),sequence:i}},getGuesses(r,e){const t=r.length;let s=0;return r.length===0?s=1:s=M.optimal.g[t-1][e],s}};class vt{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const a=this.getGreedyMatch(e,n),c=this.getLazyMatch(e,n);if(a==null)break;const{match:o,baseToken:l}=this.setMatchToken(a,c);if(o){const h=o.index+o[0].length-1,f=this.getBaseGuesses(l,t);s.push(this.normalizeMatch(l,h,o,f)),n=h+1}}return s.some(a=>a instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const i={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(a=>A(E({},i),{baseGuesses:a})):A(E({},i),{baseGuesses:n})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,i="";if(t&&e[0].length>t[0].length){n=e;const a=s.exec(n[0]);a&&(i=a[1])}else n=t,n&&(i=n[1]);return{match:n,baseToken:i}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(i=>W.mostGuessableMatchSequence(e,i).guesses):W.mostGuessableMatchSequence(e,s).guesses}}class St{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const i=e.length;for(let a=1;a<i;a+=1){const c=e.charCodeAt(a)-e.charCodeAt(a-1);if(n==null&&(n=c),c!==n){const o=a-1;this.update({i:s,j:o,delta:n,password:e,result:t}),s=o,n=c}}return this.update({i:s,j:i-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:i}){if(t-e>1||Math.abs(s)===1){const a=Math.abs(s);if(a>0&&a<=this.MAX_DELTA){const c=n.slice(e,+t+1||9e9),{sequenceName:o,sequenceSpace:l}=this.getSequence(c);return i.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:o,sequenceSpace:l,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return Ue.test(e)?(t="lower",s=26):Oe.test(e)?(t="upper",s=26):$e.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class wt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(u.graphs).forEach(s=>{const n=u.graphs[s];U(t,this.helper(e,n,s))}),I(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const i=[];let a=0;const c=e.length;for(;a<c-1;){let o=a+1,l=null,h=0;for(n=this.checkIfShifted(s,e,a);;){const f=e.charAt(o-1),p=t[f]||[];let m=!1,d=-1,b=-1;if(o<c){const v=e.charAt(o),y=p.length;for(let g=0;g<y;g+=1){const k=p[g];if(b+=1,k){const x=k.indexOf(v);if(x!==-1){m=!0,d=b,x===1&&(n+=1),l!==d&&(h+=1,l=d);break}}}}if(m)o+=1;else{o-a>2&&i.push({pattern:"spatial",i:a,j:o-1,token:e.slice(a,o),graph:s,turns:h,shiftedCount:n}),a=o;break}}}return i}}const At=new RegExp(`[${le.join("")}]`);class j{static getMostUsedSeparatorChar(e){const t=[...e.split("").filter(n=>At.test(n)).reduce((n,i)=>{const a=n.get(i);return a?n.set(i,a+1):n.set(i,1),n},new Map).entries()].sort(([n,i],[a,c])=>c-i);if(!t.length)return;const s=t[0];if(!(s[1]<2))return s[0]}static getSeparatorRegex(e){return new RegExp(`([^${e}
])(${e})(?!${e})`,"g")}match({password:e}){const t=[];if(e.length===0)return t;const s=j.getMostUsedSeparatorChar(e);if(s===void 0)return t;const n=j.getSeparatorRegex(s);for(const i of e.matchAll(n)){if(i.index===void 0)continue;const a=i.index+1;t.push({pattern:"separator",token:s,i:a,j:a})}return t}}class Tt{constructor(){this.matchers={date:Fe,dictionary:rt,regex:it,repeat:vt,sequence:St,spatial:wt,separator:j}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(u.matchers)].forEach(i=>{if(!this.matchers[i]&&!u.matchers[i])return;const a=this.matchers[i]?this.matchers[i]:u.matchers[i].Matching,o=new a().match({password:e,omniMatch:this});o instanceof Promise?(o.then(l=>{U(t,l)}),s.push(o)):U(t,o)}),s.length>0?new Promise((i,a)=>{Promise.all(s).then(()=>{i(I(t))}).catch(c=>{a(c)})}):I(t)}}const he=1,ue=he*60,de=ue*60,fe=de*24,ge=fe*31,pe=ge*12,Dt=pe*100,O={second:he,minute:ue,hour:de,day:fe,month:ge,year:pe,century:Dt};class It{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=u.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const i=t[n];s[n]=this.displayTime(i)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(O),i=n.findIndex(a=>e<O[a]);return i>-1&&(t=n[i-1],i!==0?s=Math.round(e/O[t]):t="ltSecond"),this.translate(t,s)}}var Ct=()=>null,Rt=()=>({warning:u.translations.warnings.dates,suggestions:[u.translations.suggestions.dates]});const Pt=(r,e)=>{let t=null;return e&&!r.l33t&&!r.reversed?r.rank<=10?t=u.translations.warnings.topTen:r.rank<=100?t=u.translations.warnings.topHundred:t=u.translations.warnings.common:r.guessesLog10<=4&&(t=u.translations.warnings.similarToCommon),t},Lt=(r,e)=>{let t=null;return e&&(t=u.translations.warnings.wordByItself),t},jt=(r,e)=>e?u.translations.warnings.namesByThemselves:u.translations.warnings.commonNames,_t=(r,e)=>{let t=null;const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=Pt(r,e):s.includes("wikipedia")?t=Lt(r,e):n?t=jt(r,e):s==="userInputs"&&(t=u.translations.warnings.userInputs),t};var Nt=(r,e)=>{const t=_t(r,e),s=[],n=r.token;return n.match(oe)?s.push(u.translations.suggestions.capitalization):n.match(ce)&&n.toLowerCase()!==n&&s.push(u.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(u.translations.suggestions.reverseWords),r.l33t&&s.push(u.translations.suggestions.l33t),{warning:t,suggestions:s}},Ot=r=>r.regexName==="recentYear"?{warning:u.translations.warnings.recentYears,suggestions:[u.translations.suggestions.recentYears,u.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},Ut=r=>{let e=u.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(e=u.translations.warnings.simpleRepeat),{warning:e,suggestions:[u.translations.suggestions.repeated]}},Wt=()=>({warning:u.translations.warnings.sequences,suggestions:[u.translations.suggestions.sequences]}),Gt=r=>{let e=u.translations.warnings.keyPattern;return r.turns===1&&(e=u.translations.warnings.straightRow),{warning:e,suggestions:[u.translations.suggestions.longerKeyboardPattern]}},zt=()=>null;const ne={warning:null,suggestions:[]};class Yt{constructor(){this.matchers={bruteforce:Ct,date:Rt,dictionary:Nt,regex:Ot,repeat:Ut,sequence:Wt,spatial:Gt,separator:zt},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(u.translations.suggestions.useWords,u.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return ne;const s=u.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let i=this.getMatchFeedback(n,t.length===1);return i!=null?i.suggestions.unshift(s):i={warning:null,suggestions:[s]},i}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):u.matchers[e.pattern]&&"feedback"in u.matchers[e.pattern]?u.matchers[e.pattern].feedback(e,t):ne}}const me=()=>new Date().getTime(),$t=(r,e,t)=>{const s=new Yt,n=new It,i=W.mostGuessableMatchSequence(e,r),a=me()-t,c=n.estimateAttackTimes(i.guesses);return A(E(E({calcTime:a},i),c),{feedback:s.getFeedback(c.score,i.sequence)})},Vt=(r,e)=>(e&&u.extendUserInputsDictionary(e),new Tt().match(r)),qt=(r,e)=>{const t=me(),s=Vt(r,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return $t(s,r,t)},Ft=["data-score"],Ht=ve({__name:"InputPassword",props:{strength:q.bool.def(!1),modelValue:q.string.def("")},emits:["update:modelValue"],setup(r,{emit:e}){const t=r;F(()=>t.modelValue,o=>{o!==R(a)&&(a.value=o)});const{configGlobal:s}=Re(),n=e,i=H("password"),a=H(t.modelValue);F(()=>a.value,o=>{n("update:modelValue",o)});const c=Se(()=>{const o=R(a),l=qt(R(a));return o?l.score:-1});return(o,l)=>{var h;return B(),Z("div",{class:_(["input-password",`input-password--${(h=R(s))==null?void 0:h.size}`])},[we(R(Ie),Ae(o.$attrs,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=f=>a.value=f),showPassword:"",type:i.value}),null,16,["modelValue","type"]),r.strength?(B(),Z("div",{key:0,class:_(["input-password__bar","relative h-6px mt-10px mb-6px mr-auto ml-auto"])},[Te("div",{class:_("input-password__bar--fill"),"data-score":c.value},null,8,Ft)])):De("",!0)],2)}}}),Qt=Ce(Ht,[["__scopeId","data-v-32d8d5a7"]]);export{Qt as I};