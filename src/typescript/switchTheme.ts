// Dark - Light function
export function switchTheme():void{
    const divSwitch:HTMLDivElement = document.querySelector(".switch-theme")!;
    const body:HTMLElement = document.getElementById("body")!;

    divSwitch.addEventListener("click",e => body.classList.toggle("light"));
}