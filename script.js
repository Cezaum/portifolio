let calcScrollValue = () => {
    let scrollProgress = document.getElementById
    ("progresstop");
    let progressValue = document.getElementById
    ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let calcScrollValue = Math.round((pos * 100) / calcHeight);
    if (pos>100) {
    scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

};




window.onscroll = calcScrollValue
window.onload = calcScrollValue