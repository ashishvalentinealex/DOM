function showAlert() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        alert(`Hello, ${name}!`);
    } else {
        alert('Please enter your name!');
    }
}