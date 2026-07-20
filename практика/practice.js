const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')


  burger.addEventListener('click', ()=> {
    burger.classList.toggle('open')
    menu.classList.toggle('open')
  })



menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener(('click'), ()=>{
    menu.classList.remove('open')
    burger.classList.remove('open')
  })
})





const textElement = document.querySelector('.code')
const demoCard = document.querySelector('.demo-card')

const codeWords = 
[
  { type: 'sel', text: '.card' },
  { type: 'punc', text: ' {' },
  { type: 'break' },
  { type: 'prop', text: '  display' },
  { type: 'punc', text: ': ' },
  { type: 'val', text: 'flex' },
  { type: 'punc', text: ';' },
  { type: 'break' },
  { type: 'prop', text: '  gap' },
  { type: 'punc', text: ': ' },
  { type: 'val', text: '12px' },
  { type: 'punc', text: ';' },
  { type: 'break' },
  { type: 'prop', text: '  border-radius' },
  { type: 'punc', text: ': ' },
  { type: 'val', text: '14px' },
  { type: 'punc', text: ';' },
  { type: 'break' },
  { type: 'comment', text: '  /* вот тут и рождается карточка */' },
  { type: 'break' },
  { type: 'punc', text: '}' },
]

let currentToken = 0 
let currentChar = 0
let currentSpan = null


const intervalId = setInterval(() => {
  const token = codeWords[currentToken]

  if (token.type === 'break'){
    
    textElement.append(document.createElement('br'))
    currentToken ++ 
    currentChar = 0
    currentSpan = null

    return
  }

  if (currentSpan === null){
    const span = document.createElement('span')
    span.className = token.type
    textElement.append(span)
    currentSpan = span

  }

  currentChar ++ 

  currentSpan.textContent = token.text.slice(0, currentChar)

  if(currentChar === token.text.length){
    currentToken ++ 
    currentChar = 0
    currentSpan = null
  }
  if (currentToken === codeWords.length){
    clearInterval(intervalId)

    demoCard.classList.add('is-visible')
  }

}, 50);




















//Табы/ программы//
const tabBtns = document.querySelectorAll('.tab-btn')
const panels = document.querySelectorAll('.panel')


tabBtns.forEach(btn => {
  btn.addEventListener('click', ()=> {
    const target = btn.dataset.tab
    
    tabBtns.forEach((el)=>{
      el.classList.remove('is-active')
    })
    btn.classList.add('is-active')

    panels.forEach((panel)=>{
      panel.classList.remove('is-active')
      
      if(`panel-${target}` === panel.id){
        panel.classList.add('is-active')
      }
    })
  })
})


const sliderTrack = document.querySelector('.slider')
const sliderCards = document.querySelectorAll('.slide')
const btnPrev = document.getElementById('slider-prev')
const btnNext = document.getElementById('slider-next')
const dotsDiv = document.querySelector('.slider-dots')

let currentSlide = 0

for(let i =0 ; i < sliderCards.length; i++){
  const dot = document.createElement('button')
  dot.classList.add('dot')

  dot.addEventListener('click', () => {
    goToSlide(i);
  });
  dotsDiv.append(dot) 
  
  
  if(i === 0 ){
    dot.classList.add('is-active')
  }

  
}

const dots = document.querySelectorAll('.dot')

const goToSlide = (index) => {
  currentSlide = (index + sliderCards.length) % sliderCards.length
  
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`
  
  dots.forEach((dot, i)=> {
  dot.classList.remove('is-active')
  if (i === currentSlide){
    dot.classList.add('is-active')
  }
})
}

goToSlide(0)

btnPrev.addEventListener('click',()=> {
  currentSlide -- ;
  goToSlide(currentSlide)
})
btnNext.addEventListener('click', ()=> {
  currentSlide ++ ;
  goToSlide(currentSlide)
  
})

  let idInterval = setInterval(() => {
    goToSlide(currentSlide + 1)
  }, 5000);

sliderTrack.addEventListener('mouseenter', () => {
  clearInterval(idInterval)
})
sliderTrack.addEventListener('mouseleave', () => {
  idInterval = setInterval(() => {
    goToSlide(currentSlide + 1)
  }, 5000);
})


const faqItems = document.querySelectorAll('.accordion-item');
const faqButtons = document.querySelectorAll('.accordion-trigger');

faqButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const currentItem = btn.closest('.accordion-item');
    const isOpen = currentItem.classList.contains('is-open');

    // Закрываем все элементы
    faqItems.forEach((item) => {
      item.classList.remove('is-open');
    });

    // Если текущий не был открыт — открываем его
    if (!isOpen) {
      currentItem.classList.add('is-open');
    }
  });
});

//form//

const form = document.querySelector('.signup-form')
const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const levelSelect = document.getElementById('current-level')
const nameError = document.querySelector('.name-error')
const emailError = document.querySelector('.email-error')
const successMessage = document.querySelector('.success-message')

form.addEventListener('submit', (event)=> {
  event.preventDefault()

  let name = nameInput.value
  let email = emailInput.value
  let level = levelSelect.value

  nameInput.classList.remove('input-error')
  emailInput.classList.remove('input-error')
  nameError.classList.remove('is-visible')
  emailError.classList.remove('is-visible')
  successMessage.classList.remove('message-visible');

  let isValid = true

    if (name.trim() === ''){
      nameInput.classList.add('input-error')
      nameError.classList.add('is-visible')

      isValid = false
    }
    if (email.trim() === ''){
      emailInput.classList.add('input-error')
      emailError.classList.add('is-visible')

      isValid = false
    }
    if (level === ''){
      isValid = false
    }

    if (isValid ){
      successMessage.classList.add('message-visible')
      form.reset()

      setTimeout(() => {
        successMessage.classList.remove('message-visible')
      }, 3200);
    }
    

  })










