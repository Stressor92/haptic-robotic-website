// Scroll Animationen
function animateOnScroll(target, triggerPosition, activeClass, reversible = false){
  let targetEl = document.querySelectorAll(target);
  targetEl.forEach(el=>{
    let targetElTop = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (targetElTop <= windowHeight * triggerPosition) {
      el.classList.add(activeClass);
    }
    else if (targetElTop >= windowHeight && reversible) {
      el.classList.remove(activeClass);
    }
  })

}

window.addEventListener('scroll', ()=>{
animateOnScroll('.title', 0.8, 'title-appear', true)
})

window.addEventListener('scroll', ()=>{
  animateOnScroll('.description-text', 0.8, 'description-text-appear', true)
})


window.addEventListener('scroll', ()=>{
  animateOnScroll('.description-image', 0.5, 'description-image-appear', true)
})

window.addEventListener('scroll', ()=>{
    animateOnScroll('.image-left', 0.5, 'image-left-appear', true)
})

window.addEventListener('scroll', ()=>{
  animateOnScroll('.description-heading', 0.8, 'description-heading-appear', true)
})

window.addEventListener('scroll', ()=>{
  animateOnScroll('.value', 0.8, 'value-appear', true)
})

