export class Property {
    constructor( 
        public id : number, 
        public name: string, 
        public type: string,
        public description: string, 
        public lat: string,
        public lon:string, 
        public sector: string,
        public available: boolean,
        public updated_at: string,
        public updated_by:string,
        public created_at:string,
        public created_by: string){

    }

    public static toProperty(list: any) {
        let property_array = new Array<Property>();
        for (var i in list) {
            let new_property = new Property(list[i].id, 
                list[i].name, 
                list[i].type, 
                list[i].description, 
                list[i].lat, 
                list[i].lon, 
                list[i].sector, 
                list[i].available, 
                list[i].updated_at, 
                list[i].updated_by, 
                list[i].created_at, 
                list[i].created_by
                );
            property_array.push(new_property);
        }
        return property_array;
    }


}

        