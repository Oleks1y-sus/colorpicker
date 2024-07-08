let controls = document.querySelectorAll('.toggle-controls button');
let photo = document.querySelector('.photo');

let separator = document.querySelector('.separator');
    let originalPhoto = document.querySelector('.photo-original');


    let originalWidth = photo.offsetWidth * 0.5;
    let originalHeight = photo.offsetHeight;

   separator.addEventListener('mousedown', function(event) {
        event.preventDefault();

        document.addEventListener('mousemove', resizePhoto);
        document.addEventListener('mouseup', stopResizePhoto);
    });

   function resizePhoto(event) {
        let newWidth = event.clientX - photo.getBoundingClientRect().left;
        if (newWidth > 0 && newWidth < photo.offsetWidth) {
            originalPhoto.style.width = newWidth + 'px';
            separator.style.left = newWidth + 'px';
        }
    }

    function stopResizePhoto() {
        document.removeEventListener('mousemove', resizePhoto);
        document.removeEventListener('mouseup', stopResizePhoto);
    }

 for (let i = 0; i < controls.length; i++){
     controls[i].innerHTML = controls[i].dataset.filter;
    clickControl(controls[i]);
 }
 function toggleFilter(control){
    for(let j = 0; j < controls.length; j++){
        controls[j].classList.remove('active');
        photo.classList.remove(controls[j].dataset.filter);
    }
    control.classList.add('active');
    if(photo){
        photo.classList.add(control.dataset.filter);
    }
 }
 function clickControl(control){
    control.addEventListener('click', function(){
        toggleFilter(control);
    });
 }

// for (let i = 0; i < buttons.length; i++){
//     buttons[i].innerHTML = buttons[i].getAttribute('data-filter');
//     buttons[i].addEventListener('click', function() {
//         clickControl(this);
//     });
// }
// let defaultFilterButton = document.querySelector('.toggle-controls button.oldie');
// toggleFilter(defaultFilterButton);

// function clickControl(button) {
//     toggleFilter(button);
// }
// function toggleFilter(button) {
//     let photos = document.querySelector('.photos');
//     let activeFilter = photos.querySelector('.photo-active');
//     if (activeFilter) {
//         activeFilter.classList.remove('photo-active');
//     }

//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].classList.remove('active');
//         photo.classList.remove(buttons[i].dataset.filter);
//     }

//     button.classList.add('active');
//     let filterName = button.getAttribute('data-filter'); 
//     let photo = document.querySelector('.photo');
//     photo.classList.add('photo-active');  
//     photo.classList.add(filterName); 
// }