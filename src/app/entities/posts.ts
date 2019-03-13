import { Img } from './img';

export class Posts {

    id:string
    post_title: string
    post_content: string
    img:Img = new Img();
    posted_by: string
    posted_on: Date
    
    }