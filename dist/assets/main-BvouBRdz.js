(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();document.addEventListener("DOMContentLoaded",function(){m(),u(),p(),g(),v()});function m(){const e=document.querySelector(".mobile-menu-btn"),t=document.querySelector(".nav-mobile"),o=document.querySelectorAll(".nav-mobile .nav-link");e&&t&&(e.addEventListener("click",function(){t.classList.toggle("active");const n=e.querySelectorAll("span");t.classList.contains("active")?(n[0].style.transform="rotate(45deg) translate(5px, 5px)",n[1].style.opacity="0",n[2].style.transform="rotate(-45deg) translate(7px, -6px)"):(n[0].style.transform="none",n[1].style.opacity="1",n[2].style.transform="none")}),o.forEach(n=>{n.addEventListener("click",function(){t.classList.remove("active");const i=e.querySelectorAll("span");i[0].style.transform="none",i[1].style.opacity="1",i[2].style.transform="none"})}))}function u(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(function(n){n.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),i.target.classList.contains("skill-item")&&f(i.target))})},e);document.querySelectorAll(`
        .feature-card,
        .service-card,
        .project-card,
        .testimonial-card,
        .skill-item,
        .stat-card,
        .philosophy-item,
        .timeline-item,
        .faq-item,
        .contact-method,
        .value-card,
        .expertise-card
    `).forEach(n=>{n.classList.add("fade-in-up"),t.observe(n)})}function f(e){const t=e.querySelector(".skill-progress");if(t){const o=t.getAttribute("data-width");setTimeout(()=>{t.style.width=o},200)}}function p(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",function(t){t.preventDefault();const o=new FormData(e),n=Object.fromEntries(o);if(!n.name||!n.email||!n.message){alert("Please fill in all required fields.");return}if(!y(n.email)){alert("Please enter a valid email address.");return}h(n)})}function y(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function h(e){const t=encodeURIComponent(`New Project Inquiry from ${e.name}`);let o=`Hi Josh,

`;o+=`I'm interested in working with you on a project. Here are the details:

`,o+=`Name: ${e.name}
`,o+=`Email: ${e.email}
`,e.company&&(o+=`Company: ${e.company}
`),e.phone&&(o+=`Phone: ${e.phone}
`),e["project-type"]&&(o+=`Project Type: ${e["project-type"]}
`),e.budget&&(o+=`Budget Range: ${e.budget}
`),e.timeline&&(o+=`Timeline: ${e.timeline}
`),e.referral&&(o+=`How I heard about you: ${e.referral}
`),o+=`
Project Details:
${e.message}

`,o+=`Looking forward to hearing from you!

`,o+=`Best regards,
${e.name}`;const n=encodeURIComponent(o),i=`mailto:josh.wiersema06@gmail.com?subject=${t}&body=${n}`;window.location.href=i}function g(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(o){const n=this.getAttribute("href");if(n==="#")return;const i=document.querySelector(n);if(i){o.preventDefault();const r=document.querySelector(".header").offsetHeight,s=i.offsetTop-r-20;window.scrollTo({top:s,behavior:"smooth"})}})})}function v(){document.querySelectorAll(".vine-hover").forEach(t=>{t.addEventListener("mouseenter",function(){this.classList.add("vine-active")}),t.addEventListener("mouseleave",function(){this.classList.remove("vine-active")})})}window.addEventListener("scroll",function(){const e=document.querySelector(".header");e&&(window.scrollY>100?(e.style.background="rgba(254, 254, 254, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)"):(e.style.background="rgba(254, 254, 254, 0.95)",e.style.boxShadow="none"))});function b(e,t){let o;return function(){const n=arguments,i=this;o||(e.apply(i,n),o=!0,setTimeout(()=>o=!1,t))}}const x=b(function(){},16);window.addEventListener("scroll",x);function L(){document.querySelectorAll("img").forEach(t=>{t.addEventListener("load",function(){this.classList.add("loaded")}),t.complete&&t.classList.add("loaded")})}L();const c=document.createElement("style");c.textContent=`
    img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    img.loaded {
        opacity: 1;
    }
    
    .vine-active::before,
    .vine-active::after {
        animation: vineGrow 0.6s ease-out forwards;
    }
    
    @keyframes vineGrow {
        0% {
            transform: scale(0) rotate(-45deg);
            opacity: 0;
        }
        50% {
            transform: scale(0.7) rotate(-22deg);
            opacity: 0.7;
        }
        100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }
`;document.head.appendChild(c);document.addEventListener("error",function(e){e.target.tagName==="IMG"&&console.warn("Failed to load image:",e.target.src)},!0);document.addEventListener("keydown",function(e){if(e.key==="Escape"){const t=document.querySelector(".nav-mobile");if(t&&t.classList.contains("active")){t.classList.remove("active");const o=document.querySelector(".mobile-menu-btn");if(o){const n=o.querySelectorAll("span");n[0].style.transform="none",n[1].style.opacity="1",n[2].style.transform="none"}}}});function w(){const e=document.createElement("a");e.href="#main",e.textContent="Skip to main content",e.className="skip-link",e.style.cssText=`
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--field-green);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s;
    `,e.addEventListener("focus",function(){this.style.top="6px"}),e.addEventListener("blur",function(){this.style.top="-40px"}),document.body.insertBefore(e,document.body.firstChild)}w();function E(){if(window.innerWidth<=768||"ontouchstart"in window)return;const e=[],t=25;let o=0,n=0,i=0;for(let s=0;s<t;s++){const a=document.createElement("div");a.className="mouse-trail-dot",a.style.cssText=`
            position: fixed;
            width: 8px;
            height: 8px;
            background: #F4D03F;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `,document.body.appendChild(a),e.push({element:a,x:0,y:0,age:0})}document.addEventListener("mousemove",s=>{o=s.clientX,n=s.clientY});function r(){if(i++,i%2!==0){requestAnimationFrame(r);return}for(let s=e.length-1;s>0;s--)e[s].x=e[s-1].x,e[s].y=e[s-1].y,e[s].age=e[s-1].age+1;e[0].x=o,e[0].y=n,e[0].age=0,e.forEach((s,a)=>{const l=Math.max(0,1-s.age/t),d=Math.max(.3,1-s.age/t);s.element.style.left=s.x-4+"px",s.element.style.top=s.y-4+"px",s.element.style.opacity=l,s.element.style.transform=`scale(${d})`}),requestAnimationFrame(r)}r()}E();console.log(`
🌱 Cornfed Code Website
Built with love and modern web technologies
Contact: josh.wiersema06@gmail.com

This website features:
- Responsive design
- Smooth animations
- Accessibility features
- Performance optimizations
- Custom vine hover effects

Interested in working together? Get in touch!
`);
