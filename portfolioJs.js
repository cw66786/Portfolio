




//hamburger drop down menu for mobile

const toggleBtn = document.getElementsByClassName('toggle-btn')[0];

const navbarLinks = document.getElementsByClassName('navbar-links')[0];


const links = document.querySelectorAll('navbar-links li');

toggleBtn.addEventListener('click', () => {
 
  navbarLinks.classList.toggle('open')
});

//end of hamburger drop down menu for mobile

//scroll down text appear on hover

const scrollText1 = document.getElementsByClassName('scroll-text')[0];

const scrollText2 = document.getElementsByClassName('scroll-text')[1];

const scrollDownContainer = document.getElementsByClassName('scroll-down-container')[0];

scrollDownContainer.addEventListener('mouseenter', () => {
  scrollText1.style.display = 'contents';
     scrollText2.style.display = 'contents';
});

scrollDownContainer.addEventListener('mouseleave', () => {
  scrollText1.style.display = 'none';
     scrollText2.style.display = 'none';
});

//end of scroll down text appear on hover



//scroll down container dissappear on scroll and hamburger menu close on scroll

window.addEventListener('scroll', () => {
  
  if(window.scrollY > 115) {
    
  scrollDownContainer.style.display ='none';
     navbarLinks.classList.remove('open');
    
  }else if(window.scrollY < 115) {
    
    scrollDownContainer.style.display ='flex';
  }
  
  
});



//scroll down container click to scroll 


scrollDownContainer.addEventListener('click', () => {
  
     document.getElementById('about-me').scrollIntoView();       
    
  
  
});


//scroll to top function

const scrollToTop = document.getElementsByClassName('stt-button')[0];


scrollToTop.addEventListener('click', () => {
  window.scroll(0,0);
});

//scroll to top button appear after welcome
if( window.matchMedia('only screen and (max-device-width: 718px)').matches === false) {

window.addEventListener('scroll', () => {


  
  if(window.scrollY < 115) {
    
    scrollToTop.style.display = 'none';
    
  }else if(window.scrollY > 115){
    
    scrollToTop.style.display = 'block';
  }
});

}


//form validation on submit 

function validateForm() {

  let name = document.forms["form"]["name"].value;

  let email = document.forms["form"]["email"].value;

  let emailCheck = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
console.log(name,email);

  if (name == "" ) {
    alert("Name must be filled out and contain only letters");
    return false;
  } else if (!email.match(emailCheck)) {
    alert("Email must be valid email address ex: email@website.com");
    return false;
  }
} 