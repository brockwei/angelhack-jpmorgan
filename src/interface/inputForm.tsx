export interface IFormInputProps {
    food: string;
    price: number;
    quantity: number;
    date: any;
    units: string;
    percentage: number;
}
export interface IBuyDataProps {
    food: string;
    price: number;
    quantity: number;
    date: any;
    units: string;
}
export interface ILeftoverDataProps {
    id: number;
    food: string;
    price: number;
    quantity: number;
    date: any;
    units: string;
    percentage: number;
}
export interface IConsumeDisposeProps {
    id: number;
    food: string;
    date: any;
    percentage: number;
}