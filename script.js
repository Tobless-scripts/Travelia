function showSideBar() {
    const sidebar = document.querySelector('.container');
    sidebar.style.display = "flex";
    document.querySelector('.content').classList.toggle('blurred');
}

function hideSideBar() {
    const sidebar = document.querySelector('.container');
    sidebar.style.display = "none";
    document.querySelector('.content').classList.remove('blurred'); 
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.ph');
hiddenElements.forEach((el) => observer.observe(el));
