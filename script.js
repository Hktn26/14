// Müzik çalmaya başlatma fonksiyonu
function startMusic() {
    var audio = document.getElementById('background-music');
    var startButton = document.getElementById('startButton');
    
    // Müzik çalmaya başlasın
    audio.play();

    // "Başlat" butonunu gizle
    startButton.style.display = 'none';
}

// Sayfa yüklendiğinde müzik çalmıyor, ama butona tıklanırsa başlıyor

// Mesajı göstermek için fonksiyon
function showMessage() {
    var messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
}
