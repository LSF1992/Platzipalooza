$(document).foundation()

$('[data-toggle-dia]').click(function onClick(ev){
	const panel = $(this).data('toggleDia');
	$('#lineup-tabs').foundation('selectTab',panel);
})

const $offCanvas = $('#offCanvas');
const $iticky = $('#sticky');
const $drilldown = $('[data-drilldown]');

$offCanvas.find('li').click((ev)=>{
	$drilldown.foundation('_hideAll');
	$offCanvas.foundation('close');
	setTimeout(()=>{
		$sticky.css('left','0px');
	},300)
	
})