export interface IProduct {
    _id:string;
    sku:string;
    productName:string;
    description:string;
    quantity:number;
    images:string[];
    thumbnail:number;
}

export interface IUser {
    _id:string;
    fullname:string;
    email:string;
    password:string;
    favouriteProducts:string[];
}