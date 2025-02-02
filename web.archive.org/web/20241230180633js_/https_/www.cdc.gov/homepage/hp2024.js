var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Raw JS */
// Search fix
const searchForms = [document.querySelector('#cdc-desktop-search-form'), document.querySelector('#cdc-mobile-search-form')];
searchForms.forEach(form => {
	if (!form) { return }
	form.action = 'https://web.archive.org/web/20241230180633/https://search.cdc.gov/search/';
	if (form.querySelector('[type="search"]')) {
		form.querySelector('[type="search"]').name = 'query';
	}
})

// // @TODO: Remove at www launch 2024/04

// A-Z Temp overrides
document.querySelector('.nav-item.healthtopics .dropdown-menu-list-title a').href = '/health-topics.html';
try {
	document.querySelectorAll('section.health-topics .a2z a').forEach(link => { link.href= `/health-topics.html#${link.innerText.trim()}`; })
} catch {}

// nav bar
document.querySelectorAll('.navbar-collapse .nav-item > a.nav-link').forEach(a => a.href='#');

// hero carousel links
document.querySelectorAll('#hero-carousel .carousel-item').forEach(slide => {
    const link = slide.querySelector('a');
    if (link?.href) {
        slide.addEventListener('click', () => window.location = link.href);
    }
})
/* End Raw JS */


}
/*
     FILE ARCHIVED ON 18:06:33 Dec 30, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:43:19 Feb 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.526
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.01
  cdx.remote: 6.487
  LoadShardBlock: 1396.776 (3)
  PetaboxLoader3.resolve: 1551.622 (5)
  PetaboxLoader3.datanode: 242.04 (5)
  load_resource: 476.674 (2)
*/