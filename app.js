const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')
const openMan = document.querySelector('.man')
const openGirl = document.querySelector('.girl')

closedFace.addEventListener('click',()=>{
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click',()=>{
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});

openMan.addEventListener('click',()=>{
    if(openGirl.classList.contains('girl')){
        openGirl.classList.add('active');
        openMan.classList.remove('active');
    }
});

openGirl.addEventListener('click',()=>{
    if(openMan.classList.contains('man')){
        openMan.classList.add('active');
        openGirl.classList.remove('active');
    }
});