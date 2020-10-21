import '../styles/styles.scss';
import './rental-bikes/app.js';

var mainAnimationTl = gsap.timeline();
mainAnimationTl
  .to('.main-hero', {duration: 2, opacity: 1, })
  .to('.main-hero__title-first', {x: 0, duration: 0.8})
  .to('.main-hero__title-second', {x: 0, duration: 0.8}, '-=0.8')
  .to('.main-header', {duration: 2, opacity: 1, }, '+=1')