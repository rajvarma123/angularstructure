
async function loadFaceDetector(){
    const url = 'static/video_models/'
    await facequery.nets.ssdMobilenetv1.load(url);
}
