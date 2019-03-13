import { Img } from './img';

export class Profile {

    id: string
    name: string
    email:string
    password:string
    img: Img = new Img();
    active: boolean
    dob: Date;
    gender: string;
    comment:string
    cmt_on: Date
    cmt_by:string
    
    }