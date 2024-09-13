const VIDEO = document.getElementById('video');
const PLAY = document.getElementById('play');
const STOP = document.getElementById('stop');
const PROGRESS = document.getElementById('progress');
const TIMESTAMP = document.getElementById('timestamp');

// Play & Pause func
function toggleVideoStatus() {
    return VIDEO.paused ? VIDEO.play() : VIDEO.pause();
}

// Update play/pause icon
function updatePlayIcon() {
    return VIDEO.paused
        ? (PLAY.innerHTML = '<i class="fa-solid fa-play"></i>')
        : (PLAY.innerHTML = '<i class="fa-solid fa-pause"></i>');
}

// Update progress & time
function updateProgress() {
    PROGRESS.value = (VIDEO.currentTime / VIDEO.duration) * 100;

    // Get Minutes
    let mins = Math.floor(VIDEO.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    // Get Seconds
    let secs = Math.floor(VIDEO.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    TIMESTAMP.innerHTML = `${mins}:${secs}`;
}

// Set progress & time
function setVideoProgress() {
    VIDEO.currentTime = (+PROGRESS.value * VIDEO.duration) / 100;
}

// Stop video func
function stopVideo() {
    VIDEO.currentTime = 0;
    VIDEO.pause();
}

// Event listener
VIDEO.addEventListener('click', toggleVideoStatus);
VIDEO.addEventListener('pause', updatePlayIcon);
VIDEO.addEventListener('play', updatePlayIcon);
VIDEO.addEventListener('timeupdate', updateProgress);

PLAY.addEventListener('click', toggleVideoStatus);

STOP.addEventListener('click', stopVideo);

PROGRESS.addEventListener('change', setVideoProgress);
