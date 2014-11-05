function uploadService(File)
{
	var tempUploadName = File.fullPath.substr(5);
	updateStatus("uploadService(): tempUploadName - " + tempUploadName);
		
	var serverUrl = 'https://api.parse.com/1/files/videoUpload.mp4';

	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, 
		function(fileSystem){
			fileSystem.root.getFile(tempUploadName, null, 
				function(fileEntry){
					fileEntry.file(
						function(file) {
							var reader = new FileReader();
							reader.onloadend = function(evt) {
								  $.ajax({
								    type: "POST",
								    beforeSend: function(request) {
								      request.setRequestHeader("X-Parse-Application-Id", 'YourAppId');
								      request.setRequestHeader("X-Parse-REST-API-Key", 'YourRestAPIKey');
								      request.setRequestHeader("Content-Type", "video/mp4");
								    },
								    url: serverUrl,
								    data: evt.target.result,
									processData: false,
									contentType: false,
								    success: function(data) {
								      console.log("uploadService(): data.url - " + data.url);
								    },
								    error: function(data) {
								      var obj = jQuery.parseJSON(data);
								      console.log("uploadService(): error - " + obj.error);
								    }
								  });
							};
							reader.readAsArrayBuffer(file);
						}, fail);
				},
				fail);
		}, fail);
}

function fail(evt) 
{
	console.log(JSON.stringify(evt));
}