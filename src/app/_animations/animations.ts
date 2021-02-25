import {style, state, animate, transition, trigger, animation, useAnimation} from '@angular/animations';
export let fadeInAnimation = animation([
    style({opacity : 0}),
    animate('{{duration}} {{easing}}')
], {
    params: {
        duration: '500ms',
        easing: 'ease-in'
    }
});

export let fade = trigger('fade', [
    transition(':enter',
        useAnimation(fadeInAnimation)
    )]
);
