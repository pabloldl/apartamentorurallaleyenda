'use strict';
document.documentElement.classList.add('js');
document.getElementById('year').textContent=new Date().getFullYear();
const photos=[...document.querySelectorAll('.gallery-item')];
const dialog=document.querySelector('.lightbox');
const large=document.getElementById('large-photo');
let current=0,opener=null;
function showPhoto(index){current=(index+photos.length)%photos.length;const photo=photos[current];large.src=photo.href;large.alt=photo.querySelector('img').alt;document.getElementById('photo-count').textContent=`${current+1} / ${photos.length}`;document.getElementById('photo-caption').textContent=photo.dataset.caption;}
if(typeof dialog.showModal==='function'){
photos.forEach((photo,index)=>photo.addEventListener('click',event=>{event.preventDefault();opener=photo;showPhoto(index);dialog.showModal();dialog.querySelector('.close').focus();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.querySelector('.previous').addEventListener('click',()=>showPhoto(current-1));
dialog.querySelector('.next').addEventListener('click',()=>showPhoto(current+1));
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();showPhoto(current+1);}if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(current-1);}});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>opener?.focus({preventScroll:true}));
let startX=0,startY=0;
large.addEventListener('touchstart',event=>{startX=event.changedTouches[0].clientX;startY=event.changedTouches[0].clientY;},{passive:true});
large.addEventListener('touchend',event=>{const dx=event.changedTouches[0].clientX-startX,dy=event.changedTouches[0].clientY-startY;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)showPhoto(current+(dx<0?1:-1));},{passive:true});
}
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('pending');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('pending');observer.observe(el);});}
