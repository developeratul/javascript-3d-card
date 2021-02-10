const footerYearArea = document.querySelector('#Year')
footerYearArea.innerHTML = new Date().getFullYear()

const card = document.querySelector('#Card')
const mainHeader = document.querySelector('header')
const title = document.querySelector('.title')
const feature = document.querySelector('#Features')
const button = document.querySelector('button')
const image = document.querySelector('img')

card.addEventListener('mouseover', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
card.addEventListener('mouseenter', (e) => {
  title.style.transform = 'translateZ(150px)'
  feature.style.transform = 'translateZ(150px)'
  button.style.transform = 'translateZ(150px)'
  image.style.transform = 'translateZ(150px)'
})
card.addEventListener('mouseleave', (e) => {
  card.style.transform = 'rotateY(0deg) rotateX(0deg)'
  title.style.transform = 'translateZ(0px)'
  feature.style.transform = 'translateZ(0px)'
  button.style.transform = 'translateZ(0px)'
  image.style.transform = 'translateZ(0px)'
})
