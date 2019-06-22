import { Component, NgZone, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property.service/property.service'
import { Property } from 'src/app/classes/property.component';
import { IndividualComponent } from '../individual/individual.component';


@Component({
    selector: 'list-all',
    templateUrl : './listall.component.html',
    styleUrls: ['./listall.component.css']
})
export class ListAllComponent{
    properties: Array<Property>;

    constructor(private route: ActivatedRoute, private propertyService : PropertyService, private zone : NgZone){
     
    }

    getProperties(typeProperty): void{    
        this.propertyService.getHTTPproperty().subscribe(
            data => {this.properties = Property.toProperty(data)}
        )
    }

    ngOnInit(): void {
        let typeofproperty = this.route.snapshot.paramMap.get('typeProperty');
        this.getProperties(typeofproperty);
        console.log(this.properties)
    }
    
}