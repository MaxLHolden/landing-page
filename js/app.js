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
const pageSections =  document.querySelectorAll('[data-nav]');
const navbarList =  document.querySelector('#navbar__list');
const navbarMenu =  document.querySelector('.navbar__menu');
window.addEventListener("scroll", manageActive);

//every 10 seconds run the hideNav function
setInterval(hideNav, 10000)

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//hide the nav menu
function hideNav()
{
    navbarMenu.style.display = "none"
}

function onNavButtonClick(event)
{
    event.preventDefault();
    event.currentTarget.section.scrollIntoView({behavior:"smooth"});
}

//set the section-active class when a section is scrolled into the.  Enable to navbar since we are already listening for a scroll event
function manageActive()
{
    navbarMenu.style.display = "block"

    const top = document.documentElement.clientHeight;
    for(section of pageSections)
    {
        let sectionBounds = section.getBoundingClientRect();
        if(sectionBounds.top <= 1 && sectionBounds.bottom <= top)
        {
            section.classList.add("active__section");
        }
        else
        {
            section.classList.remove("active__section");
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav. Create the list items dynamically from the datanav attributes
//set set the event listener on creation
for(section of pageSections)
{
    let navText = section.getAttribute("data-nav");
    let navButton = document.createElement('button');
    navButton.classList = "menu__link"
    navButton.section = section;
    navButton.textContent = navText;
    navButton.addEventListener("click", this.onNavButtonClick, true)

    let li = document.createElement('li');
    li.appendChild(navButton);

    navbarList.appendChild(li);
}

