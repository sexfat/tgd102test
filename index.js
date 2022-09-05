console.log('webpack ok');
import $ from 'jquery';
import {gsap} from 'gsap';

$('body').css('background-color' , 'red');
gsap.to('.box' , {
    x : 400,
    y: 200,
    duration: 4,
    rotation : 270,
    scale : 2,
    backgroundColor : 'yellow',
    borderRadius : '50%',
    repeat : -1,
    yoyo: true

})
