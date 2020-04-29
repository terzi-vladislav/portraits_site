window.addEventListener('scroll',
    () => {
        let portrait_text = document.getElementById('portrait_text');
        let line = document.getElementById("line");
        let pen = document.getElementById("pen");
        let precise = document.getElementById("precise");
        let description1 = document.getElementById("description1");
        let cap = document.getElementById("cap");
        let finest_first = document.getElementById("finest_first")
        let finest_second = document.getElementById("finest_second")
        let finest_third = document.getElementById("finest_third")

        let animation_elements_first_page = [
            portrait_text,
            line,
            pen,
            precise,
            description1,
            cap,
            finest_first,
            finest_second,
            finest_third
        ]

        let distanceToTopForText = description1.getBoundingClientRect().top;
        if (0 > distanceToTopForText) {
            for (let i = 0; i < animation_elements_first_page.length; i++) {
                animation_elements_first_page[i].style.animationPlayState = "running";
            }
        }

        if (-window.innerHeight > distanceToTopForText) {
            for (let i = 0; i < animation_elements_first_page.length; i++) {
                animation_elements_first_page[i].style.animation = 'none';
                animation_elements_first_page[i].offsetHeight;
                animation_elements_first_page[i].style.animation = null;
            }
        }

        let hand = document.getElementById('hand');
        let stroke = document.getElementById("stroke");
        let first_accent = document.getElementById("first_accent");
        let second_accent = document.getElementById("second_accent");
        let watercolor_1 = document.getElementById("watercolor_1");
        let watercolor_2 = document.getElementById("watercolor_2");
        let splash = document.getElementById("splash")

        let animation_elements_second_page = [
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
            for (let i = 0; i < animation_elements_second_page.length; i++) {
                animation_elements_second_page[i].style.animationPlayState = "running";
            }
        }

        if (0 > distanceToTop || window.innerHeight * 1.8 < distanceToTop) {
            for (let i = 0; i < animation_elements_second_page.length; i++) {
                animation_elements_second_page[i].style.animation = 'none';
                animation_elements_second_page[i].offsetHeight;
                animation_elements_second_page[i].style.animation = null;
            }
        }

        let janya_photo = document.getElementById('jenya_photo');
        let main_painting = document.getElementById("0");
        let animation_elements_third_page = [
            janya_photo,
            main_painting
        ]

        let distanceFormPhotoToTop = janya_photo.getBoundingClientRect().top;
        if (window.innerHeight / 2 > distanceFormPhotoToTop) {
            for (let i = 0; i < animation_elements_third_page.length; i++) {
                animation_elements_third_page[i].style.animationPlayState = "running";
            }
        }

        if (-window.innerHeight > distanceFormPhotoToTop || window.innerHeight * 1.5 < distanceFormPhotoToTop) {
            for (let i = 0; i < animation_elements_third_page.length; i++) {
                animation_elements_third_page[i].style.animation = 'none';
                animation_elements_third_page[i].offsetHeight;
                animation_elements_third_page[i].style.animation = null;
            }
        }

        let alex = document.getElementById('1');
        let denis = document.getElementById('2');
        let toma = document.getElementById('3');
        let queen = document.getElementById('4');
        let mom = document.getElementById('5');
        let marina = document.getElementById('6');

        let elements = [
            alex,
            denis,
            toma,
            queen,
            mom,
            marina
        ]

        for (let i = 0; i < elements.length; i++) {

            let distance = elements[i].getBoundingClientRect().top;

            if (window.innerHeight * .7 > distance) {
                elements[i].style.animationDelay = (i % 3) * .25 + "s";
                elements[i].style.animationPlayState = "running";
                elements[i].addEventListener('animationend',
                    () => {
                        elements[i].style.opacity = "1";
                        elements[i].style.animation = "none";
                        elements[i].addEventListener('mouseover',
                            () => {
                                elements[i].style.transform = "scale(1.05)";
                                elements[i].style.cursor = "pointer";
                            })
                        elements[i].addEventListener('mouseleave',
                            () => {
                                elements[i].style.transform = "scale(1)";
                            })
                    })
            }

            if (-window.innerHeight > distance || window.innerHeight * 1.5 < distance) {
                elements[i].style.opacity = "0";
                elements[i].style.animation = 'none';
                elements[i].offsetHeight;
                elements[i].style.animation = null;
                elements[i].style.animation = "painting 2s 1 paused 0s forwards";
            }
        }
    });

let clickable_photos = []

for (let i = 0; i < 7; i++) {
    clickable_photos[i] = document.getElementById(i.toString());
}

for (let i = 0; i < clickable_photos.length; i++) {
    clickable_photos[i].addEventListener('click',
        () =>
        {
            showPhotoFullscreen(i);
        });
}

function showPhotoFullscreen(i) {
    let photo = document.getElementById('image_popup');
    photo.style.backgroundImage = "url(Assets/Paint_portraits/" + i + ".JPG)";
    let modal = document.getElementsByClassName('popup')[0];
    modal.style.display = "flex";
    modal.style.animation = "popup_animation 1s forwards";

    modal.onclick = () => {
        modal.style.animation = "popup_animation_close 1s forwards";
    }
}

