(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

let side = 1;

function change_profile()
{
  if(side == 1)
  {
    document.getElementById("profileImage").src = 'img/profile2.jpg';
    side = 2;
  }
  else
  {
    document.getElementById("profileImage").src = 'img/profile.jpg';
    side = 1;
  }
}

// When the user clicks or hovers over <div>, open the popup
function popUpFunction(val) 
{
  const popup = document.getElementById(val);
  popup.classList.toggle("show");
}


// Project Slideshow
const mySites = [
    { name: "DnD Dice Roller", url: "https://diceroller.neocities.org", description: "A dice roller based on the different ways you roll dice in a dnd game"},
    { name: "When Are The Jays On?", url: "https://arethejayson.vercel.app/",  description: "A website to help Blue Jay fans find out when and where the Jays are playing."},
    { name: "Barbie Digital Radio", url: "https://heather-meatherall.github.io/BarbieDigitalRadio/",  description: "A music player themed after the Babrie Boombox from the 1990s."},
    { name: "Heather Meatherall's Poetry Portfolio", url: "https://heather-meatherall.github.io/PoetryPortfolio/",  description: "Heather Meatherall's Poetry Portfolio"},
    { name: "Comparing DnD Stats", url: "https://heather-meatherall.github.io/DnD_Stats/",   description: "A data visualization of dungeons and dragons stats, both real world and in game"},
];

function changeSite(val)
{
  const len = mySites.length;
  const link = document.getElementById("link");
  const header = document.getElementById("header");
  const iframeLink = document.getElementById("iframeLink");
  const description = document.getElementById("description");

  let site = (o => o.name === header.textContent);
  let siteIndex = mySites.findIndex(site);

  if (val == 'back')
  {
    console.log(siteIndex == '0');
    if (siteIndex == '0')
    {
      link.setAttribute('href', mySites.at(-1).url);
      header.textContent = mySites.at(-1).name;
      iframeLink.setAttribute('src', mySites.at(-1).url)
      description.textContent = mySites.at(-1).description;
    }
    else
    {
      link.setAttribute('href', mySites[siteIndex-1].url);
      header.textContent = mySites[siteIndex-1].name;
      iframeLink.setAttribute('src', mySites[siteIndex-1].url)
      description.textContent = mySites[siteIndex-1].description;
    }

  }
  else
  {
    if (siteIndex != len-1)
    {
      link.setAttribute('href', mySites[siteIndex+1].url);
      header.textContent = mySites[siteIndex+1].name;
      iframeLink.setAttribute('src', mySites[siteIndex+1].url)
      description.textContent = mySites[siteIndex+1].description;
    }
    else
    {
      link.setAttribute('href', mySites[0].url);
      header.textContent = mySites[0].name;
      iframeLink.setAttribute('src', mySites[0].url)
      description.textContent = mySites[0].description;
    }
  }
}


