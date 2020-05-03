window.addEventListener('scroll',
    () => {
        let animation_elements_first_page = [
            document.getElementById('portrait_text'),
            document.getElementById("line"),
            document.getElementById("pen"),
            document.getElementById("pen2"),
            document.getElementById("pen3"),
            document.getElementById("precise"),
            document.getElementById("description1"),
            document.getElementById("cap"),
            document.getElementById("finest_third"),
            document.getElementById("finest_second"),
            document.getElementById("finest_third")
        ]

        let distanceToTopForText = animation_elements_first_page[4].getBoundingClientRect().top;

        if (0 > distanceToTopForText) {
            for (let i = 0; i < animation_elements_first_page.length; i++) {
                animation_elements_first_page[i].style.animationPlayState = "running";
            }
        }

        // if (-window.innerHeight > distanceToTopForText) {
        //     for (let i = 0; i < animation_elements_first_page.length; i++) {
        //         animation_elements_first_page[i].style.animation = 'none';
        //         animation_elements_first_page[i].offsetHeight;
        //         animation_elements_first_page[i].style.animation = null;
        //     }
        // }

        let animation_elements_second_page = [
            document.getElementById('hand'),
            document.getElementById("stroke"),
            document.getElementById("first_accent"),
            document.getElementById("second_accent"),
            document.getElementById("watercolor_1"),
            document.getElementById("watercolor_2"),
            document.getElementById("splash")
        ]

        let distanceToTop = animation_elements_second_page[1].getBoundingClientRect().top;

        if (window.innerHeight * 1.2 > distanceToTop) {
            for (let i = 0; i < animation_elements_second_page.length; i++) {
                animation_elements_second_page[i].style.animationPlayState = "running";
            }
        }

        // if (0 > distanceToTop || window.innerHeight * 1.8 < distanceToTop) {
        //     for (let i = 0; i < animation_elements_second_page.length; i++) {
        //         animation_elements_second_page[i].style.animation = 'none';
        //         animation_elements_second_page[i].offsetHeight;
        //         animation_elements_second_page[i].style.animation = null;
        //     }
        // }

        let animation_elements_third_page = [
            document.getElementById('jenya_photo'),
            document.getElementById("0")
        ]

        for (let i = 0; i < animation_elements_third_page.length; i++) {

            let distance = animation_elements_third_page[i].getBoundingClientRect().top;

            if (window.innerHeight / 2 > distance) {
                for (let i = 0; i < animation_elements_third_page.length; i++) {
                    animation_elements_third_page[i].style.animationPlayState = "running";
                }
            }

            // if (-window.innerHeight > distanceFormPhotoToTop || window.innerHeight * 1.5 < distanceFormPhotoToTop) {
            //     for (let i = 0; i < animation_elements_third_page.length; i++) {
            //         animation_elements_third_page[i].style.animation = 'none';
            //         animation_elements_third_page[i].offsetHeight;
            //         animation_elements_third_page[i].style.animation = null;
            //     }
            // }
        }

        let elements = [
            document.getElementById("1"),
            document.getElementById("2"),
            document.getElementById("3"),
            document.getElementById("4"),
            document.getElementById("5"),
            document.getElementById("6")
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
                                elements[i].style.transition = "1s";
                                elements[i].style.transform = "scale(1.05)";
                                elements[i].style.cursor = "pointer";
                            })
                        elements[i].addEventListener('mouseleave',
                            () => {
                                elements[i].style.transition = "1s";
                                elements[i].style.transform = "scale(1)";
                            })
                    })
            }

            // if (-window.innerHeight > distance || window.innerHeight * 1.5 < distance) {
            //     elements[i].style.opacity = "0";
            //     elements[i].style.animation = 'none';
            //     elements[i].offsetHeight;
            //     elements[i].style.animation = null;
            //     elements[i].style.animation = "painting 2s 1 paused 0s forwards";
            // }
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

