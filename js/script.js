/**
 * This is our closure - all of our code goes inside it
 *
 * This style of closure is provided by jquery and automatically
 * waits for document.ready. It also provides us with a local
 * alias of jQuery as $.
 *
 * ES5 specifies that the first line inside our closure
 * should be 'use strict';
 */
 
(function($, _, ts) {
	'use strict';
	
	// log
	console.log("be.ctrl.translation/js/script.js");

	// fill div
	$('div#divjs').append(ts("Translation from javascript double quote"));
  $('div#divjs').on('click', function() {
    // CRM alert
		alert(ts('Translation from javascript single quote'));
		alert(ts("Translation from javascript double quote"));
  });
})(CRM.$, CRM._, CRM.ts('be.ctrl.translation'));
