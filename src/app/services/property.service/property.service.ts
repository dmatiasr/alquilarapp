import { Injectable } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Injectable()
export class PropertyService{ 
    allProperty = [
        {"id":1,"name":"Casa Quinta","type":"casa","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":2,"name":"Abuelitos","type":"casa","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":3,"name":"Hotel Plaza","type":"hotel","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":4,"name":"Rinconada","type":"departament","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":5,"name":"Todos Juntos","type":"camping","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":6,"name":"La Gran Fogate","type":"camping","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":7,"name":"Hotel Marea","type":"hotel","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":8,"name":"Rio Negro 200","type":"casa","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":9,"name":"Shopping Lugar 1","type":"local","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":10,"name":"Hotel Portovenere ","type":"hotel","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":11,"name":"Terraza al sol","type":"hotel","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":12,"name":"Hosteria Isabel","type":"hostel","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":13,"name":"Complejo Tamariscos","type":"hotel","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":14,"name":"Mil Rosas","type":"hotel","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":15,"name":"La Posada de los Robles","type":"hotel","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":16,"name":"Complejo Sierras Blancas","type":"departament","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":17,"name":"Hotel Colonos","type":"hotel","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":18,"name":"Lo del Ruso","type":"departament","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":19,"name":"Kume Ruca","type":"departament","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":20,"name":"Hotel Riviera","type":"hotel","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":21,"name":"Costa Ballenas","type":"department","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":22,"name":"Hippocampus Casas de Mar","type":"casa","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":23,"name":"Miralmar","type":"department","description":"","lat":"", "lon":"","related_sector":"","available":"","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
    ]


    construct(){

    }

    getProperty(typePropery){
        
    }
}
