
/*-------------------------------------------
	Testing for Touch
-------------------------------------------*/

// Notes...


/* Touch */


if (Modernizr.touch) {

	(function($){


		$(document).ready(function (){


			/*-------------------------------------------
				Video
			-------------------------------------------*/

			// Notes...


			/* Corporate Marketing and Product Demo */


			$('#utilityvault').after('<video width="211" height="140" src="http://coastlinevideo.com/videos/utilityvault.mp4" poster="http://coastlinevideo.com/images/UtilityVaultdemo_1191539383.jpg"></video>');

			$('#utilityvault').remove();


			/* Plastic Engineering & Development (PEDI) */


			$('#pedidemo').after('<video width="211" height="140" src="http://coastlinevideo.com/videos/pedidemo_1.mp4" poster="http://coastlinevideo.com/images/PEDIdemo_1191539248.jpg"></video>');

			$('#pedidemo').remove();


			/* Patient Information & Employee Training */


			$('#hauptlab').after('<video width="211" height="140" src="http://coastlinevideo.com/videos/hauptlab.mp4" poster="http://coastlinevideo.com/images/Hauptlabdemo_1191539081.jpg"></video>');

			$('#hauptlab').remove();


			/* Alvarado Manufacturing */


			$('#alvaradodemo').after('<video width="211" height="140" src="http://coastlinevideo.com/videos/alvaradodemo.mp4" poster="http://coastlinevideo.com/images/Alvaradodemo_1191539021.jpg"></video>');

			$('#alvaradodemo').remove();


			/* Association Montessori International */


			$('#montessoridemo').after('<video width="211" height="140" src="http://coastlinevideo.com/videos/montessoridemo.mp4" poster="http://coastlinevideo.com/images/Montessoridemo_1191539184.jpg"></video>');

			$('#montessoridemo').remove();


			/* Skin-Medica */


			$('#skinpeel').after('<video width="211" height="140" src="http://coastlinevideo.com/videos/skinpeel.mp4" poster="http://coastlinevideo.com/images/SkinMedicademo_1191539330.jpg"></video>');

			$('#skinpeel').remove();


			/* Hong Gia Noi Cong */


			$('#honggia').after('<video width="211" height="140" src="http://coastlinevideo.com/videos/honggia.mp4" poster="http://coastlinevideo.com/images/HongGiademo_1191539132.jpg"></video>');

			$('#honggia').remove();


		});


	})(window.jQuery);


/* Non-Touch */


} else {


	(function($){


		$(document).ready(function (){


			/*-------------------------------------------
				Video
			-------------------------------------------*/

			// Notes...


		});


	})(window.jQuery);


};