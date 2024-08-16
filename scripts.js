let lastPlayedIndex = -1; 
document.getElementById('randomMp3Btn').addEventListener('click', function() {
    document.getElementById('backgroundMusic').volume = 0.075;  // Adjust volume as needed
    const audioFiles = [
        'jasperlion.mp3',  // Replace these with actual file paths
        'elvisworm.mp3',
        'piedpiper.mp3',
        // 'audio4.mp3',
        // 'audio5.mp3',
        // 'audio6.mp3',
        // 'audio7.mp3',
        // 'audio8.mp3',
        // 'audio9.mp3',
        // 'audio10.mp3'
    ];
    
    const backgroundMusic = document.getElementById('backgroundMusic');
        // Start the background music if it is paused
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * audioFiles.length);
    } while (randomIndex === lastPlayedIndex && audioFiles.length > 1);

    lastPlayedIndex = randomIndex; // Update the last played index
    const selectedAudio = audioFiles[randomIndex];
    
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = selectedAudio;

    // Hide the MP3 player container before showing the loading bar
    const mp3Container = document.getElementById('mp3Container');
    mp3Container.classList.remove('reveal-mp3');
    setTimeout(() => {
        mp3Container.classList.remove('show-mp3');
    }, 500);  // Allow the fade-out effect to complete

    // Show the loading bar
    const loadingBarContainer = document.getElementById('loadingBarContainer');
    const loadingBar = document.getElementById('loadingBar');
    loadingBarContainer.style.display = 'block';
    
    // Reset the width of the loading bar before starting the animation
    loadingBar.style.width = '0';

    // Gradually increase the width of the loading bar
    setTimeout(() => {
        loadingBar.style.transition = 'width 3s linear';  // Ensure the transition is applied
        loadingBar.style.width = '100%';  // Start the loading animation
    }, 10);  // Small delay to ensure the transition takes effect

    // After the loading bar finishes, reveal the MP3 player
    setTimeout(() => {
        loadingBarContainer.style.display = 'none';
        mp3Container.classList.add('show-mp3');
        setTimeout(() => {
            mp3Container.classList.add('reveal-mp3');
            audioPlayer.play(); // Automatically start playing the audio
        }, 100); // Delay to smoothly transition the reveal
    }, 3010); // Duration matching the width transition of the loading bar (3000ms + 10ms delay)
});