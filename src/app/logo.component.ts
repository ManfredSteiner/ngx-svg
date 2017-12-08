import { Component } from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: 'logo.component.html'
})
export class LogoComponent {

    public circle: number [] = [ 0, 0 ];

    constructor () {}

    setCircleLocation (event) {
        if (event.clientX) {
            this.circle[0] = event.clientX - 150;
        }
        if (event.clientY) {
            this.circle[1] = event.clientY - 150;
        }
    }

}
