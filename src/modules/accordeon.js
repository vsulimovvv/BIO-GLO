const accordeon = () => {
  const accordionTwo = document.querySelector('#accordion-two'),
    panels = accordionTwo.querySelectorAll('.panel'),
    panelCollapse = accordionTwo.querySelectorAll('.panel-collapse'),
    panelHeading = accordionTwo.querySelectorAll('.panel-heading');

  for (let i = 0; i < panelHeading.length; i++) {
    panelHeading[i].addEventListener('click', event => {
      event.preventDefault();
      for (let k = 0; k < panels.length; k++) {
        panelCollapse[k].classList.remove('in');
      }
      panelCollapse[i].classList.toggle('in');
    });
  }
};
export default accordeon;