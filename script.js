// 文件路径: my-cdn-test/script.js
document.addEventListener('DOMContentLoaded', function() {
    const messageDiv = document.getElementById('message');
    if (messageDiv) {
        messageDiv.textContent = 'Hello from jsDelivr! This script was loaded from the CDN.';
        messageDiv.style.color = 'green';
        messageDiv.style.fontWeight = 'bold';
    } else {
        console.log('Message div not found.');
    }
});