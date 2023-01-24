function myFunction(x) {
    x.classList.toggle("change");
  }


const toggleButton = document.getElementsByClassName('container')[0]
const navbarLinks = document.getElementsByClassName('topic-section')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})