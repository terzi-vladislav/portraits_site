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
        let main_painting = document.getElementById("main_painting");
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

        let alex = document.getElementById('alex');
        let denis = document.getElementById('denis');
        let toma = document.getElementById('toma');
        let queen = document.getElementById('queen');
        let mom = document.getElementById('mom');
        let marina = document.getElementById('marina');

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
            }

            if (-window.innerHeight > distance || window.innerHeight * 1.5 < distance) {
                elements[i].style.animation = 'none';
                elements[i].offsetHeight;
                elements[i].style.animation = null;
            }
        }
    });

let clickable_photos = [
    [
        document.getElementById('alex'),
        false
    ],
    [
        document.getElementById('denis'),
        false
    ],
    [
        document.getElementById('toma'),
        false
    ],
    [
        document.getElementById('queen'),
        false
    ],
    [
        document.getElementById('mom'),
        false
    ],
    [
        document.getElementById('marina'),
        false
    ],
    [
        document.getElementById('main_painting'),
        false
    ]
];

// function AddHoverEvent(i) {
//     hover_photos[i][0].addEventListener('mouseover',
//         () => {
//             hover_photos[i][0].style.animation = 'none';
//             hover_photos[i][0].offsetHeight;
//             hover_photos[i][0].style.animation = null;
//             hover_photos[i][0].style.animation = "magnify 2s 1 normal forwards";
//             hover_photos[i][0].style.cursor = "pointer";
//         });
// }
//
// let hover_photos = clickable_photos;
//
for (let i = 0; i < clickable_photos.length; i++) {
    clickable_photos[i][0].addEventListener('click',
        () =>
        {
            clickable_photos[i][1] = true;
            console.log("clicked", i);
        });
}

// for (let i = 0; i < hover_photos.length; i++) {
//     clickable_photos[i][0].addEventListener('animationend',
//         () =>
//         {
//             AddHoverEvent(i);
//         });
// }