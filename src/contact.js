import Chef from './Manager1a.jpg'

function showInfo(){


    const wrapper = document.getElementById('wrapper')
    const blankDiv = document.createElement('div')
    blankDiv.setAttribute('id','bdiv')

    
    const managerDisplayer = document.createElement('div');
    managerDisplayer.setAttribute('id','managerDisplay');
    

    wrapper.appendChild(blankDiv);
    blankDiv.appendChild(managerDisplayer);
    managerDisplayer.appendChild(createContact());



    return {ul, blankDiv, wrapper, managerDisplayer}

}

function createContact(){
    const ul = document.createElement('ul');
    let liImg = document.createElement('li')
    let liCaption = document.createElement('li')
    let liEmail = document.createElement('li')
    let img = document.createElement('img')
    img.src= Chef

    liImg.appendChild(img);
    liCaption.textContent = "Contact our chef, a very talented cook with decades of experience";
    liEmail.textContent ="Ryuk@K9chef.com";

    ul.appendChild(liImg)
    ul.appendChild(liCaption)
    ul.appendChild(liEmail)
    return ul
}

export default showInfo;