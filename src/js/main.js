import {setScrollWidth} from './utils/scroll-width';
import {iosVhFix} from './utils/ios-vh-fix';
import {burger} from './modules/burger';
import {draftSlider} from './modules/draft-slider';
import {basicSlider} from './modules/basic-slider';
import {productsSlider} from './modules/products-slider';


window.addEventListener('DOMContentLoaded', () => {
  setScrollWidth();
  iosVhFix();
});

// в load следует добавить скрипты, не участвующие в работе первого экрана
window.addEventListener('load', () => {
  burger();
  draftSlider();
  basicSlider();
  productsSlider();
});
