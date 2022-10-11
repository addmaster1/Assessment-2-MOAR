//NOTE - adding animation to fetching error message

const formValidation = {
	formValidator() {
		var noImage = document.getElementById("no.Images floatingInputValue").value
		noImage = Number(noImage)

		//NOTE - Checking that number is above 0
		if (noImage != 0) {
			console.log("ERROR")
			noImageError.style.visibility = "hidden"
		} else if (noImage == 0) {
			console.log("ERROR - 0")
			noImageError.style.visibility = "visible"
		}

		// NOTE Checking Say text
		var sayLength = document.getElementById("sayTextValue")
		var sayError = document.getElementById("sayError")
		if (say.checked == true) {
			console.log("YEAH")
			if (sayLength.value.length == 0) {
				console.log("ERROR - none")
				sayError.style.visibility = "visible"
			} else if (sayLength.value.length != 0) {
				sayError.style.visibility = "hidden"
				anime({
					targets: "#error-message-fetching",
					duration: 800,
					translateY: 150,
				})
			}
		}
	},
}
