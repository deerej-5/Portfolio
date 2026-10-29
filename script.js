(function(){
var $=function(i){return document.getElementById(i)};
var f=function(x){return '₹'+Math.round(x).toLocaleString('en-IN')};
function calc(){
  var V=+$('v').value,n=+$('n').value,d=+$('d').value/100;
  var inst=V/n,disc=V*d,div=Math.max(0,disc-V*0.05)/n;
  $('nl').textContent=n+' months';$('dl').textContent=Math.round(d*100)+'%';
  $('r1').textContent=f(inst);$('r2').textContent=f(div);$('r3').textContent=f(V-disc);$('r4').textContent=f(inst-div);
}
['v','n','d'].forEach(function(i){$(i).addEventListener('input',calc)});
calc();
})();
