var scheduleTab = function() {
		$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());

		$(window).resize(function(){
			$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());
		});

		$('.schedule a').on('click', function(event) {
			
			event.preventDefault();

			var $this = $(this),
				sched = $this.data('sched');

			$('.schedule a').removeClass('active');
			$this.addClass('active');
			$('.schedule-content').removeClass('active');

			$('.schedule-content[data-day="'+sched+'"]').addClass('active');
$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());
		});
	};

	scheduleTab();


$('.fechas a').on('click', function(event) {
			
			event.preventDefault();

			var $this = $(this),
				link = $this.data('link');
			
			$('#videoCharlaAbierta').attr('src', 'https://www.youtube.com/embed/'+link);
			console.log($('#videoCharlaAbierta').attr('src'))
			$('.fechas a').removeClass('active');
			$this.addClass('active');
})