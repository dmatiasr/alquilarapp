import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property.service/property.service'

@Component({
    selector: 'list-all',
    templateUrl : './listall.component.html',
    styleUrls: ['./listall.component.css']
})
export class ListAllComponent {
    properties = []
    
    constructor(private route: ActivatedRoute, private propertyService : PropertyService){

    }

    getProperties(typeProperty): void{
        this.properties = this.propertyService.getProperty(typeProperty);
    }

    ngOnInit(): void {
        let propertyType = this.route.snapshot.paramMap.get('typeProperty');
        this.getProperties(propertyType);
    }
}