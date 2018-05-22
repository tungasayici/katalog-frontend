// JavaScript Document
/*
	Author: Batuhan Kök
*/


$(function() {
	
	// autocomplete
    $("#search").autocomplete({
		source: 'inc/tags_autocomplete.php',
		minLength: 1,
		delay: 300
	});

	$("#mobile-search").autocomplete({
		source: 'inc/tags_autocomplete.php',
		minLength: 1,
		delay: 300
    });
	// #autocomplete

});

// mobile menu
function openMobileSearchForm(){
	$("#mobile-search-form").toggle(200);
}
// #mobile menu