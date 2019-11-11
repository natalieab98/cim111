var ackClicked = 0;
$(document).ready(function() {

			$("#ack").click(function() {
				console.log(ackClicked)
				if (ackClicked === 0) {
					$("#ack").css("font-size", "200px");
					ackClicked = 1;
				} else {
					$("#ack").css("font-size", "50px");
					ackClicked = 0;
				}
			});

			$("#galley").mouseover(function() {
				$(".grid-photo1").css("width", "400px");
			})
			$("#galley").mouseleave(function() {
				$(".grid-photo1").css("width", "200px");
			})
			$("#sandwhich").mouseover(function() {
				$(".grid-photo2").css("width", "400px");
			})
			$("#sandwhich").mouseleave(function() {
				$(".grid-photo2").css("width", "200px");
			})
			$("#deck").mouseover(function() {
				$(".grid-photo3").css("width", "400px");
			})
			$("#deck").mouseleave(function() {
				$(".grid-photo3").css("width", "200px");
			})
			$("#sunset").mouseover(function() {
				$(".grid-photo4").css("width", "400px");
			})
			$("#sunset").mouseleave(function() {
				$(".grid-photo4").css("width", "200px");
			})
			$("#club").mouseover(function() {
				$(".grid-photo5").css("width", "350px");
			})
			$("#club").mouseleave(function() {
				$(".grid-photo5").css("width", "200px");
			})
			// $("#deli").mouseover(function() {
			// 	$(".grid-photo2").css("width", "300px");
			// })
			// $("#deli").mouseleave(function() {
			// 	$(".grid-photo2").css("width", "200px");
			// })
			//

			$("#salmon").mouseover(function() {
				$(".grid-photo6").css("width", "400px");
			})
			$("#salmon").mouseleave(function() {
				$(".grid-photo6").css("width", "200px");
			})
			// $("#breeze").mouseover(function() {
			// 	$(".grid-photo7").css("width", "400px");
			// })
			// $("#breeze").mouseleave(function() {
			// 	$(".grid-photo7").css("width", "200px");
			// })
			$("#oysters").mouseover(function() {
				$(".grid-photo7").css("width", "400px");
			})
			$("#oysters").mouseleave(function() {
				$(".grid-photo7").css("width", "200px");
			})
			$("#lobster").mouseover(function() {
				$(".grid-photo8").css("width", "400px");
			})
			$("#lobster").mouseleave(function() {
				$(".grid-photo8").css("width", "200px");
			})
			$("#myBtn").click(function(){
				$("#places").toggle()
				$("#myBtn").html("Hide this info")
			});

		});
