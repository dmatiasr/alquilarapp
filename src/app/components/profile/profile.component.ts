import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

    @Input() property
    constructor(private route: ActivatedRoute){
        
    }
    ngOnInit(): void {
        console.log('INIT', this.property)
        
    }


 }