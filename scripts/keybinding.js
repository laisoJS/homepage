/*
    Focus on the seachbar when usign these shortcut:

    ctrl + shift
    ctrl + space
    shift + space
*/
const focusearch = document.getElementById("searchbar");
document.onkeydown = function(e) {
    if (e.ctrlKey && e.shiftKey) {
        focusearch.focus();
    }

    if (e.ctrlKey && e.which == 32) {
        focusearch.focus();
    }

    if (e.shiftKey && e.which == 32) {
        focusearch.focus();
    }
}