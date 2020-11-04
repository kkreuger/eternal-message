const openMenu = () => {
    document.querySelector('.left-menu').classList.add('open')
}

const closeMenu = () => {
    document.querySelector('.left-menu').classList.remove('open')
}

(() => {
    const menuItems = document.querySelectorAll('.icons-wrapper a')
    menuItems.forEach(item => {
        
            item.classList.remove('active')
        
        if(window.location.pathname.includes('berichten')) {
            document.querySelector('.berichten').classList.add('active')
        } else if (window.location.pathname.includes('gegevens')) {
            document.querySelector('.gegevens').classList.add('active')
        } else if (window.location.pathname.includes('contact')) {
            document.querySelector('.contact').classList.add('active')
        }
    })
})()