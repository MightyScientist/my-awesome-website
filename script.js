function showMessage() {
    alert('You clicked the button! Congrats!');
    document.querySelector("h1").innerText = "Thank you for visiting!";
}

function toggleInterests() {
    const interestsList = document.getElementById('interests');
    interestsList.style.display = interestsList.style.display === 'none' ? 'block' : 'none';
}
