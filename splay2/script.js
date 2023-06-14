
function listVideos() {
    var videosContainer = document.getElementById('videos-container');
  
    
    var videoFiles = [
      'video1.mp4',
      'video2.mp4',
      'video3.mp4',
      'video4.mp4'
      
    ];
  
    videoFiles.forEach(function(videoFile) {
      var videoItem = document.createElement('div');
      videoItem.className = 'video-item';
      videoItem.innerHTML = videoFile;
      videoItem.addEventListener('click', function() {
        playVideo(videoFile);
      });
      videosContainer.appendChild(videoItem);
    });
  }
  
 
  function playVideo(videoFile) {
    var videoUrl = 'videos-container/' + videoFile; 
    window.open(videoUrl);
  }
  
  
  listVideos();
  