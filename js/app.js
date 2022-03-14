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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function onNavButtonClick(event)
{
    event.preventDefault();
    event.currentTarget.section.scrollIntoView({behavior:"smooth"});
}
function manageActive(event)
{
    for(section of pageSections)
    {
        let sectionBounds = section.getBoundingClientRect();
        if(sectionBounds.bottom <= document.documentElement.clientHeight)
        {
            section.classList.add("your-active-class");
        }
        else
        {
            section.classList.remove("your-active-class");
        }
    }
    console.log("Hello");
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

window.addEventListener("scroll", this.manageActive);
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

// Add class 'active' to section when near top of viewport
for(section of pageSections)
{
    section.addEventListener("scroll", this.manageActive)
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


