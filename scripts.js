// DESIGN

//console.log ('ran the contents of scripts.js') ;

//console.log('window.location.href:',window.location.href) ;

//console.log ("window.location.href.indexOf('documentary'):",window.location.href.indexOf('documentary')) ;

// Does the URL contain a link to a subnav item? If so, show the navigation. If not, hide it.
if ( window.location.href.indexOf('branding') != -1 || window.location.href.indexOf('packaging') != -1 || window.location.href.indexOf('poster') != -1 || window.location.href.indexOf('studies') != -1 ) {
  //    console.log ('show the nav.') ;

}
else {
  //    console.log ('hide the nav.') ;
  jQuery( "#design-dropdown" ).hide() ;
}

// When the work link is clicked,
// toggle the appearance of the #dropdown ul (subnav).
jQuery( "#design" ).on( 'click', function() {
  //    console.log ('clicked the work link') ;
  jQuery( "#design-dropdown" ).slideToggle();
}) ;



// PHOTO

//console.log ('ran the contents of scripts.js') ;

//console.log('window.location.href:',window.location.href) ;

//console.log ("window.location.href.indexOf('documentary'):",window.location.href.indexOf('documentary')) ;

// Does the URL contain a link to a subnav item? If so, show the navigation. If not, hide it.
if ( window.location.href.indexOf('photo_selected-works') != -1 || window.location.href.indexOf('photo_the-march') != -1 ) {
  //    console.log ('show the nav.') ;

}
else {
  //    console.log ('hide the nav.') ;
  jQuery( "#photo-dropdown" ).hide() ;
}

// When the work link is clicked,
// toggle the appearance of the #dropdown ul (subnav).
jQuery( "#photo" ).on( 'click', function() {
  //    console.log ('clicked the work link') ;
  jQuery( "#photo-dropdown" ).slideToggle();
}) ;



// BOOKS & ZINES

//console.log ('ran the contents of scripts.js') ;

//console.log('window.location.href:',window.location.href) ;

//console.log ("window.location.href.indexOf('documentary'):",window.location.href.indexOf('documentary')) ;

// Does the URL contain a link to a subnav item? If so, show the navigation. If not, hide it.
if ( window.location.href.indexOf('project-aaa') != -1 ) {
  //    console.log ('show the nav.') ;

}
else {
  //    console.log ('hide the nav.') ;
  jQuery( "#bz-dropdown" ).hide() ;
}

// When the work link is clicked,
// toggle the appearance of the #dropdown ul (subnav).
jQuery( "#bz" ).on( 'click', function() {
  //    console.log ('clicked the work link') ;
  jQuery( "#bz-dropdown" ).slideToggle();
}) ;



// MIXED MEDIA

//console.log ('ran the contents of scripts.js') ;

//console.log('window.location.href:',window.location.href) ;

//console.log ("window.location.href.indexOf('documentary'):",window.location.href.indexOf('documentary')) ;

// Does the URL contain a link to a subnav item? If so, show the navigation. If not, hide it.
if ( window.location.href.indexOf('mixed-media_selected-works') != -1 ) {
  //    console.log ('show the nav.') ;

}
else {
  //    console.log ('hide the nav.') ;
  jQuery( "#mixed-media-dropdown" ).hide() ;
}

// When the work link is clicked,
// toggle the appearance of the #dropdown ul (subnav).
jQuery( "#mixed-media" ).on( 'click', function() {
  //    console.log ('clicked the work link') ;
  jQuery( "#mixed-media-dropdown" ).slideToggle();
}) ;
