jQuery(document).ready(function($) {
	$('.menu.ui-sortable .menu-item-depth-0 .menu-item-title').prepend('<i id="expandler" class="dashicons dashicons-arrow-down-alt2"></i>&nbsp;');
    $('.menu.ui-sortable .menu-item-depth-1').hide();
    $('.menu.ui-sortable .menu-item-depth-0 #expandler').click( function () {
        $(this).toggleClass('dashicons-arrow-down-alt2').toggleClass('dashicons-arrow-up-alt2').toggleClass('open');
        $(this).closest('.menu-item-handle').toggleClass('dropped');
        $(this).closest('.menu-item-depth-0').nextUntil('.menu-item-depth-0', '.menu.ui-sortable .menu-item-depth-1').toggle();
    });

    $('.menu.ui-sortable .menu-item-depth-1 .menu-item-title').prepend('<i id="expandler" class="dashicons dashicons-arrow-down-alt2"></i>&nbsp;');
    $('.menu.ui-sortable .menu-item-depth-2').hide();
    $('.menu.ui-sortable .menu-item-depth-1 #expandler').click( function () {
        $(this).toggleClass('dashicons-arrow-down-alt2').toggleClass('dashicons-arrow-up-alt2').toggleClass('open');
        $(this).closest('.menu-item-handle').toggleClass('dropped');
        $(this).closest('.menu-item-depth-1').nextUntil('.menu-item-depth-1', '.menu.ui-sortable .menu-item-depth-2').toggle();
    })
});
