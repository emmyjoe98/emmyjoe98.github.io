const day = {day: 'numeric', month: 'numeric', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', day);


function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}
