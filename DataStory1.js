var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
var port=process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));


 let data=[
    {
       id: 1,
      category: "Watches",
      description:
        "The look that made Swiss watches the toast of the world. Still unbeatable.",
      imgLink:
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      name: "Silver",
      price: 1600,
      show:0
    },
    {
       id: 2,
      category: "Watches",
      description: "Dark, black beauty. Sure to look good on the wrist.",
      imgLink:
        "https://images.pexels.com/photos/1697566/pexels-photo-1697566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Black",
      price: 899,
      show:0
    },
    {
       id: 3,
      category: "Watches",
      description:
        "Multi chronographs, stop watch, timers. Altimeter. What else.",
      imgLink:
        "https://images.pexels.com/photos/2113994/pexels id-photo-2113994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Chronograph",
      price: 1199,
      show:0
    },
    {
       id: 4,
      category: "Watches",
      description: "For all ages. For all times. Classic Look. Classic leather.",
      imgLink:
        "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Classic",
      price: 1250,
      show:0
    },
    {
       id: 5,
      category: "Watches",
      description: "The original Apple Watch. Still a great buy.",
      imgLink:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Apple v1",
      price: 999,
      show:0
    },
    {
       id: 6,
      category: "Watches",
      description: "Mechanical 28 jewelled watch. Connoisseur delight.",
      imgLink:
        "https://images.pexels.com/photos/47339/mechanics-movement-feinmechanik-wrist-watch-47339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Jewelled",
      price: 1999,
      show:0
    },
    {
       id: 7,
      category: "Sunglasses",
      description: "Desirable, reddish tint. Sure to attract attention.",
      imgLink:
        "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Tinted Red",
      price: 399,
      show:0
    },
    {
       id: 8,
      category: "Sunglasses",
      description: "Nostalgic, bluish tint, sure to get memories back. Vintage.",
      imgLink:
        "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Oldies",
      price: 199,
      show:0
    },
    {
       id: 9,
      category: "Sunglasses",
      description: "Trendy, young sunglasses with retro look. Teen favourite.",
      imgLink:
        "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Youthful",
      price: 219,
      show:0
    },
    {
       id: 10,
      category: "Sunglasses",
      description: "Chic sunglasses. Classic dark shades, sure to generate envy.",
      imgLink:
        "https://images.pexels.com/photos/65659/glasses-glass-circle-light-transmittance-65659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Classic Dark",
      price: 249,
      show:0
    },
    {
       id: 11,
      category: "Watches",
      description: "Apple Watch Version 2. A delight.",
      imgLink:
        "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Apple v2",
      price: 1499,
      show:0
    },
    {
       id: 12,
      category: "Belts",
      description: "Stylish formal brown belt. An office favourite.",
      imgLink:
        "https://as1.ftcdn.net/jpg/02/14/48/72/500_F_214487233_Aahw3DohDu6dSSfMqWCcU1QDatxpDt6E.jpg",
      name: "Fab Brown",
      price: 149,
      show:0
    },
    {
       id: 13,
      category: "Handbags",
      description: "Desirable travel bag. Mix of convenience and style",
      imgLink:
        "https://images.pexels.com/photos/2534961/pexels-photo-2534961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Travel Lite",
      price: 199,
      show:0
    },
    {
       id: 14,
      category: "Handbags",
      description: "3 Pockets, 2 Zips -  ideal for shopping and parties",
      imgLink:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Chic Leather",
      price: 749,
      show:0
    },
    {
       id: 15,
      category: "Belts",
      description: "Signature belt from Gucci ",
      imgLink:
        "https://img.shopstyle-cdn.com/pim/c7/a6/c7a695a8db5a375b222f15bea045bdea_xlarge.jpg",
      name: "Raw Edge",
      price: 799,
      show:0
    },
    {
       id: 16,
      category: "Belts",
      description: "Iconic metallic belt",
      imgLink:
        "https://img.shopstyle-cdn.com/pim/81/78/8178fa6c3b27d3f3e0fe18d019c992ea_xlarge.jpg",
      name: "Goofy Black",
      price: 349,
      show:0
    },
    {
       id: 17,
      category: "Sunglasses",
      description: "Min black faded front shades",
      imgLink:
        "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_HIGHKEY_Mini_BLACK_FADE_FRONT_450x.jpg",
      name: "Quay Shades",
      price: 479,
      show:0
    },
    {
       id: 18,
      category: "Belts",
      description: "Evergreen formal belt with classic buckle",
      imgLink:
        "https://as1.ftcdn.net/jpg/02/02/45/86/500_F_202458696_CYlcJbJfjgUb2VgQnPSUxHU79v6I3SC6.jpg",
      name: "Classic Brown",
      price: 128,
      show:0
    },
    {
       id: 19,
      category: "Handbags",
      description: "Beach handbag to go along with a beach holiday",
      imgLink:
        "https://images.pexels.com/photos/2305000/pexels-photo-2305000.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Funky Jute",
      price: 99,
      show:0
    }
  ];
  cart=[]
  User=[{email:"test1@gmail.com",password:"test11234"},{email:"test2@gmail.com",password:"test21234"}]
  order=[]
  app.get("/data/:name",function(req,res){
    let name=req.params.name
    let str=data.filter((pr)=> pr.category==name)
    if(name=="All")
       str=data
    res.send(str)
  })
app.get("/edit/:id",function(req,res){
  let id=req.params.id;
  let str=data.find((pr)=>pr.id==id)
  res.send(str)
})
  app.put("/data1/name",function(req,res){
    let data1=req.body
    let id=data1.id
    if(data1.quantity>=1)
    {
    let str=cart.findIndex((pr)=>pr.id==id)
    cart[str]=data1
    res.send(cart[str]) 
    }
    else if(data1.quantity==0)
    {
      data1.show=0
      let str=data.findIndex((pr)=>pr.id==id)
      data[str]=data1
      let str1=cart.findIndex((pr)=>pr.id==id)
      cart.splice(str1,1)
    }
  })
  app.put("/data/:name",function(req,res){
    let data1=req.body
    let name=req.params.name
    if(name=="add")
    {
    let id=data1.id
    let str=data.findIndex((pr)=>pr.id==id)
    data[str]=data1
    cart.push(data1)
    res.send(data[str])
    }
    else if(name=="remove")
    {
      let id=data1.id
      let str=data.findIndex((pr)=>pr.id==id)
      data[str]=data1
      let str1=cart.findIndex((pr)=>pr.id==id)
      cart.splice(str1,1)
      res.send(cart)
    }
  })

  app.post("/login",function(req,res){
    let body=req.body;
    let str=User.find((pr)=> pr.email==body.email && pr.password==body.password);
     res.send(str)
  })

  app.get("/cart",function(req,res){
    res.send(cart)
  })

  app.post("/order",function(req,res){
  let body=req.body;
  order.push(body)
  data.map((pr)=> pr.show=0)
  cart=[]
  res.send(body)
     
  })

  app.get("/order",function(req,res){
    res.send(order)
  })

  app.delete("/delete/:id",function(req,res){
    let id=req.params.id;
    let str=data.findIndex((pr)=>pr.id==id)
    data.splice(str,1)
    res.send(data)
  })
  app.post("/add/data",function(req,res){
    let body=req.body
    let str={id:data.length+1,...body}
    data.push(str);
    res.send(str)
  })

  app.put("/modify/:id",function(req,res){
    let id=req.params.id
    let body=req.body
    let index=data.findIndex((pr)=>pr.id==id)
    data[index]=body
    res.send(body)
  })