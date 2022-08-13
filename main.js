function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';

    });
}

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});


