(function(){
var bg=document.querySelector('.burger'),nv=document.getElementById('menu');
if(bg&&nv){var sc=document.createElement('div');sc.className='scrim';document.body.appendChild(sc);
function tog(o){nv.classList.toggle('open',o);sc.classList.toggle('on',o);document.body.classList.toggle('lock',o);bg.setAttribute('aria-expanded',o)}
bg.onclick=function(){tog(true)};sc.onclick=function(){tog(false)};nv.querySelector('.x').onclick=function(){tog(false)};
nv.addEventListener('click',function(e){if(e.target.tagName==='A')tog(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')tog(false)});
window.addEventListener('resize',function(){if(innerWidth>900)tog(false)})}
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
var q=document.getElementById('cq');
if(q){var it=[].slice.call(document.querySelectorAll('.ci')),cn=document.getElementById('cn');
var up=function(){var v=q.value.trim().toLowerCase(),n=0;it.forEach(function(e){var m=!v||e.textContent.toLowerCase().indexOf(v)>-1;e.hidden=!m;if(m)n++});cn.textContent=n?n+' countries':'No match. Ask us on WhatsApp, we may still be able to help.'};
q.addEventListener('input',up);up()}
var f=document.getElementById('enq');
if(f){var t=function(){var d=new FormData(f);return 'Enquiry from website\nName: '+d.get('name')+'\nPhone: '+d.get('phone')+'\nNeed: '+d.get('visa')+'\nCountry: '+(d.get('country')||'-')+'\nMessage: '+(d.get('msg')||'-')};
f.addEventListener('submit',function(e){e.preventDefault();window.open('https://wa.me/918930611883?text='+encodeURIComponent(t()),'_blank')});
var m=document.getElementById('mail');if(m)m.addEventListener('click',function(e){e.preventDefault();if(!f.reportValidity())return;location.href='mailto:lincolninternationalconsultancy@gmail.com?subject='+encodeURIComponent('Website enquiry')+'&body='+encodeURIComponent(t())})}
})();
