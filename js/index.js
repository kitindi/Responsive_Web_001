function toggleMobile(){
    let element = document.getElementById('mobile-navigation');

    if(element.classList.contains('mobile--nav--open')){
        element.classList.remove('mobile--nav--open');
    }else{
        element.classList.add('mobile--nav--open');
    }
}