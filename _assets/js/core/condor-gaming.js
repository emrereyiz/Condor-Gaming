var condorGaming = {
	animate: {
		run: function(){
	      $(".animate").each(function(index, item){
	          var $this = $(this),
	              time = $this.attr("data-time"),
	              type = $this.attr("data-type");
	              setTimeout(function(){
	                $this.addClass("animated "+type);
	              }, time);
	      });
		},
		init: function(){
			this.run();
		},
	},
	plugin: {
		slide: {
			run: function(){
				$('.owl-carousel').owlCarousel({
				    loop:true,
				    nav:false,
    				autoplay: true,
		            items:1,
		            dots: true,
				});
			},
			init: function(){
				this.run();
			},
		},
		init: function(){
			this.slide.init();
		},
	},
	nav: {
		$el: {
			_target: $("nav ul li"),
		},
		_hover: function(){
			var $el = this.$el._target;
			$el.mouseover(function(){
				var $this = $(this),
					$sub = $this.find("ul");
					if($this.hasClass("sub-menu")){
						$sub.stop().fadeIn();
						$sub.mouseleave(function(){
							$sub.stop().fadeOut();
						});
						$this.mouseleave(function(){
							$sub.stop().fadeOut();
						});
					}else{
						$(".sub-menu ul").stop().fadeOut();
					};
			});
		},
		init: function(){
			this._hover();
		},
	},
	init: function(){
		this.plugin.init();
		this.nav.init();
		this.animate.init();
	},
};

$(document).ready(function(){
	condorGaming.init();
});