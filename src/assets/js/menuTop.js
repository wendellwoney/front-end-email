let show = true;

export const menuTop = () => {
    
    const menuTop = document.querySelector(".menuTop");
    const avatar = document.querySelector(".avatar");
    
    menuTop.classList.toggle("on", show);
    show = !show;

}
