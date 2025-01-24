 export interface Product{
    _id:string;
    name:string;
    title:string;
 _type:"car";
 brand:string;
 pricePerDay:number;
transmission:string;


        type:string|number;
        fuelCapacity:string|number;
       
        seatingCapacity:string|number;
       
        originalPrice:number;
 slug:{
    _type:"slug",
    current:string;
    };
image?:{
    asset:{
        _ref:string;
        _type:"image";
    }
};

}