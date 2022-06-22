import Arepa from './Arepas.jpg';
import Pabellon from './Pabellon.jpg';
import Torta from './Tres_Leches.jpg';


function showMenu(){

    const wrapper = document.getElementById('wrapper')
    const blankDiv = document.createElement('div')
    blankDiv.setAttribute('id','bdiv')

    const menuDisplay = document.createElement('div');
    menuDisplay.setAttribute('id','menuDisplay')

    wrapper.appendChild(blankDiv);
    blankDiv.appendChild(menuDisplay);

    const arepa = new Dish('Arepas', Arepa, 'A Classic arepa filled with shreddred meat and soute with the venezuelan sofrito');
    const pabellon = new Dish('Pabellon', Pabellon, 'A plate made of rice, black beans, shreddred meat, fried egg and fried platain');
    const torta = new Dish('Torta', Torta, 'Cake bath in a mix of milks, topped with chantilly and powdered cocoa')


    menuDisplay.appendChild(arepa.dishList());
    menuDisplay.appendChild(pabellon.dishList());
    menuDisplay.appendChild(torta.dishList());


    return {blankDiv, wrapper, menuDisplay, arepa, pabellon, torta}
}

function Dish(name, image, description) {
    this.name = name;
    this.image = image;
    this.description = description;

    this.dishList = function() {
        const div = document.createElement('div')
        div.setAttribute('class', 'dish')
        const ol = document.createElement('ol');
        let liName = document.createElement('li')
        let liImg = document.createElement('li')
        let liDescription = document.createElement('li')
        let img = document.createElement('img');
        img.src = image;

        liName.textContent = name
        liImg.appendChild(img);
        liDescription.textContent = description;

        div.appendChild(ol)
        ol.appendChild(liName)
        ol.appendChild(liImg)
        ol.appendChild(liDescription)
return div
    }}

export default showMenu