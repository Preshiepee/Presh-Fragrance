// Function to handle WhatsApp messages
function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const msg = document.getElementById('message').value;
    const phone = "2348162134867"; // Your number

    if(name && msg) {
        const url = `https://wa.me/${phone}?text=Hello Presh Fragrance! My name is ${name}. ${msg}`;
        window.open(url, '_blank');
    } else {
        alert("Please fill in your name and message first!");
    }
}

// Function to handle Email
function sendEmail() {
    const name = document.getElementById('name').value;
    const msg = document.getElementById('message').value;
    const email = "preshfragrance@example.com"; // Change to your email

    if(name && msg) {
        const subject = encodeURIComponent(`Inquiry from ${name}`);
        const body = encodeURIComponent(msg);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    } else {
        alert("Please fill in your name and message first!");
    }
}

// Quick order button
function orderProduct(productName) {
    const phone = "2348162134867";
    const url = `https://wa.me/${phone}?text=I would like to order: ${productName}`;
    window.open(url, '_blank');
}