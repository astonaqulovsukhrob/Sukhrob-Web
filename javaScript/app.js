const btn = document.getElementById('btn')
const navbar = document.querySelector('.navbar')
const navTop = document.querySelector('.nav-header')
const followers = document.getElementById('followers')
const repos = document.getElementById('repos')
const stars = document.getElementById('stars')
const githubImg = document.querySelector('.github-img')

const api = 'https://api.github.com/users/astonaqulovsukhrob'

axios(api).then(function (data) {
  getResult(data)
})

function getResult(datajson) {
  githubImg.src = datajson.data.avatar_url
  followers.textContent = datajson.data.followers
  repos.textContent = datajson.data.public_repos
  stars.textContent = datajson.data.public_gists
}








// navbar scroll
window.addEventListener('scroll', animationNav)

btn.addEventListener('click', function () {
  navbar.classList.toggle('activ')
})

function animationNav() {
  if (window.scrollY > navTop.offsetHeight) {
    navTop.classList.add('scroll')
  } else {
    navTop.classList.remove('scroll')
  }
}


// sukhrob landing
var typed = new Typed('.typing', {
  strings: ['Web', 'JavaScript', 'HTML', 'CSS'],
  smartBackspace: true, // Default value
  typeSpeed: 200,
  loop: true,
  backSpeed: 100,
  startDelay: 3000,
  backDelay: 1000,
})
