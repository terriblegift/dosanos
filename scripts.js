document.getElementById('randomMp3Btn').addEventListener('click', function() {
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
    
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const selectedAudio = audioFiles[randomIndex];
    
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = selectedAudio;
    const giftBox = document.getElementById('giftBox');
    giftBox.classList.add('show-gift');

    // Delay to simulate opening the gift box
    setTimeout(() => {
        document.querySelector('.lid').classList.add('open-lid');
        document.querySelector('.audio-container').classList.add('show-audio');
        audioPlayer.play(); // Automatically start playing the audio
    }, 800); // Match this delay with the transition time of the lid
});