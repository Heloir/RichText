const textarea = document.querySelector('.textarea')
const boldbutton = document.querySelector('.boldbutton')
const underlinebutton = document.querySelector('.underlinebutton')
const italicbutton = document.querySelector('.italicbutton')
const uppercasebutton = document.querySelector('.uppercasebutton')
const alignleftbutton = document.querySelector('.alignleftbutton')
const aligncenterbutton = document.querySelector('.aligncenterbutton')
const alignrightbutton = document.querySelector('.alignrightbutton')

function resetbutton(){
    textarea.classList.remove('fw-bold')
    textarea.classList.remove('text-decoration-underline')
    textarea.classList.remove('fst-italic')
    textarea.classList.remove('text-uppercase')
    textarea.style.textAlign = "start"
}



boldbutton.addEventListener('click', () =>{
    if(!document.getElementsByClassName('fw-bold').length){
      textarea.classList.add('fw-bold')
    } else{
        textarea.classList.remove('fw-bold')
    }
})

underlinebutton.addEventListener('click', () =>{
    if(!document.getElementsByClassName('text-decoration-underline').length){
        textarea.classList.add('text-decoration-underline')
    } else{
        textarea.classList.remove('text-decoration-underline')
    }
})

italicbutton.addEventListener('click', () =>{
    if(!document.getElementsByClassName('fst-italic').length){
        textarea.classList.add('fst-italic')
    } else{
        textarea.classList.remove('fst-italic')
    }
})

uppercasebutton.addEventListener('click', () =>{
    if(!document.getElementsByClassName('text-uppercase').length){
        textarea.classList.add('text-uppercase')
    } else{
        textarea.classList.remove('text-uppercase')
    }
})

alignleftbutton.addEventListener('click', () =>{
    textarea.style.textAlign = "start"
})

aligncenterbutton.addEventListener('click', () =>{
    textarea.style.textAlign = "center"
})

alignrightbutton.addEventListener('click', () =>{
    textarea.style.textAlign = "end"
})