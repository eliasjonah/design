import {setScrollWidth} from './utils/scroll-width';
import {iosVhFix} from './utils/ios-vh-fix';
import {headerPopup} from './modules/header-popup';
import {draftSlider} from './modules/draft-slider';
import {basicSlider} from './modules/basic-slider';
import {productsSlider} from './modules/products-slider';


window.addEventListener('DOMContentLoaded', () => {
  setScrollWidth();
  iosVhFix();
});

// в load следует добавить скрипты, не участвующие в работе первого экрана
window.addEventListener('load', () => {
  headerPopup();
  draftSlider();
  basicSlider();
  productsSlider();
});
