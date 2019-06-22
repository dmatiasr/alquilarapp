import { Injectable } from '@angular/core';
import { Property } from 'src/app/classes/property.component';
import { HttpClient } from '@angular/common/http';
@Injectable(
)
export class PropertyService{ 

    configUrl = "assets/properties.json";
    url2= "https://rocky-bastion-23623.herokuapp.com/api/property";
    constructor(private http: HttpClient){  
    }

    getHTTPproperty(){
        return this.http.get<Property>(this.configUrl)
    }
}
