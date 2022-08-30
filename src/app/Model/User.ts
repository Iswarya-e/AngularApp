export class User{
    id:number;
    name:string;
    username:string;
    email:string;
    address:Address;

}


export class Address
{
    suite:string;
    city:string;
    street:string;
    zipcode:string;
    geo:GeolocationCoordinates;
}



export class GeolocationCoordinates
{
    lat:string;
    lng:string;
}