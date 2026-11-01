// Add new production projects here. Replace image paths with original exported images when ready.
const projects = [
  {slug:'chewy',name:'Chewy',type:'BRAND CAMPAIGNS / E-COMMERCE',image:'assets/chewy.webp',description:'Seasonal campaigns, pet lifestyle creative, digital promotions, product imagery, and e-commerce work.'},
  {slug:'humana',name:'Humana',type:'HEALTHCARE / DIGITAL CAMPAIGNS',image:'assets/humana.webp',description:'Healthcare marketing and educational content across CenterWell, Conviva, and related initiatives.'},
  {slug:'pens',name:'Pens.com',type:'PROMOTIONAL PRODUCTS / E-COMMERCE',image:'assets/pens.webp',description:'Branded merchandise, promotional product photography, digital merchandising, and seasonal campaigns.'},
  {slug:'office',name:'Office Depot',type:'B2B / LIFESTYLE CAMPAIGNS',image:'assets/office.webp',description:'ODP Business Solutions marketing featuring workplace lifestyle, breakroom, and facilities imagery.'},
  {slug:'dirty',name:'dirty sugar',type:'PORTRAITURE / BRANDING',image:'assets/dirty.webp',description:'Professional headshots, studio portraiture, and personal branding photography. More work coming soon.'},
  {slug:'similac',name:'Similac',type:'LIFESTYLE / PRODUCT CAMPAIGNS',image:'assets/similac.webp',description:'Warm family-centered lifestyle, product, and digital campaign imagery.'}
];
const grid=document.querySelector('#projects');
grid.innerHTML=projects.map((p,i)=>`<a class="project-card" href="#project/${p.slug}" aria-label="View ${p.name} project"><div class="project-visual"><img src="${p.image}" alt="Preview collage of ${p.name} portfolio work" loading="${i<2?'eager':'lazy'}"></div><div class="project-meta"><strong>${p.name}</strong><span>${p.type}</span></div></a>`).join('');
const views=[...document.querySelectorAll('[data-view]')];
const nav=document.querySelector('#nav');
const toggle=document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
function render(){
 const hash=decodeURIComponent(location.hash.slice(1))||'home';const [section,slug]=hash.split('/');let view=['home','photography','about','contact'].includes(section)?section:'home';
 if(section==='project'&&projects.some(p=>p.slug===slug)){
   view='project';const p=projects.find(p=>p.slug===slug);
   document.querySelector('#project-detail').innerHTML=`<div class="detail-head"><span class="eyebrow">${p.type}</span><h1>${p.name}<span class="dot">.</span></h1><p>${p.description}</p></div><div class="detail-image"><img src="${p.image}" alt="${p.name} work overview"></div><p class="detail-note">PROTOTYPE IMAGE: This is a cropped screenshot from the existing portfolio. We'll replace it with individual, high-resolution project images and any approved credits or descriptions.</p>`;
 }
 views.forEach(v=>v.hidden=v.id!==view);nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');window.scrollTo(0,0);
 document.title=(view==='project'?projects.find(p=>p.slug===slug)?.name:view==='home'?'Creative Production':view[0].toUpperCase()+view.slice(1))+' — Jenna Nabridge';
}
window.addEventListener('hashchange',render);render();document.querySelector('#year').textContent=new Date().getFullYear();
// Avoid accidentally emailing a fake address.
document.querySelector('[data-placeholder-email]').addEventListener('click',e=>{e.preventDefault();alert('Before publishing: add your real contact email address in index.html.');});
