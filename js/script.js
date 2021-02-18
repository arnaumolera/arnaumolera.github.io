/** TABS */
const tabs = document.querySelectorAll('[data-tab-target');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    const target = document.querySelector(tab.dataset.tabTarget);
    
    tabs.forEach(tab => {
      tab.classList.remove('active');
    })
    
    tab.classList.add('active');

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })

    target.classList.add('active');
  })
});


/** CLEAR FORM */
function clearForm() {
  document.getElementById("contact-form").reset();
}