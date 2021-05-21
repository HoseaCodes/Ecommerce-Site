import axios from "axios";

const config = (states) => {
	const { setInfoImg } = states;
	return {
		placeholderText: "Enter your info here!",
		charCounterCount: false,
		imageUpload: true,
		imageMaxSize: 5 * 1024 * 1024,
		imageUploadMethod: "POST",
		imageAllowedTypes: ["jpeg", "jpg", "png"],
		imageUploadRemoteUrls: false,
		imageEditButtons: [
			"imageDisplay",
			"imageAlign",
			"imageInfo",
			"imageRemove",
		],
		toolbarButtons: {
			moreText: {
				buttons: [
					"bold",
					"italic",
					"underline",
					"strikeThrough",
					"subscript",
					"superscript",
					"fontFamily",
					"fontSize",
					"textColor",
					"backgroundColor",
					"inlineClass",
					"inlineStyle",
					"clearFormatting",
				],
			},
			moreParagraph: {
				buttons: [
					"alignLeft",
					"alignCenter",
					"formatOLSimple",
					"alignRight",
					"alignJustify",
					"formatOL",
					"formatUL",
					"paragraphFormat",
					"paragraphStyle",
					"lineHeight",
					"outdent",
					"indent",
					"quote",
				],
			},
			moreRich: {
				buttons: [
					"insertLink",
					"insertImage",
					"emoticons",
					"fontAwesome",
					"specialCharacters",
					"embedly",
					"insertHR",
				],
			},
			moreMisc: {
				buttons: [
					"undo",
					"redo",
					"fullscreen",
					"print",
					"getPDF",
					"spellChecker",
					"selectAll",
					"html",
					"help",
				],
				align: "right",
				buttonsVisible: 2,
			},
		},
		events: {
			"image.inserted": function (image) {
				const blobs = document.getElementsByClassName("fr-draggable");
				blobs[0].id = "blob1";
			},
			"image.beforeUpload": function (images) {
				if (document.getElementById("blob1")) {
					window.alert("Only 1 image allowed");
					return false;
				} else {
					const insertedImg = images["0"];
					setInfoImg(insertedImg);
				}
			},
		},
	};
};

export default config;
