const sidebarToggle = document.querySelector('.sidebar-toggle')
const closeSidebar = document.querySelector('.close-btn')
const sideBar = document.querySelector('.sidebar')

let status = false

sidebarToggle.addEventListener('click', openORclose)
closeSidebar.addEventListener('click', sidebarClose)

function openORclose(){
    if (status == false){
        status = true
        sideBar.classList.add('show-sidebar')
    }else{
        status = false
        sideBar.classList.remove('show-sidebar')
    }
}
function sidebarClose(){
    status = false
    sideBar.classList.remove('show-sidebar')
}