const close_photo = () => {
    const body = document.querySelector('body');
    document.getElementById("big-photo").innerHTML = ""
    body.removeEventListener('click', close_photo);
    const container = document.querySelector('.container');
    container.style.opacity = '1';
}

const open_photo = (photo) => {
    document.getElementById("big-photo")
    .innerHTML = ("<img class='big-img' src='" + photo + "'>");

    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    container.style.opacity = '0.7';
    body.addEventListener('click', close_photo, true);
}

const popunDescriptionOpen = () => {
    const body = document.querySelector('body');
    const popup = document.querySelector('.popup-description');
    const container = document.querySelector('.container');
    const popupClose = document.querySelector('.popup-close-description');

    popup.style.display = 'block';
    container.style.opacity = '0.3';

    body.addEventListener('click', popunDescriptionClose, true);
    popupClose.addEventListener('click', popunDescriptionClose, true);
}

const popunDescriptionClose = () => {
    const body = document.querySelector('body');
    const popup = document.querySelector('.popup-description');
    const container = document.querySelector('.container');

    body.removeEventListener('click', popunDescriptionClose);

    popup.style.display = 'none';
    container.style.opacity = '1';

}

