export interface IStudent{
    name : string;
    age? : number | null;
    grade : string;
    subjects : string;
    address : {
        street : string;
        city : string;
        zip : number | null
    }
}