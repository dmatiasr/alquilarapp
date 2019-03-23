import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'list-all',
    templateUrl : './listall.component.html',
    styleUrls: ['./listall.component.css']
})
export class ListAllComponent {
    constructor(private route: ActivatedRoute){

    }

    ngOnInit(): void {
        let propertyType = this.route.snapshot.paramMap.get('typeProperty');
        console.log(propertyType)
    }
}