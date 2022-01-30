/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navbar    = document.getElementById("navbar__list");
const sections  = document.querySelectorAll("section");

// build the nav
function nav_builder () {

  let navEntries = "";

  sections.forEach(entry => {
    let section = entry.id;
    section = section[0].toUpperCase() + section.slice(1);
    navEntries += `<li><a href=\"index.html#${entry.id}" id="menuitem-${entry.id}">${entry.getAttribute('data-nav')}</a></li>`;
   });
 
  navEntries = navEntries.replace(/<\/li><li>/g, '</li> | <li>');
  //$('#navbar__list').append($(navEntries));
  navbar.insertAdjacentHTML("afterbegin", navEntries);
}

// set visible section & nav entry active
function toggleActive() {

  sections.forEach(section => {

    const rect = section.getBoundingClientRect();
    const active = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    const menuitem = "menuitem-" + section.id;
    active ? section.classList.add('your-active-class') : section.classList.remove('your-active-class');
    active ? document.getElementById(menuitem).classList.add('active-menuitem') : document.getElementById(menuitem).classList.remove('active-menuitem');
  
  });

}

function hideNav() {
  document.getElementById("navbar__list").style.display = "none";;
}

// does what it says, it autohides the navigation menu
function autoHide() {
  //$('.navbar__menu').show();
  document.getElementById("navbar__list").style.display = "block";
  //$('.navbar__menu').delay(9000).fadeOut(1000);
  window.setTimeout(hideNav, 9000); 
}

function topScroll() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function triggerBtn() {
  if (document.body.scrollTop > 80) {
    //$('#top-scroll-btn').css('opacity', '1');
    document.getElementById("top-scroll-btn").style.opacity = "1.0";
  } else {
    //$('#top-scroll-btn').css('opacity', '0');
    document.getElementById("top-scroll-btn").style.opacity = "0.0";
  };
}

//$(document).ready(() => { nav_builder(); autoHide(); });
document.addEventListener("DOMContentLoaded", () => { nav_builder(); autoHide(); });

document.getElementById("top-scroll-btn").addEventListener("click", topScroll);

document.addEventListener("scroll", () => { toggleActive(); autoHide(); triggerBtn(); });

//This thing was a complete joke, sometimes it is encouraged to use jQuery and sometimes it is not,
//but it is never clearly stated. Same with bootstrap, this is really ridiculous...