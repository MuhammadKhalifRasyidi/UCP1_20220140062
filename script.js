function showAlert() {
    alert("TERIMAKASIH sudah datang ke website saya, website ini hanya sebatas perkenalan saya. Memang tidak begitu penting dan menarik untuk kebanyakan orang tapi ini saya buat sebagai bentuk apresiasi karena telah berhasil membuat website pertama saya!");
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    let greeting;
    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    document.getElementById('greeting').textContent = greeting;
    document.getElementById('datetime').textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();


//pdw2024