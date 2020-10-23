const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e){
    removeShow();
// Add border to current tab
    this.classList.add('tab-border');
    //Grab content items from DOM 
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // add show class
    tabContentItem.classList.add('show'); 
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));    

}



// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
