import { Injectable } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Injectable(
)
export class PropertyService{ 
    allProperty = [
        {"id":1,"name":"Casa Quinta","type":"casa","description":"El Terrado II dispone de aire acondicionado, 2 TV de pantalla plana y cocina completa con heladera y microondas. El baño es privado e incluye ducha. Se ofrece servicio de camarera de pisos cada 3...","lat":"-40.810671", "lon":"-65.087574","related_sector":"Primer bajada","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":2,"name":"Abuelitos","type":"casa","description":"El alojamiento Las Grutas 5M está situado en Las Grutas y ofrece alojamiento con conexión wifi gratis y zona de parrilla","lat":"-40.810671", "lon":"-65.087574","related_sector":"Primer bajada","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":3,"name":"Hotel Plaza","type":"hotel","description":"El Departamentos Yaminue se encuentra en Las Grutas y ofrece un jardín. Hay wifi gratis. Los alojamientos disponen de patio, TV y baño privado con bañera o ducha. Hay microondas, fogones y cafetera.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Segunda Bajada","available":"no","updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":4,"name":"Rinconada","type":"departamento","description":"El Complejo Alpataco está situado en Las Grutas, en la región de Río Negro, y ofrece alojamiento con wifi gratis.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Segunda Bajada","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":5,"name":"Todos Juntos","type":"camping","description":"Alguna descripcion","lat":"-40.810671", "lon":"-65.087574","related_sector":"Centro","available":false,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":6,"name":"La Gran Fogate","type":"camping","description":"El Guardalaola ofrece departamentos independientes con zona de parrilla en Las Grutas, a solo 300 metros de la playa y a 250 metros del centro de Las Grutas.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Centro","available":false,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":7,"name":"Hotel Marea","type":"hotel","description":"El Altas Mareas 2 se encuentra en Las Grutas y ofrece alojamiento con patio y wifi gratis. Este departamento tiene cocina totalmente equipada.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Tercer Bajada","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":8,"name":"Rio Negro 200","type":"casa","description":"El Miralmar ofrece alojamiento independiente en Las Grutas, a pocos metros de la playa. Cuenta con zona de parrilla, así como conexión WiFi y estacionamiento gratuitos.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Cuarta Bajada","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":9,"name":"Shopping Lugar 1","type":"local","description":"El Complejo Tamariscos se sitúa a solo 50 metros de la playa y ofrece departamentos independientes y confortables en Las Grutas. El alojamiento cuenta con 2 piscinas exteriores.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Quinta Bajada","available":false,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":10,"name":"Hotel Portovenere ","type":"hotel","description":"La Villa Color se encuentra en Las Grutas y ofrece alojamiento con wifi gratis y cocina. Todos los alojamientos están equipados con aire acondicionado y TV de pantalla plana","lat":"-40.810671", "lon":"-65.087574","related_sector":"Septima Bajada","available":false,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":11,"name":"Terraza al sol","type":"hotel","description":"Los Departamentos Complejo Catalina ofrecen alojamiento con cocina y vistas al mar en Las Grutas.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Primer Bajada","available":false,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":12,"name":"Hosteria Isabel","type":"hostel","description":"El Portal del Sol ofrece alojamiento con balcón en Las Grutas. Este departamento tiene cocina totalmente equipada.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Centro","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":13,"name":"Complejo Tamariscos","type":"hotel","description":"El Complejo Tamariscos se sitúa a solo 50 metros de la playa y ofrece departamentos independientes y confortables en Las Grutas. El alojamiento cuenta con 2 piscinas exteriores.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Segunda Bajada","available":false,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":14,"name":"Mil Rosas","type":"hotel","description":"El Ali Lafken está situado en Las Grutas, a 300 metros del mar, y ofrece alojamientos independientes totalmente equipados con conexión wifi gratis. Hay estacionamiento gratuito.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Centro","available":false,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":15,"name":"La Posada de los Robles","type":"hotel","description":"El Mareas Bajas se encuentra en Las Grutas y ofrece vistas al jardín, alojamiento y jardín. Hay conexión wifi gratis.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Terraza al mar","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":16,"name":"Complejo Sierras Blancas","type":"departament","description":"El Complejo Sierras Blancas ofrece alojamiento con wifi gratis y TV de pantalla plana en Las Grutas.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Terraza al mar","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":17,"name":"Hotel Colonos","type":"hotel","description":"ofrecen alojamiento con cocina y vistas al mar en Las Grutas.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Cero Bajada","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":18,"name":"Lo del Ruso","type":"departamento","description":"Lo del Ruso ofrece alojamiento con zona de parrilla en Las Grutas. Todos los alojamientos disponen de cocina totalmente equipada con horno, zona de estar, TV de pantalla plana y baño privado con","lat":"-40.810671", "lon":"-65.087574","related_sector":"Tercera Bajada","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":19,"name":"Kume Ruca","type":"departamento","description":"El Kume Ruca ofrece alojamientos independientes y se encuentra en una zona ideal de Las Grutas, a solo 300 metros de la playa. Ofrece conexión wifi gratis.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Quinta Bajada","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":20,"name":"Hotel Riviera","type":"hotel","description":"El Duplex en Las Grutas acepta mascotas y ofrece alojamiento en Las Grutas. Hay estacionamiento privado gratuito en el establecimiento.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Centro","available":false,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":21,"name":"Costa Ballenas","type":"departmento","description":"El Costa Ballenas ofrece alojamiento en Las Grutas y cuenta con zona de parrilla. Hay conexión wifi gratis.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Primer Bajada","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":22,"name":"Hippocampus Casas de Mar","type":"casa","description":"El Alojamiento Turistico Mainque, situado en Las Grutas, ofrece alojamiento con wifi gratis y TV de pantalla plana.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Centro","available":false,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
        {"id":23,"name":"Miralmar","type":"departmento","description":"El Marina Azul, situado a solo 2 calles de la playa, ofrece alojamiento independiente en Las Grutas. El alojamiento alberga un jardín precioso y proporciona conexión wifi gratis en todas las zonas.","lat":"-40.810671", "lon":"-65.087574","related_sector":"Piedras Coloradas","available":true,"updated_at":"","updated_by":"","created_at":"", "created_by":"" },
    ]


    construct(){

    }

    getProperty(typeProperty){
        let foundProperty = [];
        if (typeProperty == 'all')
            return this.allProperty;
        else
            this.allProperty.forEach(element => {
                if (element['type'] == typeProperty) foundProperty.push(element);
            });
            return foundProperty;
    }
}
