// Dark - Light function
export function switchTheme():void{
    const target = document.querySelector(".switch-theme") as HTMLDivElement;
    const body = document.getElementById("body") as HTMLBodyElement;

    target.addEventListener("click",() =>{ body.classList.toggle("light"); });
}