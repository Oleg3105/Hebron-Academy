document.getElementById('subscribe').onclick = function () {
    document.getElementById('hidden').style.height = '100%';
    document.getElementById('hidden').style.overflow = 'visible';
}
document.getElementById('delete').onclick = function () {
    document.getElementById('hidden').style.overflow = 'hidden';
    document.getElementById('hidden').style.height = '0';
}
document.getElementById('submit').onclick = function () {
    document.getElementById('hidden').style.overflow = 'hidden';
    document.getElementById('hidden').style.height = '0';
    alert("Thank you! Have a nice day :)")
}