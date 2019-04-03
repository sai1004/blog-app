import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cus-feed-back',
  templateUrl: './cus-feed-back.component.html',
  styleUrls: ['./cus-feed-back.component.css']
})
export class CusFeedBackComponent implements OnInit {

   price = '2343'


   features:any[] = [

     {
       'imgwifi':'../../../assets/free-wifi-signal-1.svg',
       'imgbalcony':'../../../assets/group-19.svg',
       'imgcab':'../../../assets/group-49.svg',
       'imgcook':'../../../assets/group-50.svg',
       'imgac':'../../../assets/group-51.svg',
       'imgnews':'../../../assets/group.svg'
     }
   ]


   cost:any[] = [
{
    'pernight':'2779',
    'gst':' 123',
    'grandtotal':' 3000'

  }
  ]


  constructor() { }

  ngOnInit() {
  }

}
