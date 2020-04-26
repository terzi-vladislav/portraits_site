window.addEventListener('scroll',
    () => {
        let hand = document.getElementById('hand');
        let distanceToTop = hand.getBoundingClientRect().top;
        let stroke = document.getElementById("stroke");
        if (window.innerHeight / 2 > distanceToTop && distanceToTop > window.innerHeight / 4) {
            hand.style.right = (50 - 90000 / window.innerWidth) * (4 * distanceToTop - window.innerHeight) / (window.innerHeight) + 50 + "vw";
            hand.style.opacity = - 400 * (distanceToTop - window.innerHeight / 4) / (window.innerHeight) + 100 + "%";
            stroke.style.right = (50 - 90000 / window.innerWidth) * (4 * distanceToTop - window.innerHeight) / (window.innerHeight) + "vw";
            stroke.style.opacity = - 400 * (distanceToTop - window.innerHeight / 4) / (window.innerHeight) + 100 + "%";
            hand.style.filter = "drop-shadow(0px 5px 15px rgba(0, 0, 0," + stroke.style.opacity / 100 + "))";
        } else if (window.innerHeight / 2 < distanceToTop) {
            hand.style.opacity = 0 + "%";
            stroke.style.opacity = 0 + "%";
            hand.style.right = 30 + "vw";
            stroke.style.right = -20 + "vw";
        } else if (distanceToTop < window.innerHeight / 4) {
            hand.style.opacity = 100 + "%";
            stroke.style.opacity = 100 + "%";
            hand.style.right = 50 + "vw";
            stroke.style.right = 0 + "vw";
        }
});