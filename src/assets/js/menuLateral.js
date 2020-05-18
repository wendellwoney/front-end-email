let show = true;

export const menuLateral = () => {
    
    const container = document.querySelector(".container");

    container.classList.toggle('containerMenu', show);
    show = !show;

}