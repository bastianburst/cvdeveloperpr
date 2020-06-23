$(document).ready(function () {

    var info = document.querySelector(".more_content");
    var edu = document.querySelector(".edu_content");
    var skills = document.querySelector(".skills_content");
    var work = document.querySelector(".work_content");
    var awards = document.querySelector(".awards_content");

    $(window).scroll(function () {
        var target = document.querySelector('.more_content'), //El elemento que quiero testear
            windowHeight = $(window).height();

        //Si el elemento es visible al realizar scroll
        if (inView(target)) {
            //Activo las animaciones
            info.classList.add('animate__animated');
            info.classList.add('animate__slideInLeft');
        }

    });
    $(window).scroll(function () {
        var target = document.querySelector('.edu_content'), //El elemento que quiero testear
            windowHeight = $(window).height();

        //Si el elemento es visible al realizar scroll
        if (inView(target)) {
            //Activo las animaciones
            edu.classList.add('animate__animated');
            edu.classList.add('animate__slideInRight');
        }

    });
    $(window).scroll(function () {
        var target = document.querySelector('.skills_content'), //El elemento que quiero testear
            windowHeight = $(window).height();

        //Si el elemento es visible al realizar scroll
        if (inView(target)) {
            //Activo las animaciones
            skills.classList.add('animate__animated');
            skills.classList.add('animate__slideInRight');
        }

    });
    $(window).scroll(function () {
        var target = document.querySelector('.work_content'), //El elemento que quiero testear
            windowHeight = $(window).height();

        //Si el elemento es visible al realizar scroll
        if (inView(target)) {
            //Activo las animaciones
            work.classList.add('animate__animated');
            work.classList.add('animate__slideInLeft');
        }

    });
    $(window).scroll(function () {
        var target = document.querySelector('.awards_content'), //El elemento que quiero testear
            windowHeight = $(window).height();

        //Si el elemento es visible al realizar scroll
        if (inView(target)) {
            //Activo las animaciones
            awards.classList.add('animate__animated');
            awards.classList.add('animate__slideInRight');
        }

    });
    //mirar si el elemento está en el viewport
    function inView(element, fullHeightInView) {
        var $element = $(element);
        var $window = $(window);
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();
        var elemTop = $element.offset().top;
        var elemBottom;

        if (fullHeightInView) {
            elemBottom = elemTop + $element.height();
        } else {
            elemBottom = elemTop;
        }

        return ((elemBottom >= docViewTop) &&
            (elemTop <= docViewBottom) &&
            (elemBottom <= docViewBottom) &&
            (elemTop >= docViewTop));
    }

});