// List videos from local directory
function listVideos() {
    var videosContainer = document.getElementById('videos-container');
  
    // Array of video file names
    var videoFiles = [
      'video1.mp4',
      'video2.mp4',
      'video3.mp4',
      'video4.mp4'
      // Add more video file names as needed
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
  
  // Play video by file name
  function playVideo(videoFile) {
    var videoUrl = 'videos-container/' + videoFile; // Replace with the path to your video files
    window.open(videoUrl);
  }
  
  // Call the function to list the videos
  listVideos();
  