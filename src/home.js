function showHome(){
    

    const wrapper = document.getElementById('wrapper')
    const blankDiv = document.createElement('div')
    blankDiv.setAttribute('id','bdiv')

    
    const pageBody = document.createElement('div');
    pageBody.setAttribute('class','pageBody');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent="Welcome to our cousine"
    const menuButton = document.createElement('button')
    menuButton.setAttribute('id','goToMenu')
    menuButton.textContent="See our Menu"

    wrapper.appendChild(blankDiv);
    blankDiv.appendChild(pageBody)
    pageBody.appendChild(div);
    div.appendChild(h2);
    div.appendChild(menuButton);
 

    return {wrapper, blankDiv, pageBody, div, h2, menuButton}
}
export default showHome;