import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      username: 'Alexa', 
      imgUrl: 'https://jooinn.com/images/blonde-girl-19.jpg',
      cars: [
        {
          mark: 'Honda',
          model: 'S2000',
          power: '160 KM',
          imgUrl: 'https://images.wallpaperscraft.com/image/honda_s2000_convertible_white_side_view_100267_800x600.jpg'
        },
        {
          mark: 'Nissan',
          model: '350z',
          power: '300 KM',
          imgUrl: 'https://i.wpimg.pl/730x0/m.autokult.pl/350z-2cf75dd8822a6157ce2153781c4.jpg'
        },
        {
          mark: 'Mitsubishi',
          model: 'Eclipse',
          power: '220 KM',
          imgUrl: 'https://www.dupontregistry.com/autos/virtual_folder/vehicle_photos/cbbd1fa7-5cde-4e30-99d2-104b3b47026b/c62eae66-f46f-404b-a4d8-617075bedbd8/IMG_20190111_150109128.jpg?404=privatelg&mode=pad,pad&width=100%&height=100%'
        },
        {
          mark: 'Nissan',
          model: 'GTR',
          power: '550 KM',
          imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InVwMWNieDc5dWc3NS1PVE9NT1RPUEwifQ.NDfu13FCMsXLxaMwAsdNQfmUHnBSHx7hy2ocvAq_nCA/image;s=1080x720;cars_;/857660195_;slot=4;filename=eyJmbiI6InVwMWNieDc5dWc3NS1PVE9NT1RPUEwifQ.NDfu13FCMsXLxaMwAsdNQfmUHnBSHx7hy2ocvAq+nCA_rev001.jpg'
        }
      ]
    },
    {
      id: 2,
      username: 'Mija', 
      imgUrl: 'https://ak7.picdn.net/shutterstock/videos/17574637/thumb/1.jpg',
      cars: [
        {
          mark: 'Mazda',
          model: 'RX-8',
          power: '220 KM',
          imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIn_wwts5rP08MRTVAVs456xd3LuhHzedibaXa_s_vyZdMSqs'
        },
        {
          mark: 'Mazda',
          model: 'RX-7',
          power: '330 KM',
          imgUrl: 'https://www.tuningblog.eu/wp-content/uploads/2019/05/Mazda-RX7-Tuning-Coupe.jpg'
        }
      ]
    },
    {
      id: 3,
      username: 'Olivia', 
      imgUrl: 'https://ak4.picdn.net/shutterstock/videos/30653314/thumb/1.jpg?i10c=img.resize(height:160)',
      cars: [
        {
          mark: 'Chevrolet',
          model: 'Camaro',
          power: '450 KM',
          imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImM2ajk0bmp0YzR4aDItT1RPTU9UT1BMIn0.QvP31FIrqpxYmsZEjuXJqpkR3Ygs_O6RgseHzYilcrU/image;s=1080x720;cars_;/893899717_;slot=6;filename=eyJmbiI6ImM2ajk0bmp0YzR4aDItT1RPTU9UT1BMIn0.QvP31FIrqpxYmsZEjuXJqpkR3Ygs+O6RgseHzYilcrU_rev001.jpg'
        },
        {
          mark: 'Ford',
          model: 'Mustang',
          power: '400 KM',
          imgUrl: 'https://i.wpimg.pl/730x0/m.autokult.pl/430862-a4c67bcbd7ac3c0fc2d1052f0.jpg'
        },
        {
          mark: 'Dodge',
          model: 'Challenger',
          power: '700 KM',
          imgUrl: 'https://www.earnhardtcjd.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Dodge/2018/Challenger/images/2018-Dodge-Challenger-01.jpg'
        }
      ]
    },
    {
      id: 4,
      username: 'Tola', 
      imgUrl: 'https://farm1.static.flickr.com/174/466072022_8de7b904c1_b.jpg',
      cars: [
        {
          mark: 'Honda',
          model: 'Civic',
          power: '200 KM',
          imgUrl: 'https://ocdn.eu/pulscms-transforms/1/vpNk9kqTURBXy8yMDA0NGZjZDY1ZmNmZTg5NDkyY2NhMTE0YmU1NzQ4OC5qcGVnkpUDAMzpzRpAzQ7EkwXNAxTNAbyBoTAB'
        }
      ]
    },
    {
      id: 1,
      username: 'Alexa', 
      imgUrl: 'https://jooinn.com/images/blonde-girl-19.jpg',
      cars: [
        {
          mark: 'Honda',
          model: 'S2000',
          power: '160 KM',
          imgUrl: 'https://images.wallpaperscraft.com/image/honda_s2000_convertible_white_side_view_100267_800x600.jpg'
        },
        {
          mark: 'Nissan',
          model: '350z',
          power: '300 KM',
          imgUrl: 'https://i.wpimg.pl/730x0/m.autokult.pl/350z-2cf75dd8822a6157ce2153781c4.jpg'
        },
        {
          mark: 'Mitsubishi',
          model: 'Eclipse',
          power: '220 KM',
          imgUrl: 'https://www.dupontregistry.com/autos/virtual_folder/vehicle_photos/cbbd1fa7-5cde-4e30-99d2-104b3b47026b/c62eae66-f46f-404b-a4d8-617075bedbd8/IMG_20190111_150109128.jpg?404=privatelg&mode=pad,pad&width=100%&height=100%'
        },
        {
          mark: 'Nissan',
          model: 'GTR',
          power: '550 KM',
          imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InVwMWNieDc5dWc3NS1PVE9NT1RPUEwifQ.NDfu13FCMsXLxaMwAsdNQfmUHnBSHx7hy2ocvAq_nCA/image;s=1080x720;cars_;/857660195_;slot=4;filename=eyJmbiI6InVwMWNieDc5dWc3NS1PVE9NT1RPUEwifQ.NDfu13FCMsXLxaMwAsdNQfmUHnBSHx7hy2ocvAq+nCA_rev001.jpg'
        }
      ]
    },
    {
      id: 2,
      username: 'Mija', 
      imgUrl: 'https://ak7.picdn.net/shutterstock/videos/17574637/thumb/1.jpg',
      cars: [
        {
          mark: 'Mazda',
          model: 'RX-8',
          power: '220 KM',
          imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIn_wwts5rP08MRTVAVs456xd3LuhHzedibaXa_s_vyZdMSqs'
        },
        {
          mark: 'Mazda',
          model: 'RX-7',
          power: '330 KM',
          imgUrl: 'https://www.tuningblog.eu/wp-content/uploads/2019/05/Mazda-RX7-Tuning-Coupe.jpg'
        }
      ]
    },
    {
      id: 3,
      username: 'Olivia', 
      imgUrl: 'https://ak4.picdn.net/shutterstock/videos/30653314/thumb/1.jpg?i10c=img.resize(height:160)',
      cars: [
        {
          mark: 'Chevrolet',
          model: 'Camaro',
          power: '450 KM',
          imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImM2ajk0bmp0YzR4aDItT1RPTU9UT1BMIn0.QvP31FIrqpxYmsZEjuXJqpkR3Ygs_O6RgseHzYilcrU/image;s=1080x720;cars_;/893899717_;slot=6;filename=eyJmbiI6ImM2ajk0bmp0YzR4aDItT1RPTU9UT1BMIn0.QvP31FIrqpxYmsZEjuXJqpkR3Ygs+O6RgseHzYilcrU_rev001.jpg'
        },
        {
          mark: 'Ford',
          model: 'Mustang',
          power: '400 KM',
          imgUrl: 'https://i.wpimg.pl/730x0/m.autokult.pl/430862-a4c67bcbd7ac3c0fc2d1052f0.jpg'
        },
        {
          mark: 'Dodge',
          model: 'Challenger',
          power: '700 KM',
          imgUrl: 'https://www.earnhardtcjd.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Dodge/2018/Challenger/images/2018-Dodge-Challenger-01.jpg'
        }
      ]
    },
    {
      id: 4,
      username: 'Tola', 
      imgUrl: 'https://farm1.static.flickr.com/174/466072022_8de7b904c1_b.jpg',
      cars: [
        {
          mark: 'Honda',
          model: 'Civic',
          power: '200 KM',
          imgUrl: 'https://ocdn.eu/pulscms-transforms/1/vpNk9kqTURBXy8yMDA0NGZjZDY1ZmNmZTg5NDkyY2NhMTE0YmU1NzQ4OC5qcGVnkpUDAMzpzRpAzQ7EkwXNAxTNAbyBoTAB'
        }
      ]
    },
    {
      id: 1,
      username: 'Alexa', 
      imgUrl: 'https://jooinn.com/images/blonde-girl-19.jpg',
      cars: [
        {
          mark: 'Honda',
          model: 'S2000',
          power: '160 KM',
          imgUrl: 'https://images.wallpaperscraft.com/image/honda_s2000_convertible_white_side_view_100267_800x600.jpg'
        },
        {
          mark: 'Nissan',
          model: '350z',
          power: '300 KM',
          imgUrl: 'https://i.wpimg.pl/730x0/m.autokult.pl/350z-2cf75dd8822a6157ce2153781c4.jpg'
        },
        {
          mark: 'Mitsubishi',
          model: 'Eclipse',
          power: '220 KM',
          imgUrl: 'https://www.dupontregistry.com/autos/virtual_folder/vehicle_photos/cbbd1fa7-5cde-4e30-99d2-104b3b47026b/c62eae66-f46f-404b-a4d8-617075bedbd8/IMG_20190111_150109128.jpg?404=privatelg&mode=pad,pad&width=100%&height=100%'
        },
        {
          mark: 'Nissan',
          model: 'GTR',
          power: '550 KM',
          imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InVwMWNieDc5dWc3NS1PVE9NT1RPUEwifQ.NDfu13FCMsXLxaMwAsdNQfmUHnBSHx7hy2ocvAq_nCA/image;s=1080x720;cars_;/857660195_;slot=4;filename=eyJmbiI6InVwMWNieDc5dWc3NS1PVE9NT1RPUEwifQ.NDfu13FCMsXLxaMwAsdNQfmUHnBSHx7hy2ocvAq+nCA_rev001.jpg'
        }
      ]
    },
    {
      id: 2,
      username: 'Mija', 
      imgUrl: 'https://ak7.picdn.net/shutterstock/videos/17574637/thumb/1.jpg',
      cars: [
        {
          mark: 'Mazda',
          model: 'RX-8',
          power: '220 KM',
          imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIn_wwts5rP08MRTVAVs456xd3LuhHzedibaXa_s_vyZdMSqs'
        },
        {
          mark: 'Mazda',
          model: 'RX-7',
          power: '330 KM',
          imgUrl: 'https://www.tuningblog.eu/wp-content/uploads/2019/05/Mazda-RX7-Tuning-Coupe.jpg'
        }
      ]
    },
    {
      id: 3,
      username: 'Olivia', 
      imgUrl: 'https://ak4.picdn.net/shutterstock/videos/30653314/thumb/1.jpg?i10c=img.resize(height:160)',
      cars: [
        {
          mark: 'Chevrolet',
          model: 'Camaro',
          power: '450 KM',
          imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImM2ajk0bmp0YzR4aDItT1RPTU9UT1BMIn0.QvP31FIrqpxYmsZEjuXJqpkR3Ygs_O6RgseHzYilcrU/image;s=1080x720;cars_;/893899717_;slot=6;filename=eyJmbiI6ImM2ajk0bmp0YzR4aDItT1RPTU9UT1BMIn0.QvP31FIrqpxYmsZEjuXJqpkR3Ygs+O6RgseHzYilcrU_rev001.jpg'
        },
        {
          mark: 'Ford',
          model: 'Mustang',
          power: '400 KM',
          imgUrl: 'https://i.wpimg.pl/730x0/m.autokult.pl/430862-a4c67bcbd7ac3c0fc2d1052f0.jpg'
        },
        {
          mark: 'Dodge',
          model: 'Challenger',
          power: '700 KM',
          imgUrl: 'https://www.earnhardtcjd.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Dodge/2018/Challenger/images/2018-Dodge-Challenger-01.jpg'
        }
      ]
    },
    {
      id: 4,
      username: 'Tola', 
      imgUrl: 'https://farm1.static.flickr.com/174/466072022_8de7b904c1_b.jpg',
      cars: [
        {
          mark: 'Honda',
          model: 'Civic',
          power: '200 KM',
          imgUrl: 'https://ocdn.eu/pulscms-transforms/1/vpNk9kqTURBXy8yMDA0NGZjZDY1ZmNmZTg5NDkyY2NhMTE0YmU1NzQ4OC5qcGVnkpUDAMzpzRpAzQ7EkwXNAxTNAbyBoTAB'
        }
      ]
    },
    {
      id: 1,
      username: 'Alexa', 
      imgUrl: 'https://jooinn.com/images/blonde-girl-19.jpg',
      cars: [
        {
          mark: 'Honda',
          model: 'S2000',
          power: '160 KM',
          imgUrl: 'https://images.wallpaperscraft.com/image/honda_s2000_convertible_white_side_view_100267_800x600.jpg'
        },
        {
          mark: 'Nissan',
          model: '350z',
          power: '300 KM',
          imgUrl: 'https://i.wpimg.pl/730x0/m.autokult.pl/350z-2cf75dd8822a6157ce2153781c4.jpg'
        },
        {
          mark: 'Mitsubishi',
          model: 'Eclipse',
          power: '220 KM',
          imgUrl: 'https://www.dupontregistry.com/autos/virtual_folder/vehicle_photos/cbbd1fa7-5cde-4e30-99d2-104b3b47026b/c62eae66-f46f-404b-a4d8-617075bedbd8/IMG_20190111_150109128.jpg?404=privatelg&mode=pad,pad&width=100%&height=100%'
        },
        {
          mark: 'Nissan',
          model: 'GTR',
          power: '550 KM',
          imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InVwMWNieDc5dWc3NS1PVE9NT1RPUEwifQ.NDfu13FCMsXLxaMwAsdNQfmUHnBSHx7hy2ocvAq_nCA/image;s=1080x720;cars_;/857660195_;slot=4;filename=eyJmbiI6InVwMWNieDc5dWc3NS1PVE9NT1RPUEwifQ.NDfu13FCMsXLxaMwAsdNQfmUHnBSHx7hy2ocvAq+nCA_rev001.jpg'
        }
      ]
    },
    {
      id: 2,
      username: 'Mija', 
      imgUrl: 'https://ak7.picdn.net/shutterstock/videos/17574637/thumb/1.jpg',
      cars: [
        {
          mark: 'Mazda',
          model: 'RX-8',
          power: '220 KM',
          imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIn_wwts5rP08MRTVAVs456xd3LuhHzedibaXa_s_vyZdMSqs'
        },
        {
          mark: 'Mazda',
          model: 'RX-7',
          power: '330 KM',
          imgUrl: 'https://www.tuningblog.eu/wp-content/uploads/2019/05/Mazda-RX7-Tuning-Coupe.jpg'
        }
      ]
    },
    {
      id: 3,
      username: 'Olivia', 
      imgUrl: 'https://ak4.picdn.net/shutterstock/videos/30653314/thumb/1.jpg?i10c=img.resize(height:160)',
      cars: [
        {
          mark: 'Chevrolet',
          model: 'Camaro',
          power: '450 KM',
          imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImM2ajk0bmp0YzR4aDItT1RPTU9UT1BMIn0.QvP31FIrqpxYmsZEjuXJqpkR3Ygs_O6RgseHzYilcrU/image;s=1080x720;cars_;/893899717_;slot=6;filename=eyJmbiI6ImM2ajk0bmp0YzR4aDItT1RPTU9UT1BMIn0.QvP31FIrqpxYmsZEjuXJqpkR3Ygs+O6RgseHzYilcrU_rev001.jpg'
        },
        {
          mark: 'Ford',
          model: 'Mustang',
          power: '400 KM',
          imgUrl: 'https://i.wpimg.pl/730x0/m.autokult.pl/430862-a4c67bcbd7ac3c0fc2d1052f0.jpg'
        },
        {
          mark: 'Dodge',
          model: 'Challenger',
          power: '700 KM',
          imgUrl: 'https://www.earnhardtcjd.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Dodge/2018/Challenger/images/2018-Dodge-Challenger-01.jpg'
        }
      ]
    },
    {
      id: 4,
      username: 'Tola', 
      imgUrl: 'https://farm1.static.flickr.com/174/466072022_8de7b904c1_b.jpg',
      cars: [
        {
          mark: 'Honda',
          model: 'Civic',
          power: '200 KM',
          imgUrl: 'https://ocdn.eu/pulscms-transforms/1/vpNk9kqTURBXy8yMDA0NGZjZDY1ZmNmZTg5NDkyY2NhMTE0YmU1NzQ4OC5qcGVnkpUDAMzpzRpAzQ7EkwXNAxTNAbyBoTAB'
        }
      ]
    },
    {
      id: 1,
      username: 'Alexa', 
      imgUrl: 'https://jooinn.com/images/blonde-girl-19.jpg',
      cars: [
        {
          mark: 'Honda',
          model: 'S2000',
          power: '160 KM',
          imgUrl: 'https://images.wallpaperscraft.com/image/honda_s2000_convertible_white_side_view_100267_800x600.jpg'
        },
        {
          mark: 'Nissan',
          model: '350z',
          power: '300 KM',
          imgUrl: 'https://i.wpimg.pl/730x0/m.autokult.pl/350z-2cf75dd8822a6157ce2153781c4.jpg'
        },
        {
          mark: 'Mitsubishi',
          model: 'Eclipse',
          power: '220 KM',
          imgUrl: 'https://www.dupontregistry.com/autos/virtual_folder/vehicle_photos/cbbd1fa7-5cde-4e30-99d2-104b3b47026b/c62eae66-f46f-404b-a4d8-617075bedbd8/IMG_20190111_150109128.jpg?404=privatelg&mode=pad,pad&width=100%&height=100%'
        },
        {
          mark: 'Nissan',
          model: 'GTR',
          power: '550 KM',
          imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InVwMWNieDc5dWc3NS1PVE9NT1RPUEwifQ.NDfu13FCMsXLxaMwAsdNQfmUHnBSHx7hy2ocvAq_nCA/image;s=1080x720;cars_;/857660195_;slot=4;filename=eyJmbiI6InVwMWNieDc5dWc3NS1PVE9NT1RPUEwifQ.NDfu13FCMsXLxaMwAsdNQfmUHnBSHx7hy2ocvAq+nCA_rev001.jpg'
        }
      ]
    },
    {
      id: 2,
      username: 'Mija', 
      imgUrl: 'https://ak7.picdn.net/shutterstock/videos/17574637/thumb/1.jpg',
      cars: [
        {
          mark: 'Mazda',
          model: 'RX-8',
          power: '220 KM',
          imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIn_wwts5rP08MRTVAVs456xd3LuhHzedibaXa_s_vyZdMSqs'
        },
        {
          mark: 'Mazda',
          model: 'RX-7',
          power: '330 KM',
          imgUrl: 'https://www.tuningblog.eu/wp-content/uploads/2019/05/Mazda-RX7-Tuning-Coupe.jpg'
        }
      ]
    },
    {
      id: 3,
      username: 'Olivia', 
      imgUrl: 'https://ak4.picdn.net/shutterstock/videos/30653314/thumb/1.jpg?i10c=img.resize(height:160)',
      cars: [
        {
          mark: 'Chevrolet',
          model: 'Camaro',
          power: '450 KM',
          imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImM2ajk0bmp0YzR4aDItT1RPTU9UT1BMIn0.QvP31FIrqpxYmsZEjuXJqpkR3Ygs_O6RgseHzYilcrU/image;s=1080x720;cars_;/893899717_;slot=6;filename=eyJmbiI6ImM2ajk0bmp0YzR4aDItT1RPTU9UT1BMIn0.QvP31FIrqpxYmsZEjuXJqpkR3Ygs+O6RgseHzYilcrU_rev001.jpg'
        },
        {
          mark: 'Ford',
          model: 'Mustang',
          power: '400 KM',
          imgUrl: 'https://i.wpimg.pl/730x0/m.autokult.pl/430862-a4c67bcbd7ac3c0fc2d1052f0.jpg'
        },
        {
          mark: 'Dodge',
          model: 'Challenger',
          power: '700 KM',
          imgUrl: 'https://www.earnhardtcjd.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Dodge/2018/Challenger/images/2018-Dodge-Challenger-01.jpg'
        }
      ]
    },
    {
      id: 4,
      username: 'Tola', 
      imgUrl: 'https://farm1.static.flickr.com/174/466072022_8de7b904c1_b.jpg',
      cars: [
        {
          mark: 'Honda',
          model: 'Civic',
          power: '200 KM',
          imgUrl: 'https://ocdn.eu/pulscms-transforms/1/vpNk9kqTURBXy8yMDA0NGZjZDY1ZmNmZTg5NDkyY2NhMTE0YmU1NzQ4OC5qcGVnkpUDAMzpzRpAzQ7EkwXNAxTNAbyBoTAB'
        }
      ]
    }
  ]

  userIdToShowCars: number;
  showCars: boolean = false;

  constructor() { }

  selectedUser(userId) {
    if(userId === this.userIdToShowCars) {
      this.userIdToShowCars = null;
    } else {
      this.userIdToShowCars = userId;
    }
    return userId;
  }

  toggle(user) {
    this.selectedUser(user.id);
  }

  ngOnInit() {
  }

}
