// ==UserScript==
// @name         Wrap Pluses In Buttons
// @namespace    http://tampermonkey.net/
// @version      2024-10-31
// @description  Wrap svg.fa-plus in button elements to make them clickable with Vimium
// @author       You
// @match        https://www.perplexity.ai/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

        setInterval(wrapPlusesInButtons, 5000);
        console.log("wrapPlusesInButtons tampermonkey script loaded");



    function wrapPlusesInButtons() {
// Select all SVG elements with the class "fa"
const svgElements = document.querySelectorAll('svg.fa-plus');

// Loop through each SVG element
svgElements.forEach(svg => {
  // Check if the SVG element is already a child of a button element
  if (svg.parentNode.tagName.toLowerCase() !== 'button') {
    // Create a new button element
    const button = document.createElement('button');

    // Replace the SVG element with the button element in its parent
    svg.parentNode.replaceChild(button, svg);

    // Append the SVG element to the button element
    button.appendChild(svg);
        console.log("wrapped a plus")
  }
});
    }

})();
