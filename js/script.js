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
/*jslint indent: 2 */
/*global CRM, cj, ts */
 
cj(function ($, ts) {
  'use strict';
	
	// log
	console.log("translation js loaded 2015");
	console.log(document.getElementById("divjs"));
	
	// fill div
	var div = document.getElementById('divjs');
	div.innerHTML = div.innerHTML + ts('Translation from javascript');
	
}(CRM.$, CRM.ts('be.ctrl.translation')));
