class Slider extends HTMLElement {
  connectedCallback() {
    alert('hi from Slider');        1
  }
}
if (!customElements.get('wcia-slider')) {
  customElements.define('wcia-slider', Slider);
}
