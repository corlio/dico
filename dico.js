$.setup=function(){function m(a){a?($.dom.show(k),$.dom.hide(p)):($.dom.show(p),$.dom.hide(k))}function v(a){let b=c[c.length-1],d=b[a].toLowerCase();$.dom.hidden(h)||n!==a?($.dom.text(q,b[a]),$.dom.attr("larousse","href","https://www.larousse.fr/dictionnaires/francais/"+d),$.dom.attr("wiktionary","href","https://fr.wiktionary.org/w/index.php?search="+d),$.dom.show(h),n=a,window.scrollTo(0,0)):$.dom.hide(h)}function w(a,b){return b.split(a).length-1}function A(){let a,b=c[c.length-1];$.dom.empty(r);
for(let d=0;d<b.length&&100>d;d++)a=$.dom.create("li"),$.dom.text(a,b[d]),$.dom.on(a,"click",()=>v(d)),$.dom.append(r,a)}function g(){$.dom.text(x,c[c.length-1].length);A()}function B(a){let b=c[c.length-1];0===a?c.push(b.filter(d=>2<d.length&&10>d.length)):c.push(b.filter(d=>d.length===a));g()}function C(a){c.push(c[c.length-1].filter(b=>b.length>a));g()}function D(a){c.push(c[c.length-1].filter(b=>b.length<a));g()}function E(a){let b=c[c.length-1],d=w(a,f.value.toUpperCase());c.push(b.filter(e=>
w(a,e)>=d));g()}function F(a){c.push(c[c.length-1].filter(b=>!b.includes(a)));g()}function G(){let a=c.length-1;var b=f.value;let d=[];var e;b.endsWith("?")&&(m(!0),f.value=b=b.replace(/\?+$/,""));for(;b.length;)if(e=b.match(/^([0-9]|[<>][1-9]|[A-Z]|![A-Z])(.*)$/i))d.push(e[1].toUpperCase()),b=e[2];else{f.value=d.join("")+b;break}e=d.length;$.dom.hide(h);if(a>e)for(;a>e;)c.pop(),g(),a--;else if(e>a)for(;e>a;)if(b=d[a],b.match(/^[0-9]$/))B(parseInt(b,10)),a++;else if(b.match(/^>[1-9]$/))C(parseInt(b.substring(1),
10)),a++;else if(b.match(/^<[1-9]$/))D(parseInt(b.substring(1),10)),a++;else if(b.match(/^[A-Z]$/))E(b),a++;else if(b.match(/^![A-Z]$/))F(b.substring(1)),a++;else{console.error("unexpected spec: %s",b);break}}function y(a){let b,d=[],e="",t;a.split(/\n/).forEach(function(u){u.length&&(b=parseInt(u.substring(0,1),16),t=e.substring(0,b)+u.substring(1),d.push(t),e=t)});c=[d];g()}function z(a){a.ok?a.text().then(function(b){l&&l.setItem("dico",LZString.compressToUTF16(b));y(b)}):console.error("GET failed: %s",
a.statusText)}var x,c,k,f,r,p,h,n,l,q;return function(){x=$.dom.get("count");k=$.dom.get("help");f=$.dom.get("input");r=$.dom.get("list");p=$.dom.get("main");h=$.dom.get("search");m(!1);$.dom.hide(h);n=-1;q=$.dom.get("word");"undefined"!==typeof localStorage&&(l=localStorage);if(l){let a=window.location.search?null:l.getItem("dico");a?y(LZString.decompressFromUTF16(a)):fetch("dico.text").then(z)}else fetch("dico.text").then(z);$.dom.on(f,"keyup",G);$.dom.on(f,"submit",a=>console.log(a));$.dom.on(q,
"click",()=>v(n));$.dom.on(k,"click",()=>m(!1));$.dom.on(k,"keyup",()=>m(!1));f.focus()}}();
