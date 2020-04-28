window.addEventListener('scroll',
    () => {
        let hand = document.getElementById('hand');
        let stroke = document.getElementById("stroke");
        let first_accent = document.getElementById("first_accent");
        let second_accent = document.getElementById("second_accent");
        let watercolor_1 = document.getElementById("watercolor_1");
        let watercolor_2 = document.getElementById("watercolor_2");
        let splash = document.getElementById("splash")
        let animation_elements = [
            hand,
            stroke,
            first_accent,
            second_accent,
            watercolor_1,
            watercolor_2,
            splash
        ]
        let distanceToTop = stroke.getBoundingClientRect().top;
        if (window.innerHeight * 1.2 > distanceToTop) {
            for (let i = 0; i < animation_elements.length; i++) {
                animation_elements[i].style.animationPlayState = "running";
            }
        }
        if (0 > distanceToTop || window.innerHeight * 1.8 < distanceToTop) {
            if (window.innerHeight * 1.2 > distanceToTop) {
                for (let i = 0; i < animation_elements.length; i++) {
                    animation_elements[i].style.animation = 'none';
                    animation_elements[i].offsetHeight;
                    animation_elements[i].style.animation = null;
                }
            }
        }
    });