import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items = [
    {
      "id": "B085GL266P",
      "name": "BHAGIRATH Standard comfort Disposable Pollution/Surgical Elastic Mask Surgical Face Mask with Earloop Great for Air Pollution Virus. 1",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61XinzsWunL._SL1100_.jpg",
      "price": 199,
      "review": 0,
      "description": "IND mask covers the user’s nose and mouth and provides a physical barrier to fluids and particulate materials. The surgical masks referenced in this guidance document include masks that are labeled as a surgical  laser  isolation  dental or medical procedure masks with or without a face shield.",
      "seller": "Bhagirath fab",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B0855V7MQ8",
      "name": "ShopyBucket Standard 3 PCS comfort Disposable Pollution Elastic Mask",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61SPmUgDP9L._SL1100_.jpg",
      "price": 510,
      "review": 0,
      "description": "ShopyBucket Standard 3 PCS comfort Disposable Pollution Elastic Mask Disposable 3 Ply Face Mask with Earloop Great for Air Pollution Virus Protection & Personal Health Face Mask",
      "seller": "BasicDeal",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B084M511KM",
      "name": "Gnexin ISI Approved Mask RespiratorPollutionAnti virus",
      "image": "https://images-na.ssl-images-amazon.com/images/I/81VHcJC8uaL._SL1500_.jpg",
      "price": 299,
      "review": 2,
      "description": "Clair filters presents you Pollution mask ISI certified. This mask helps in filtering the air upto 95% as it is certified from ISI. This a cup shaped mask with metal nose clip with nose foam for better comfort. It also consists of an exhalation valve that help in long hours usage of this mask.",
      "seller": "ONESENSE ENTERPRISE",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B0777HKWJF",
      "name": "Kodenipr Club Disposable Stretchable Blue Bouffant Caps/Surgical Caps/Cooking Caps 100 Pieces",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61JUTABTYrL._SL1246_.jpg",
      "price": 60,
      "review": 199,
      "description": "Disposable cap is produced using spun bond polymer non-woven texture  spun-bind textures as the principle crude material. This material is favored for its light weight. Its gravity is lighter than hydrophobic pp strands so it has great water repellency and air penetrability bringing about giving solace and dryness bringing about the enemy of bacterial and against contagious obstruction.",
      "seller": "Genesis Lifesciences (India) Pvt. Ltd.",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B079CHH5M3",
      "name": "SMARTCARE Face Mask Cloth Tie Green",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61oieimEvzL._SL1200_.jpg",
      "price": 250,
      "review": 1,
      "description": "Cloth Face masks. Used in medical  dental  laboratory  food sectors  school  household  industry and multi-purpose. Easy breathable  effective multilayer bacterial filter. Soft  lightweight  comfortable and easy to wear Smart Care Trust.",
      "seller": "Aastha Uniform and Overgowns",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B0052GIM84",
      "name": "Salus Disposable Surgical Bouffant Caps 100 Pcs",
      "image": "https://images-na.ssl-images-amazon.com/images/I/714Pnm9gCPL._SL1000_.jpg",
      "price": 135,
      "review": 136,
      "description": "100 Pcs Of Disposable Bouffant Cap Qare Made With Virgin Medical Grade Technical Textiles That Are Hypoallergenic And Soft On The Skin. The High Performance Caps Provide Maximum Protection To The Environment From Hair Bacteria And Microorganisms  While Remaining Cool And Breathable To The User.",
      "seller": "Aurum Creations",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B076GXKW7Z",
      "name": "PrimeStore Reusable Surgeons Cotton Gown Set with Face Mask and Cap Green",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61-ypxh9dLL._SL1500_.jpg",
      "price": 515,
      "review": 8,
      "description": "Made from highly durable fabric. Finest surgeon gowns have sturdy double-stitched seams. Sleeves with stockinette cuffs.",
      "seller": "New Prime Store",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B07C5TF6YT",
      "name": "N95 TYPE Anti-Pollution MaskPack of 1",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71RAVsSraiL._SL1500_.jpg",
      "price": 155,
      "review": 22,
      "description": "Shakuntla  we believe you shouldn't have to choose between your lifestyle and pollution protection. We believe that your every breath you breathe should be pure. We've developed an extensive anti-pollution system using cutting-edge science from around the world. The result? Outstanding Pollution Protection fit your Lifestyle. Shakutla Shield N95 Protect+ Anti-Pollution Smart Mask provides 98% 3-layer filtration of PM2.5 pollution particles. It has European certification CE0194 EN149 FFP1/FFP2. Innovated in Singapore  the Dettol SiTi Shield Smart Mask is engineered in 3 sizes (S size  M size  L size) to create the superb fit for a broad age range  even for young ones. This anti-pollution mask provides 99% filtration of bacteria  as tested by Nelson Laboratories. Smart valve fitted on the inside of the mask provides the seamless outflow of exhaled air providing better comfort. It is made of ultra-soft fabric that's gentle on skin and provides comfortable fit. It has adjustable straps with soft nose pad. Tested in the US  the mask is made basis Face-fit 3D scanning technique for the Asian face. From the makers of Dettol  the smart anti-pollution mask is fit for the entire family. It is designed and tested to fit Children (7+).",
      "seller": "Sivaana Colours",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B07G8BHQF6",
      "name": "Riderscart Anti Pollution Mask Washable Dust Mask Air Filter Mask for Pollution Smoke Allergy Mask with Filter Protect from Virus PM2.5 Unisex SizeBlack with Warranty",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51Gqsbd1u1L.jpg",
      "price": 269,
      "review": 22,
      "description": "The anti-pollution mask is very innovative....which has high filtration efficiency can easily filter dust  gases  pollen and other organic vapors thus protects from various respiratory problems or breathing allergies.......It comes with soft nose clip and elastic straps so suitable for many face sizes. The exhalation valves are provided to flow out the exhaled air for easy breathing. It is washable  and reusable. Filter can be easily replaced when needed. Recommended for people having respiratory problems and breathing allergies......It is compact  suitably designed so easy to carry and store. Effectively protects from the vehicular pollution and dust on the roads.",
      "seller": "Riderscart",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B084JGXGGK",
      "name": "iSweven Anti Pollution Mask for Non Woven Dustproof Filter Windproof Face Mask PM2.5 Blue-Star-Pack of 10",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51cs3T43baL.jpg",
      "price": 699,
      "review": 1,
      "description": "iSweven Pollution Mask 2.5.Brought to you by iSweven  the world’s leading brand for personal protective equipment with over 100 years of experience in respiratory protection. The PM 2.5 masks from iSweven are specially designed to protect the user from probable respiratory ailments and allergies originating from the polluted air in the cities and common allergens like pollen in the environment. These masks have a 3 layer filter media which ensures the best protection. The masks come with a valve for moisture release which reduces stuffiness and heat build up to ensure wearer comfort for longer hours. These ergonomically designed masks with special comfort features like skin-friendly lining  soft cotton ear bands  premium nose pad for better seal and comfort and soft adjustable nose clips make them one of the best masks to wear for extended hours even in hot and humid conditions.",
      "seller": "iSWEVEN",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B085LC3VJL",
      "name": "Ionix Pack of 10 Disposable Earloop Medical Face Masks Three Layer 3 Ply Non-Woven Face Mask Dust Mask Pollution Mask Surgical Face Mask for Air Pollution Virus Protection Pack of 10",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61oRwAjpogL._SL1500_.jpg",
      "price": 425,
      "review": 0,
      "description": "3 Ply face mask   Made of premium cotton and non-woven fabric provides the feature of soft texture  quick drying  you can sit on the face comfortably   seal correctly around mouth and face  breath freely to protect yourself against potentially life-threatening danger.",
      "seller": "Perfect Sales India",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B085LQ76NC",
      "name": "Antil's Disposable 3ply Surgical Elastic Face Mask Pack of 5",
      "image": "https://images-na.ssl-images-amazon.com/images/I/41IFHL99ocL.jpg",
      "price": 249,
      "review": 0,
      "description": "This Face mask is very innovative which has high filtration efficiency can easily filter dust  gases  pollution and other organic vapors thus protects from various respiratory problems or breathing allergies. It comes with soft nose clip and elastic straps so suitable for many face sizes. The exhalation valves are provided to flow out the exhaled air for easy breathing. It is washable  and reusable. Filter can be easily replaced when needed. Recommended for people having respiratory problems and breathing allergies. It is compact  suitably designed so easy to carry and store. Effectively protects from the vehicular pollution and dust on the roads.",
      "seller": "Antil's Hub",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B085LPT6MW",
      "name": "Antil's Disposable 3ply Surgical Elastic Face Mask Pack of 10",
      "image": "https://images-na.ssl-images-amazon.com/images/I/41IFHL99ocL.jpg",
      "price": 449,
      "review": 0,
      "description": "This Face mask is very innovative which has high filtration efficiency can easily filter dust  gases  pollution and other organic vapors thus protects from various respiratory problems or breathing allergies. It comes with soft nose clip and elastic straps so suitable for many face sizes. The exhalation valves are provided to flow out the exhaled air for easy breathing. It is washable  and reusable. Filter can be easily replaced when needed. Recommended for people having respiratory problems and breathing allergies. It is compact  suitably designed so easy to carry and store. Effectively protects from the vehicular pollution and dust on the roads.",
      "seller": "Antil's Hub",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B085LQ1NBB",
      "name": "Antil's Disposable 3ply Surgical Elastic Face Mask Pack of 50",
      "image": "https://images-na.ssl-images-amazon.com/images/I/41IFHL99ocL.jpg",
      "price": 1149,
      "review": 0,
      "description": "This Face mask is very innovative which has high filtration efficiency can easily filter dust  gases  pollution and other organic vapors thus protects from various respiratory problems or breathing allergies. It comes with soft nose clip and elastic straps so suitable for many face sizes. The exhalation valves are provided to flow out the exhaled air for easy breathing. It is washable  and reusable. Filter can be easily replaced when needed. Recommended for people having respiratory problems and breathing allergies. It is compact  suitably designed so easy to carry and store. Effectively protects from the vehicular pollution and dust on the roads.",
      "seller": "Antil's Hub",
      "instoke": true,
      "status": 2
    },
    {
      "id": "B085LPV6XK",
      "name": "Antil's Disposable 3ply Surgical Elastic Face Mask Pack of 100",
      "image": "https://images-na.ssl-images-amazon.com/images/I/41IFHL99ocL.jpg",
      "price": 2299,
      "review": 0,
      "description": "This Face mask is very innovative which has high filtration efficiency can easily filter dust  gases  pollution and other organic vapors thus protects from various respiratory problems or breathing allergies. It comes with soft nose clip and elastic straps so suitable for many face sizes. The exhalation valves are provided to flow out the exhaled air for easy breathing. It is washable  and reusable. Filter can be easily replaced when needed. Recommended for people having respiratory problems and breathing allergies. It is compact  suitably designed so easy to carry and store. Effectively protects from the vehicular pollution and dust on the roads.",
      "seller": "Antil's Hub",
      "instoke": true,
      "status": 2
    },
    {
      "id": "B085HXY874",
      "name": "Warrior Armory Nose Mask Disposable Mouth Masks - Dust Mask - Pollution Mask - Surgical Face Mask for Air Pollution Virus Protection & Personal Health Face Mask 100 pieces",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61%2BiAoqsGTL._SL1258_.jpg",
      "price": 2400,
      "review": 0,
      "description": "Facemasks help limit the spread of germs. When someone talks  coughs  or sneezes they may release tiny drops into the air that can infect others. If someone is ill face masks can reduce the number of germs that the wearer releases and can protect other people from becoming sick. A face mask also protects the wearer's nose and mouth from splashes or sprays of body fluids. It is ideal for every house in day to day activities as well as doctors  surgeons  dentist  dental assistance  nurses  landscapers  contractors  plumbers  exterminators  nail technicians and many more.",
      "seller": "Warrior Armory",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B00LSSNIEI",
      "name": "Rudham Disposable Gloves 300 Pieces Transparent",
      "image": "https://images-na.ssl-images-amazon.com/images/I/517aCPWj71L._SL1110_.jpg",
      "price": 160,
      "review": 1484,
      "description": "300 pieces disposable plastic gloves. For home or restaurant or cleaning or washing. Great for cleaning  cooking and performing daily activities hygienic.",
      "seller": "Cloudtail India",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B085LPPMSX",
      "name": "Antil's Disposable 3ply Surgical Elastic Face Mask Pack of 45",
      "image": "https://images-na.ssl-images-amazon.com/images/I/41IFHL99ocL.jpg",
      "price": 1100,
      "review": 0,
      "description": "This Face mask is very innovative which has high filtration efficiency can easily filter dust  gases  pollution and other organic vapors thus protects from various respiratory problems or breathing allergies. It comes with soft nose clip and elastic straps so suitable for many face sizes. The exhalation valves are provided to flow out the exhaled air for easy breathing. It is washable  and reusable. Filter can be easily replaced when needed. Recommended for people having respiratory problems and breathing allergies. It is compact  suitably designed so easy to carry and store. Effectively protects from the vehicular pollution and dust on the roads.",
      "seller": "Antil's Hub",
      "instoke": true,
      "status": 2
    },
    {
      "id": "B013WCNHSO",
      "name": "3M 3M-6200 Half Facepiece Reusable Respirator Without CartridgesMedium",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71w3pbu-tAL._SL1010_.jpg",
      "price": 1529,
      "review": 280,
      "description": "3M 6200 half face respirator  medium. 3M half face piece reusable respirators offer the user comfort and convenience. Reusable  just dispose of the cartridge and filters when used to capacity. The swept back design of the cartridges improves balance and visibility. Can be disassembled  cleaned and reused. Very light-weight. Easy to adjust head straps. NIOSH approved for use against particulates and a variety of gases and vapors at concentrations up to 10 times the exposure limit  when used with approved and properly selected cartridges and/or filters.",
      "seller": "clickforsign®",
      "instoke": true,
      "status": 1
    },
    {
      "id": "B085LNZCGQ",
      "name": "Antil's Disposable 3ply Surgical Elastic Face Mask Pack of 35",
      "image": "https://images-na.ssl-images-amazon.com/images/I/41IFHL99ocL.jpg",
      "price": 949,
      "review": 0,
      "description": "This Face mask is very innovative which has high filtration efficiency can easily filter dust  gases  pollution and other organic vapors thus protects from various respiratory problems or breathing allergies. It comes with soft nose clip and elastic straps so suitable for many face sizes. The exhalation valves are provided to flow out the exhaled air for easy breathing. It is washable  and reusable. Filter can be easily replaced when needed. Recommended for people having respiratory problems and breathing allergies. It is compact  suitably designed so easy to carry and store. Effectively protects from the vehicular pollution and dust on the roads.",
      "seller": "Antil's Hub",
      "instoke": true,
      "status": 1
    }
  ];

  constructor() { }

  GetSortOrder(prop, order = 1) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return order*1;  
        } else if (a[prop] < b[prop]) {  
            return order*-1;  
        }  
        return 0;  
    }  
}  

  getItems(status = 1, search = '', sortOrder = ['price', '1']): Observable<any[]> {
    let result = this.items.filter(i => i.status == status && i.name.toLowerCase().includes(search.toLowerCase()));
    const [field, order] = sortOrder;
    result.sort(this.GetSortOrder(field, Number(order)));
    return of(result);
  }

  getItem(id): Observable<any> {
    const item = this.items.filter(i => i.id == id);
    if (item.length > 0) {
      return of(item[0]);
    } else {
      return of(null);
    }
  }

  changeStatus(id = [], status): Observable<String> {
    this.items = this.items.map(item => {
      if (id.includes(item.id)) {
        return {
          ...item,
          status: status
        };
      }
      return item
    });

    return of("Done");
  }

  addItem(item): Observable<String> {
    const newItem = {
      id: `B${Math.random().toString(36).slice(2, 11).toUpperCase()}`,
      status: 1,
      review: 0,
      ...item
    };
    this.items.push(newItem);
    return of("Done");
  }

  updateItem(id, mItem): Observable<String> {
    this.items = this.items.map(item => {
      if (item.id == id) {
        return {
          ...item,
          ...mItem
        };
      }
      return item
    })
    return of("Done");
  }
}
