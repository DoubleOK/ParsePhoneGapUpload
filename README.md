ParsePhoneGapUpload
===================

A working method for uploading files to Parse.com from Phonegap using the REST API

Notes:
- File: pass in a file from the Camera or Media Capture
- tempUploadName: what you are looking for here is the file URI without the 'file:/' prefix (i.e. /uploads/.../file.mp4
- Don't forget to put in your APP id and your REST Key
- If you are going to use this for different types of files make sure to add logic to change your Content-Type header

