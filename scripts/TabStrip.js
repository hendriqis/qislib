$(function () {
	$('#tblTabMenuChild td').click(function () {
		$('#tblTabMenuChild td.selected').removeClass('selected');
		$(this).addClass('selected');
		$('.containerTabContent').filter(':visible').hide();
		$('#' + $(this).attr('contentid')).show();
	});
	$('#tblTabMenuChild td').first().click();
});