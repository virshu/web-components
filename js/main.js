class Slider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="bg-overlay"></div><div class="thumb"></div>';
    this.style.display = 'inline-block';
    this.style.position = 'relative';
    this.style.width = '500px';
    this.style.height = '50px';

    this.querySelector('.bg-overlay').style.width = '100%';
    this.querySelector('.bg-overlay').style.height = '100%';
    this.querySelector('.bg-overlay').style.position = 'absolute';
    this.querySelector('.bg-overlay').style.backgroundColor = this.getAttribute('backgroundcolor') || 'red';

    this.querySelector('.thumb').style.marginLeft = '100px';
    this.querySelector('.thumb').style.width = '5px';
    this.querySelector('.thumb').style.height = 'calc(100% - 5px)';
    this.querySelector('.thumb').style.position = 'absolute';
    this.querySelector('.thumb').style.border = '3px solid white';
    this.querySelector('.thumb').style.borderRadius = '3px';
  }
}
if (!customElements.get('wcia-slider')) {
  customElements.define('wcia-slider', Slider);
}
