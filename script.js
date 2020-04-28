// window.addEventListener('scroll',
//     () => {
//         let hand = document.getElementById('hand');
//         let distanceToTop = hand.getBoundingClientRect().top;
//         let stroke = document.getElementById("stroke");
//         if (window.innerHeight / 2 > distanceToTop && distanceToTop > window.innerHeight / 4) {
//             hand.style.right = (50 - 90000 / window.innerWidth) * (4 * distanceToTop - window.innerHeight) / (window.innerHeight) + 50 + "vw";
//             hand.style.opacity = - 400 * (distanceToTop - window.innerHeight / 4) / (window.innerHeight) + 100 + "%";
//             stroke.style.right = (50 - 90000 / window.innerWidth) * (4 * distanceToTop - window.innerHeight) / (window.innerHeight) + "vw";
//             stroke.style.opacity = - 400 * (distanceToTop - window.innerHeight / 4) / (window.innerHeight) + 100 + "%";
//             hand.style.filter = "drop-shadow(0px 5px 15px rgba(0, 0, 0," + stroke.style.opacity / 100 + "))";
//         } else if (window.innerHeight / 2 < distanceToTop) {
//             hand.style.opacity = 0 + "%";
//             stroke.style.opacity = 0 + "%";
//             hand.style.right = 30 + "vw";
//             stroke.style.right = -20 + "vw";
//         } else if (distanceToTop < window.innerHeight / 4) {
//             hand.style.opacity = 100 + "%";
//             stroke.style.opacity = 100 + "%";
//             hand.style.right = 50 + "vw";
//             stroke.style.right = 0 + "vw";
//         }
// });

window.addEventListener('scroll',
    () => {
        let hand = document.getElementById('hand');
        let stroke = document.getElementById("stroke");
        let first_accent = document.getElementById("first_accent");
        let second_accent = document.getElementById("second_accent");
        let distanceToTop = stroke.getBoundingClientRect().top;
        if (window.innerHeight * 1.2 > distanceToTop) {
            hand.style.animationPlayState = "running";
            stroke.style.animationPlayState = "running";
            first_accent.style.animationPlayState = "running";
            second_accent.style.animationPlayState = "running";
        }
        if (0 > distanceToTop || window.innerHeight * 1.8 < distanceToTop) {
            hand.style.animation = 'none';
            hand.offsetHeight;
            hand.style.animation = null;
            stroke.style.animation = 'none';
            stroke.offsetHeight;
            stroke.style.animation = null;
            first_accent.style.animation = 'none';
            first_accent.offsetHeight;
            first_accent.style.animation = null;
            second_accent.style.animation = 'none';
            second_accent.offsetHeight;
            second_accent.style.animation = null;
        }
    });