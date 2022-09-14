import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  productdetails:any[]=[
 
    {
      "pid":"100",
      "image":"https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80",
      "pname" : "Laptop",
      "pdescription" : "Make the most of every day with the sleek style, performance, and all-day battery life you need in our lightest Surface Laptop, all at an exceptional price",
      "status" : "In Stock"
    },

    {
      "pid":"101",
      "image":"https://c0.wallpaperflare.com/preview/850/184/1002/phone-iphone-mobile-screen.jpg",
      "pname" : "Mobile",
      "pdescription" : "Apple iPhone 13 Mini (512GB) price in India starts from ₹93,469. It is available at lowest price on Flipkart in India as on Sep 14, 2022. Take a look at Apple iPhone 13 Mini (512GB) detailed specifications and features.",
      "status" : "Out of Stock"
    },{
      "pid":"102",
      "image":"https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=600",
      "pname" : "Headphones",
      "pdescription" : "Zebronics Zeb-Paradise Over-Ear Wireless Headphone with Mic (Bluetooth 4.2, Built-in FM Radio, Blue)",
      "status" : "In Stock"
    },{
      "pid":"103",
      "image":"https://images.unsplash.com/photo-1526648856597-c2b6745ad7bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2glMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80",
      "pname" : "Watch",
      "pdescription" : "Analog Men's Watch",
      "status" : "In Stock"
    },{
      "pid":"104",
      "image":"https://c1.wallpaperflare.com/preview/755/46/382/shoes-boots-nike-air.jpg",
      "pname" : "Shoes",
      "pdescription" : "Air Jordan 1 Heritage Style (6)",
      "status" : "In Stock"
    },{
      "pid":"105",
      "image":"https://c4.wallpaperflare.com/wallpaper/1003/3/727/background-widescreen-the-camera-nikon-lens-hd-wallpaper-preview.jpg",
      "pname" : "Camera",
      "pdescription" : "Nikon D7500 20.9MP Digital SLR Camera (Black) with AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR Lens",
      "status" : "In Stock"
    },{
      "pid":"106",
      "image":"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81i7t0AP1oL._SL1500_.jpg",
      "pname" : "TV's",
      "pdescription" : "Kodak 139 cm (55 inches) 4K Ultra HD Smart Android LED TV 55UHDX7XPROBL (Black) (2022 Model) | With Bezel-Less Design",
      "status" : "In Stock"
    },{
      "pid":"107",
      "image":"https://wallpapercave.com/wp/wp2276052.jpg",
      "pname" : "Joystick",
      "pdescription" : "",
      "status" : "In Stock"
    },{
      "pid":"108",
      "image":"https://wallpapercave.com/wp/wp8535373.jpg",
      "pname" : "Smart Watches",
      "pdescription" : "Noise Pulse Go Buzz Advanced Bluetooth Calling Smart Watch with 1.69 Display, 500 NITS Brightness, Noise Health Suite, 150+ Cloud Watch Face, 100 Sports Mode, Music & Camera Control-(Midnight Blue)",
      "status" : "In Stock"
    },



  ]

  ngOnInit(): void {
  }

}
