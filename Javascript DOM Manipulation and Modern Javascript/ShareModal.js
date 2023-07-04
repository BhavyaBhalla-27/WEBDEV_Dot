const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Modal open function
function openModal(){
    modal.classList.add('active');
    // overlay is the blurry filter
    overlay.classList.add('overlayactive');
}
// Modal close function
function closeModal(){
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive'); 
}