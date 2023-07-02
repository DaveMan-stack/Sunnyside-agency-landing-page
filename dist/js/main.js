document.querySelector('.toggle-menu').addEventListener('click', () => {
    document.querySelector('.mobile-nav').classList.toggle('visible')
})

document.querySelector('.mobile-nav').addEventListener('mouseover', () => {
    document.querySelector('.mobile-nav').classList.add('visible')
})

document.querySelector('.mobile-nav').addEventListener('mouseout', () => {
    document.querySelector('.mobile-nav').classList.remove('visible')
})