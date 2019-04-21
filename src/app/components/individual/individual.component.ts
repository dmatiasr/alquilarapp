import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'property-individual',
    templateUrl : './individual.component.html'
})
export class IndividualComponent{
    @Input() objeto: any;
    @Input() tipo: string;

    constructor(){

    }
    getData(){
        console.log(this.objeto)
    }
}