/*!
 * Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav')
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74
        })
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler')
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    )
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click()
            }
        })
    })
})

// Mendefinisikan fungsi untuk mengecek apakah perangkat mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
}

// Mendapatkan elemen anchor (link)
var masukAplikasiLink = document.getElementById('masukAplikasi')

// Memeriksa apakah perangkat adalah perangkat mobile
if (isMobileDevice()) {
    // Jika perangkat adalah mobile, menyembunyikan elemen
    masukAplikasiLink.style.display = 'none'
} else {
    // Jika perangkat adalah desktop, menampilkan elemen
    masukAplikasiLink.style.display = 'block'
}
