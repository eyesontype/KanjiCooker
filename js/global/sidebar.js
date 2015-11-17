$('body').on('click', '.title', function() {
	closeSideDescription();
	$('.type-selection__body').addClass('active');
	$(this).parent().find('.sidebar--description').addClass('show');
});

$('body').on('click', '#language-select', function() {
	if(!$(this).hasClass('open')) { 
		closeMenu();
		$('.sidebar--language').addClass('open');
	} else {
		closeMenu();
	}
});

$('body').on('click', function() {
	if (!$(event.target).closest('.sidebar--description, .type-selection__body .title').length) {
		closeSideDescription();
	}
});

$('body').on('click', '.sidebar--description .btn--close', function() {
	closeSideDescription();
});

function closeSideDescription() {
	// $('.type-selection__body').removeClass('active');
	$('.sidebar--description').removeClass('show');
}