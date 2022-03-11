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

function onNavButtonClick(section)
{
    section.preventDefault();
    // let id = targetElement.id;
    section.scrollIntoView();
    console.log("On nav Clicked");``
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for(section of pageSections)
{
    let li = document.createElement('li');
    let navText = section.getAttribute("data-nav");
    // let link = document.createElement('a');
    // link.href = "#" + container.id;
    let navButton = document.createElement('button');
    navButton.textContent = navText;
    navButton.addEventListener("click", this.onNavButtonClick)
    // link.appendChild(navButton);
    li.appendChild(navButton);
    this.navbarList.appendChild(li);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


