
document.getElementById('calc-form').addEventListener('submit', solveProblem);
	var subBtn = document.getElementById('submit');
	subBtn.addEventListener('click', solveProblem);

	var msg = document.getElementById('ansText');

	function solveProblem (e) {
		e.preventDefault();

		subBtn.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Calculating...";
		subBtn.disabled="disabled";

		var num1 = document.getElementById('calNo1').value;
		var num2 = document.getElementById('calNo2').value;
		var num3 = document.getElementById('calNo3').value;

		if (num1 === "") {

				M.toast({html: "<b><i class='fa fa-times-circle'></i> First Number is required!</b>"});
				
				subBtn.innerHTML = "ADD NUMBERS";
				subBtn.disabled="";
				speak('Sorry, the first Number is required.');


		} else if(num2 === "") {

				M.toast({html: "<b><i class='fa fa-times-circle'></i> Second Number is required!</b>"});
				
				subBtn.innerHTML = "ADD NUMBERS";
				subBtn.disabled="";

				speak('Oops!, the second Number is required.');

		}else if(num3 === ""){

				M.toast({html: "<b><i class='fa fa-times-circle'></i> Third Number is required!</b>"});
				
				subBtn.innerHTML = "ADD NUMBERS";
				subBtn.disabled="";
				speak('Sorry, the third Number is also required.');

		}else{

			var result = parseInt(num1)+parseInt(num2)+parseInt(num3);

			msg.className = "alert alert-info text-center";

			msg.innerHTML = "<i class='fa fa-check-circle'></i> Answer = "+result;

			M.toast({html: 'Answer calculated successfully!'});

			subBtn.innerHTML = "ADD NUMBERS";
			subBtn.disabled="";
			speak('The answer is '+result+".");
		}



	}

