import showHome from "./home";
import showInfo from "./contact";
import showMenu from "./menu";

function createHeader(){
    const header = document.createElement('header');
    header.setAttribute('class','header');

    const restaurantName = document.createElement('h1');
    restaurantName.setAttribute('class','restaurantName');
    restaurantName.textContent="Turpial cuisine";

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header
}

function createNav(){

    const nav = document.createElement('nav');
    nav.setAttribute('class','buttonsContainer')

    const homeBtn = document.createElement('div');
    homeBtn.setAttribute('class','button');
    homeBtn.textContent="Home";
    homeBtn.addEventListener("click", (e) => {
            if (e.target.classList.contains("active")) return;
            setActive(homeBtn);
            removeBlankDiv()
            showHome();

          })

    const menuBtn = document.createElement('div');
    menuBtn.setAttribute('class','button');
    menuBtn.textContent="Menu";
    menuBtn.addEventListener("click", (e) => {
            if (e.target.classList.contains("active")) return;
            setActive(menuBtn);
            removeBlankDiv()
            showMenu();
        })

    const infoBtn = document.createElement('div');
    infoBtn.setAttribute('class','button');
    infoBtn.textContent="Contact";
    infoBtn.addEventListener("click", (e) => {
            if (e.target.classList.contains("active")) return;
            setActive(infoBtn);
            removeBlankDiv()
            showInfo();
        })   
        
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(infoBtn);

    setActive(homeBtn)

return nav 
}

function creatBodyWrapper(){
    const wrapper = document.createElement('div')
    wrapper.setAttribute('id','wrapper')
   
    return wrapper
}

function removeBlankDiv(){
    const blankDiv = document.getElementById('bdiv')
    blankDiv.remove()
}

function createFooter(){
    const footer= document.createElement('footer');
    footer.setAttribute('id','footer');
    footer.textContent="Made by J.J. Pernia";

    return footer
}

function loadSkeleton(){
    const container = document.getElementById('content');

    container.appendChild(createHeader());
    container.appendChild(creatBodyWrapper())
    container.appendChild(createFooter());

    showHome();
} 

function setActive(btn){
    const buttons = document.querySelectorAll('.button')
    buttons.forEach((btn) => {
        if (btn !== this) {
          btn.classList.remove("active");
        }
      });
      btn.classList.add("active");
}

export {removeBlankDiv, setActive, menuBtn};
export default  loadSkeleton;

