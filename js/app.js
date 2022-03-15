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
this.pageSections =  document.querySelectorAll('[data-nav]');
this.navbarList =  document.querySelector('#navbar__list');
this.navbarMenu =  document.querySelector('.navbar__menu');
window.addEventListener("scroll", this.manageActive);

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
function manageActive(event)
{
    navbarMenu.style.display = "block"

    var top = document.documentElement.clientHeight;
    for(section of pageSections)
    {
        let sectionBounds = section.getBoundingClientRect();
        if(sectionBounds.bottom <= top || sectionBounds.top <= top)
        {
            section.classList.add("active-section");
        }
        else
        {
            section.classList.remove("active-section");
        }
    }
    console.log("Hello");
}
function displayNavBar()
{
    hasScrolled = true;
    
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav. Create the list items dynamically from the datanav attributes
for(section of pageSections)
{
    let li = document.createElement('li');
    let navText = section.getAttribute("data-nav");
    let navButton = document.createElement('button');
    navButton.classList = "menu__link"
    navButton.section = section;
    navButton.textContent = navText;
    li.appendChild(navButton);
    navButton.addEventListener("click", this.onNavButtonClick, true)

    this.navbarList.appendChild(li);
}

