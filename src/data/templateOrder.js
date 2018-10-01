var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

const templateOrder = [
  {
    "index": 133,
    "id": "CF53BD67-4846-4F5B-895A-3221A2E17CBC",
    "pageId": "1C4669D4-606A-43B8-B5EA-6C3BFCC9171A",
    "name": "Halloween",
    "categories": [
      "family_and_recreation",
      "events"
    ]
  },
  {
    "index": 109,
    "id": "81D6A98A-EE47-4669-943A-41AA21E8BBC1",
    "pageId": "1A508E91-3007-4FD8-8BAA-24ACA61AAA68",
    "name": "Boundless Art",
    "categories": [
      "portfolios",
      "music",
      "online_store"
    ]
  },
  {
    "index": 8,
    "id": "5FFFB260-E7F1-49B5-BD7E-FCB7735EB9F2",
    "pageId": "1F194F96-B32C-4E0D-A48B-300A0364F822",
    "name": "Adviser",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 41,
    "id": "8A8089B9-FC52-40FC-95C8-CFF7358EFBA1",
    "pageId": "EAE09073-6A96-4868-A79E-BB4180616034",
    "name": "Topiary",
    "categories": [
      "family_and_recreation"
    ]
  },
  {
    "index": 51,
    "id": "2DC95AF0-A335-485D-8475-8F1716845E0A",
    "pageId": "DD6F2D53-BECB-4B32-ACCD-B3CB7D584B6D",
    "name": "Movers",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 75,
    "id": "93388C7D-C656-4BF7-A2E4-925CDC77BB2E",
    "pageId": "672EAAD3-66D9-41DB-AA81-1C0EFA461195",
    "name": "Ocete",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 12,
    "id": "075FB1BD-88D2-4D26-A886-BF9453434E6E",
    "pageId": "B23DF8FA-390A-42A0-94DA-BA9C4C5E3727",
    "name": "Plumber",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 106,
    "id": "0DC2F56D-8371-432F-B2B6-EF7384C1D809",
    "pageId": "DFF82427-AC15-4AA4-96A8-C9D137E851CA",
    "name": "Wedding",
    "categories": [
      "events"
    ]
  },
  {
    "index": 116,
    "id": "A9FE6B03-4DDF-4953-8B49-53EDCD9038B7",
    "pageId": "5B0B340F-9400-4984-9F75-313A054FCD1E",
    "name": "Summertime Adventure",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 91,
    "id": "ECEAC321-5504-4E92-94CD-9BDEBDFDD7A4",
    "pageId": "788775F0-0568-458E-AA05-1FF98F9D16AC",
    "name": "Seaside",
    "categories": [
      "family_and_recreation"
    ]
  },
  {
    "index": 70,
    "id": "EEFC17E9-2EEF-4CC4-8DC1-9A8C7EB39306",
    "pageId": "060E9FC1-C3F1-47EF-A339-26B813F95FE2",
    "name": "Art Gallery",
    "categories": [
      "music",
      "premium"
    ]
  },
  {
    "index": 96,
    "id": "ECF9ADBA-E4BC-47D5-BD5E-AD74F16FBD57",
    "pageId": "93C20709-9258-4424-8FED-00C0E4F182FE",
    "name": "Julie Twai",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 128,
    "id": "986A6354-0D94-4DF7-84BC-CEC20E5B5BAD",
    "pageId": "03782AF4-B732-44D4-9B17-2B352438A8F7",
    "name": "Escape",
    "categories": [
      "family_and_recreation"
    ]
  },
  {
    "index": 52,
    "id": "16A7C65F-F2EA-42CC-A527-9ABF595516EC",
    "pageId": "89267991-7599-4403-973C-5EAA3783B1E7",
    "name": "Handmade",
    "categories": [
      "music",
      "online_store"
    ]
  },
  {
    "index": 59,
    "id": "F22626D6-03FF-4493-8A22-9E01A557DE4F",
    "pageId": "0D05EBAB-5B57-4AFC-B37F-D74C184DC330",
    "name": "Sculptor",
    "categories": [
      "portfolios",
      "music"
    ]
  },
  {
    "index": 63,
    "id": "51C41603-0A91-47FB-B8C8-B7DF0D2E9156",
    "pageId": "1CF91525-45D5-45DD-8356-01676A31DE36",
    "name": "Event DJ",
    "categories": [
      "business_and_services",
      "portfolios",
      "premium"
    ]
  },
  {
    "index": 5,
    "id": "D4AF32D4-2119-457E-BE65-7AA8A2AC526C",
    "pageId": "31D4768D-7F03-4A71-BD55-2B7107E9896E",
    "name": "Bakery",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 15,
    "id": "A05FA91C-37FF-4C26-97D6-4BF898A4290A",
    "pageId": "E875E841-C8BA-4F89-B7DD-190049904EF6",
    "name": "Web Designer",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 80,
    "id": "89B97807-6743-4F9E-993B-B788B540DE0F",
    "pageId": "B6F2ED9D-A152-4959-A8F8-58F0C6E22FD1",
    "name": "The Lakeview Cabin",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 65,
    "id": "35503357-9E38-48FF-A5F7-B852069C6935",
    "pageId": "176BC94D-2465-40B9-B85B-C252B145777D",
    "name": "House Painter",
    "categories": [
      "business_and_services",
      "portfolios",
      "premium"
    ]
  },
  {
    "index": 20,
    "id": "6E8621A1-2CAB-40F7-800A-CA650D1D1A10",
    "pageId": "C038B923-5140-493C-B73F-7AF542CB3D08",
    "name": "Scientist",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 67,
    "id": "8345093A-FA22-4BF9-BFC7-94ECDCE91502",
    "pageId": "CB414496-EBCA-444A-9637-2F84BBF342E1",
    "name": "More",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 108,
    "id": "E73F9D7D-BEE6-4BAE-A0AF-C196A31F00AA",
    "pageId": "34AA3CB7-85D6-4EEB-BA1C-59BE944196FF",
    "name": "Focus",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 103,
    "id": "13C0C80C-5BC3-42FA-B254-9DCE4701B1EE",
    "pageId": "001731EA-BAF4-426D-ABBB-89356CC12BF2",
    "name": "Seafront",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 28,
    "id": "2BA2D19F-F961-4A9F-AF72-92E4314ED183",
    "pageId": "9A769CDC-9EBF-40FD-A05B-B7C95CF2C2D2",
    "name": "Sports Athlete",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 2,
    "id": "DC790C4D-AA44-46D5-A2AD-B04A4D53A74D",
    "pageId": "C14552AC-8DB7-4150-AB51-9B73B9401FC4",
    "name": "Voguish",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 100,
    "id": "98522BAC-1897-4242-9255-B0D31AE67F13",
    "pageId": "6945C55A-DB8F-4511-93EA-0AA6330D841C",
    "name": "Moxie",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 35,
    "id": "AD762FCC-6707-4FF6-91B0-36324B3E6FF4",
    "pageId": "19C01FE6-985B-4FAA-A702-1EB4A9AEFBBA",
    "name": "Cicada",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 89,
    "id": "D0FD87E0-C25C-4B54-9F6E-94B12FFC4058",
    "pageId": "F461723F-15FB-4AC9-A6DB-A67C3F29003A",
    "name": "Conseur",
    "categories": [
      "family_and_recreation"
    ]
  },
  {
    "index": 24,
    "id": "51470359-CBC1-4B29-8B38-BFFAACCAF9F3",
    "pageId": "603F0CF9-6A58-45B5-B1B8-8888BD5FC97A",
    "name": "Mason",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 56,
    "id": "BFA0C2E9-43A5-4A50-9223-6FE5D1696255",
    "pageId": "25A9B706-70F2-4C76-9CAE-284251B469B6",
    "name": "Connect",
    "categories": [
      "events",
      "premium"
    ]
  },
  {
    "index": 113,
    "id": "53C47C45-CFDB-4210-B916-4557E6B42DB2",
    "pageId": "607B35C9-EF6E-4608-B895-2C48E5604BED",
    "name": "Casual",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 81,
    "id": "8FB01F45-9267-4281-8E74-7A3CA7BDF400",
    "pageId": "D73C7D3F-DCD7-4370-86A4-490A44136013",
    "name": "Posuere",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 119,
    "id": "D6549B2B-2674-4ECF-AB05-131E50032BBC",
    "pageId": "A4F8FDA5-2AA3-437E-BF0A-904A71B79BD3",
    "name": "Easter Invitation",
    "categories": [
      "family_and_recreation",
      "events"
    ]
  },
  {
    "index": 94,
    "id": "1F602CBB-9673-44A6-8811-5A0702439E58",
    "pageId": "C3F11272-1DAB-4E12-893C-DE32C78E2AFE",
    "name": "Sprinkles",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 117,
    "id": "504C5CF3-1872-4261-9753-F31BBCEBF584",
    "pageId": "9773A4DE-7F3D-480D-806C-47F2072A09F3",
    "name": "Baken",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 25,
    "id": "67428A33-9C27-4005-B149-DDF81AD67850",
    "pageId": "43832C0D-2A58-4B22-9C37-6DA817CD2EA5",
    "name": "Coworking Space",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 79,
    "id": "B642D606-F4CF-4E3E-8C48-CD86E30FB38D",
    "pageId": "2E30034F-1AF6-4230-997D-6F48AF1B0011",
    "name": "Real Club",
    "categories": [
      "family_and_recreation"
    ]
  },
  {
    "index": 121,
    "id": "B882988B-FD94-413A-B360-DE61B588E69A",
    "pageId": "DAB59EC3-648B-4095-B233-1D935C33E2F6",
    "name": "Fusce",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 69,
    "id": "4755C9C1-772E-4DEF-B326-1D7E735056AF",
    "pageId": "98B05EE6-3FF7-4225-8E6C-B364A4D5A4E7",
    "name": "Profile",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 13,
    "id": "53961DAC-FC3B-4C94-8179-9C46C0B5CFED",
    "pageId": "54D6A027-D2A9-43D5-843C-B9FA7DA27AAC",
    "name": "Vogue",
    "categories": [
      "business_and_services",
      "online_store",
      "premium"
    ]
  },
  {
    "index": 43,
    "id": "F82DA1B7-B35B-4056-B589-255A075E3214",
    "pageId": "F8E77251-68FB-48FE-A095-57707A18912B",
    "name": "Home Decorator",
    "categories": [
      "business_and_services",
      "portfolios",
      "premium"
    ]
  },
  {
    "index": 40,
    "id": "97375566-28B8-4169-8A92-E4FFC2DC9FF7",
    "pageId": "E6BECFFE-E8AE-4347-8231-4F952EF49393",
    "name": "Homebrewing",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 102,
    "id": "CC28CF8D-403E-447A-8D15-1E745E29B0F2",
    "pageId": "DB127167-B1F2-414B-9314-1D0F59FB1EB5",
    "name": "Prom Night",
    "categories": [
      "events"
    ]
  },
  {
    "index": 23,
    "id": "EE623910-50EB-49C6-BF64-D216C677A671",
    "pageId": "7058BCCD-D968-41AC-8347-BA25E75A346B",
    "name": "Small Urban Art Gallery",
    "categories": [
      "events",
      "music"
    ]
  },
  {
    "index": 134,
    "id": "9FC041EF-9FD7-4BEB-8C77-3D2AAA78D61E",
    "pageId": "DA2CFBCD-2C75-4948-8B4E-1598383D5113",
    "name": "Christmas",
    "categories": [
      "events"
    ]
  },
  {
    "index": 76,
    "id": "14BDE532-D7C0-4AEF-A2B3-DE6709B2ADD1",
    "pageId": "A4642118-4EC6-40C1-8426-C2FC9844AF65",
    "name": "My Bike",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 132,
    "id": "96C917C8-1E5A-4CA2-AD8A-E38B5B05AF21",
    "pageId": "998163D4-6628-4431-9649-39330FF7B1DD",
    "name": "Organic Spa",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 98,
    "id": "7F80043E-B11F-46DC-A11D-809E83441D2E",
    "pageId": "EFE438DC-B311-40A0-8FEF-F171024B9534",
    "name": "Costume",
    "categories": [
      "events",
      "music"
    ]
  },
  {
    "index": 125,
    "id": "513C07EC-015C-4E1E-B0E1-56BDF780B016",
    "pageId": "7DC3462C-86E8-43D1-AC14-95B9F3CAB7F5",
    "name": "The Craftmans Shop",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 4,
    "id": "D00D7829-940E-4E26-8265-0254A38A21D3",
    "pageId": "38F05CB7-B2B6-43AF-8466-E8843CA34718",
    "name": "Carpenter",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 74,
    "id": "9BF60287-71F4-427F-9996-42D08E9B6B71",
    "pageId": "E1FAD3A0-50DA-4B5F-99A7-B59BC46568BF",
    "name": "Reco Studio",
    "categories": [
      "music"
    ]
  },
  {
    "index": 3,
    "id": "BA46C40E-F55E-493F-9C28-8F2686EAFB4A",
    "pageId": "D643A770-A0B3-4E81-8725-BA2AE1443018",
    "name": "Coco",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 11,
    "id": "08D3D634-DA0E-4C9E-A6E1-762CF6E22F09",
    "pageId": "7E4BF9AF-D1DF-40D5-934D-B80417355643",
    "name": "Contractor",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 55,
    "id": "2F1F90BE-BFD0-4E8E-8224-1E4BDCEBDC1B",
    "pageId": "ABDE7B7D-C2D2-4B0F-8A05-CD93FF231B43",
    "name": "Car Care",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 45,
    "id": "B61F3451-1266-49D3-952B-F5715182E55D",
    "pageId": "1D37228D-FD7B-4EB5-A860-749D5BE194C3",
    "name": "Katie Selinger",
    "categories": [
      "portfolios",
      "premium"
    ]
  },
  {
    "index": 115,
    "id": "B0C10C60-0243-4E25-9972-EDA383F5334F",
    "pageId": "A1405D9D-9BE1-4AC5-8604-BE6E20F61A7E",
    "name": "Modern Wedding",
    "categories": [
      "events"
    ]
  },
  {
    "index": 101,
    "id": "98BA14CA-808A-4D0C-BDE1-A097FB317F3C",
    "pageId": "98709062-2541-49E5-B719-2BD8EDCEAE34",
    "name": "Wedding Invitation",
    "categories": [
      "events"
    ]
  },
  {
    "index": 9,
    "id": "DE44F860-5205-46C6-BEE7-C44F4ED468E9",
    "pageId": "285FEFE5-68BD-4A8E-B4E1-9392AFED3219",
    "name": "Car Shop",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 53,
    "id": "D830ED97-1FEE-44D8-B07B-996EE607186C",
    "pageId": "D3FB1D53-3D5B-4014-BFF6-C03B22371004",
    "name": "Irish Pub",
    "categories": [
      "food_and_hospitality",
      "events"
    ]
  },
  {
    "index": 26,
    "id": "E66AA559-0D45-455B-8A03-5C4F4E6C9D94",
    "pageId": "66ED91F1-C65C-49B1-B8E6-66CE25207CD7",
    "name": "Journalist",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 68,
    "id": "9F1A5B07-E369-4FC1-8932-6763A613C206",
    "pageId": "43B86FE4-41B7-474A-AFC1-508261E6504A",
    "name": "Alex Neil",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 127,
    "id": "8F4E4546-0FD8-4E8D-8E2C-7A0F10832540",
    "pageId": "34061178-2E48-4F01-AF05-799E56AC9835",
    "name": "Winehouse",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 120,
    "id": "5EFF21EF-FE11-474C-9F25-6ED91D1672F4",
    "pageId": "7434549F-3501-4637-B58C-028A7282733E",
    "name": "Decorshop",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 46,
    "id": "EC85BE5C-02AC-47D6-8E78-567298FCE27F",
    "pageId": "A54D51AD-CC01-4463-B3B7-2DBD9A6FEF37",
    "name": "Gear",
    "categories": [
      "business_and_services",
      "online_store"
    ]
  },
  {
    "index": 36,
    "id": "EF0DBB07-AA55-47D1-B867-C41E41A36B39",
    "pageId": "CE38524B-4C39-40DD-835C-BCCC910C6C70",
    "name": "Acupuncture Clinic",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 49,
    "id": "F92B97B9-A60D-443E-8CE5-3A739DE977F0",
    "pageId": "CE626112-0612-4A55-805E-0E91AB00BDBA",
    "name": "Lisa Kevin",
    "categories": [
      "portfolios",
      "music"
    ]
  },
  {
    "index": 6,
    "id": "7C6DB3BC-A141-4665-BD81-AD252AD05B20",
    "pageId": "4008EF7D-9386-4D35-B35D-9F81ACBCBBE6",
    "name": "Photo",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 32,
    "id": "B349EDBE-9BB4-4B77-8C94-B375123F35BD",
    "pageId": "084AA085-3E96-4BB7-AF97-52B6841485F2",
    "name": "Vita",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 129,
    "id": "2F164312-AC65-49C0-9E80-5B3A2209467A",
    "pageId": "3043CD74-B431-4AAE-8C0F-A4D93A82AE72",
    "name": "Real Estate",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 27,
    "id": "10BF875F-4271-4206-AC4C-4C2DA6875B2D",
    "pageId": "68A1CEC5-8443-49DA-A69E-10FD4EC1158A",
    "name": "Curriculum Vitae",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 135,
    "id": "F1AAD224-7603-4677-A997-A3F7E2EA8D28",
    "pageId": "B672CFDA-B43F-4B45-992C-B38A6320EC3A",
    "name": "New Year Party",
    "categories": [
      "events"
    ]
  },
  {
    "index": 130,
    "id": "DD8E1B51-A6A9-4B61-9537-CA44295780CB",
    "pageId": "92D17A27-C501-4C1A-9B74-7F2126D476AA",
    "name": "Day Spa",
    "categories": [
      "business_and_services",
      "online_store"
    ]
  },
  {
    "index": 77,
    "id": "7DD3A367-C14B-48D9-9A80-E26248A94B98",
    "pageId": "F8B2BD28-2441-4B95-BC9C-9F439796C17F",
    "name": "One Tees",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 112,
    "id": "BD4D56E9-450E-4CE4-8E12-C64964344E29",
    "pageId": "B4F12329-05EB-40E2-BE7E-BD36C0491D8D",
    "name": "Hauris",
    "categories": [
      "family_and_recreation"
    ]
  },
  {
    "index": 57,
    "id": "65C7E0F1-B7F5-48F8-8156-CFA6A4D30B28",
    "pageId": "B35C53DD-5C8C-470F-8DA8-2153976EECE9",
    "name": "Handcrafting",
    "categories": [
      "music"
    ]
  },
  {
    "index": 99,
    "id": "ECD1CDA4-1FD7-4131-9610-92781A6DD6B2",
    "pageId": "5E510A6D-585F-4578-89B5-F62FCCB3F9B7",
    "name": "Shool Days",
    "categories": [
      "family_and_recreation"
    ]
  },
  {
    "index": 0,
    "id": "44FA4D67-10DD-4F47-99C4-5D77C9985BF8",
    "pageId": "A0392AC0-A1A4-440C-9D8B-B31EF1AEF6DE",
    "name": "Tails",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 85,
    "id": "5B70690A-09D1-4BDA-8E1A-88578EF23E83",
    "pageId": "0224F05C-E435-4733-A672-FE547D9FB33F",
    "name": "OStyle",
    "categories": [
      "business_and_services",
      "online_store"
    ]
  },
  {
    "index": 87,
    "id": "86EDB2E5-417E-46D0-A72B-D9F452936BFA",
    "pageId": "125D220F-8FDC-4213-B966-E2F5FC03FDF5",
    "name": "Smile Care",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 29,
    "id": "D277B01D-D689-4128-8FAB-932CCA93CF9F",
    "pageId": "1921575B-E4B7-40D9-A71D-F831DD78465E",
    "name": "Physiotherapy",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 54,
    "id": "55DCFD8C-6344-49E3-B5A9-E12E00EC43A6",
    "pageId": "EE6B32F3-69A1-4CB1-8484-739959A262B3",
    "name": "Artistry",
    "categories": [
      "music",
      "online_store"
    ]
  },
  {
    "index": 22,
    "id": "DACD9E31-E4C4-4729-811F-C7DF742057CC",
    "pageId": "E910BCF9-BE84-42D7-8F13-C5FDC9E7859A",
    "name": "Electrician",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 66,
    "id": "CDC1CDB2-45DA-49C6-B0C1-72E1835ECD14",
    "pageId": "F5764FBD-7435-458C-A387-5AA294513931",
    "name": "Mart",
    "categories": [
      "food_and_hospitality",
      "online_store"
    ]
  },
  {
    "index": 73,
    "id": "02BD31FC-78E4-4A8D-BB9D-712E82648947",
    "pageId": "EBDC86F6-7098-417F-BEB7-02AADF6AA0EF",
    "name": "Coffee Time",
    "categories": [
      "food_and_hospitality",
      "online_store",
      "premium"
    ]
  },
  {
    "index": 83,
    "id": "2B16F676-3C53-43B1-AA05-F545AF9995E7",
    "pageId": "6A89F07A-DA86-4645-8D7C-C569598B0570",
    "name": "Inventive",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 48,
    "id": "A5C3E0DE-B3A9-4DD2-8D9A-3322C5393130",
    "pageId": "2FA166B9-4BE6-4BA0-98B6-DE96BAD3F2BA",
    "name": "Wedding Planner",
    "categories": [
      "business_and_services",
      "portfolios",
      "premium"
    ]
  },
  {
    "index": 1,
    "id": "ADA7D043-7D9A-4AC9-A936-C9CC5C38D639",
    "pageId": "667E3A08-C999-447A-9618-1F30C71B580C",
    "name": "Inlay",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 97,
    "id": "3747FF98-FA52-428A-9E4B-486A182C0F82",
    "pageId": "0539D130-3B66-4115-B6B7-BEF0843229FC",
    "name": "The Diner",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 64,
    "id": "8289BFE0-7FBB-4C07-A298-CB3B2191964D",
    "pageId": "54800989-B457-4B9C-83F1-65F53E137C6E",
    "name": "The Hotel",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 61,
    "id": "00ED44EB-C1EA-4755-A9B7-AEE6679A1574",
    "pageId": "90E6AE18-E966-411E-A206-A39CC4249640",
    "name": "Mark Phillips",
    "categories": [
      "portfolios",
      "music"
    ]
  },
  {
    "index": 47,
    "id": "BF43879F-090C-4BD5-8263-98C2D24AED4B",
    "pageId": "FEC7673E-9967-406E-99BC-62CE1D0A6936",
    "name": "Cafe Rose",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 37,
    "id": "D22B3298-AAEC-42CC-935A-6AB25F7BABA5",
    "pageId": "BCA2C9D5-7C5A-49D0-86D1-3A7E5961B2B5",
    "name": "Int.",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 39,
    "id": "E83A54D2-1088-4E74-8F6E-70898C2E9FB2",
    "pageId": "AFE0D697-B31D-4D3C-8BAE-F6E030894CF0",
    "name": "iStore",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 82,
    "id": "EC3F594B-631B-446E-89DB-E37A7C78F80F",
    "pageId": "5C5852E3-3BB3-46C1-9D1E-F7C7EDD008E5",
    "name": "Music Band",
    "categories": [
      "music",
      "premium"
    ]
  },
  {
    "index": 14,
    "id": "BD7C1172-A518-44C3-AC85-1FB94CC943D5",
    "pageId": "710A382D-0452-45FD-B0FA-CF85C58881F2",
    "name": "Diner's Enclave",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 84,
    "id": "0E237400-F675-44A8-8DE0-C49A24925FA6",
    "pageId": "C90CB248-F914-4E98-ADAF-F68C880B4057",
    "name": "Savory Pizza",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 38,
    "id": "D9AA3EDB-4329-4F93-BACA-550A528343AB",
    "pageId": "C3566464-F522-4956-BAFE-DC1EC8346905",
    "name": "Young Chefs",
    "categories": [
      "food_and_hospitality",
      "events"
    ]
  },
  {
    "index": 93,
    "id": "D2246B91-4467-403B-B6CF-9D4F89ECA500",
    "pageId": "334BBBC7-4FA8-446C-B74D-05735EAA1097",
    "name": "Noxaurs",
    "categories": [
      "events",
      "music"
    ]
  },
  {
    "index": 18,
    "id": "653B5017-431E-49D8-8A78-8072D1553A18",
    "pageId": "23583321-A2F2-4478-A996-7A99EA6541C2",
    "name": "Book Club",
    "categories": [
      "family_and_recreation",
      "events"
    ]
  },
  {
    "index": 33,
    "id": "2B31EFEC-1C8B-417F-B000-30CB0EA267C1",
    "pageId": "C337552B-49CB-400F-8A27-0F7E739A9C96",
    "name": "Coach",
    "categories": [
      "business_and_services",
      "portfolios",
      "premium"
    ]
  },
  {
    "index": 58,
    "id": "56B8AB0C-B858-4BFE-B1BA-F50D1AE77824",
    "pageId": "68C76818-E65B-47A3-9596-6E17D6F12AD3",
    "name": "Dr. Liza Smith",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 44,
    "id": "B287AEA3-7992-4FC9-89AA-45424BEFE868",
    "pageId": "B12D4879-CD6B-430C-BB6C-992E925FD88B",
    "name": "Theater Group",
    "categories": [
      "events",
      "music"
    ]
  },
  {
    "index": 21,
    "id": "67D29BEC-1B2F-4DE4-8492-BF6A2CC9AB9A",
    "pageId": "65C32B95-4550-4F3F-984B-5ABDE4AD5D9E",
    "name": "Landscapers",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 30,
    "id": "44DB86A5-1CDB-4118-A2B3-4BF644F5D18B",
    "pageId": "CEF20D84-CBAB-4FCC-8C8A-D9954400AC05",
    "name": "Architecture",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 105,
    "id": "ACF1792C-606D-4DC2-840E-2BB335065BBD",
    "pageId": "DDDF9E1C-E288-454B-B20D-2E5CA55E22B6",
    "name": "Creative",
    "categories": [
      "music",
      "online_store"
    ]
  },
  {
    "index": 17,
    "id": "9CB5788F-06B0-405E-94B0-CF87B10F2E80",
    "pageId": "AD4215B6-520D-4374-A528-53A5F651F49A",
    "name": "Actor Portfolio",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 90,
    "id": "F9D949A0-DFA8-4E97-9925-F58846F2B819",
    "pageId": "07C057DE-6B9F-4054-AC3B-8A18D5576458",
    "name": "Yoga Instructor",
    "categories": [
      "business_and_services",
      "portfolios",
      "premium"
    ]
  },
  {
    "index": 104,
    "id": "808FFA89-7D70-43A5-AD4A-78873DB7030E",
    "pageId": "A33A597A-F6E4-45A6-9AED-FE31C04904FA",
    "name": "Guitarist & Vocalist",
    "categories": [
      "music"
    ]
  },
  {
    "index": 71,
    "id": "F1A31B42-26EC-4DE8-9EA7-57E0574B3950",
    "pageId": "A6B6C9A1-12E6-4B64-8100-460D635BF984",
    "name": "Infinity Advocates",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 78,
    "id": "99F8637E-7F96-4FEB-9ACD-9AF197875EFC",
    "pageId": "1BBC770F-EDEA-478C-844B-49EE79B11AC3",
    "name": "Fashion Stylist",
    "categories": [
      "business_and_services",
      "portfolios",
      "premium"
    ]
  },
  {
    "index": 118,
    "id": "6B9E46F1-9C81-4F5D-A5B4-C84FC021D007",
    "pageId": "2685289B-22DA-4B34-A683-55E9AFC22105",
    "name": "Cdipisicin Tamus",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 50,
    "id": "7A44AAA5-3DBD-4D23-938D-B2AF5CF072E8",
    "pageId": "311EB8FA-A458-478B-AB21-FD2F7F4FD396",
    "name": "Resume",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 123,
    "id": "165916BF-3EF7-4DED-902C-C4AD291C1257",
    "pageId": "724DC003-F351-4D99-B050-CA77A7F813AF",
    "name": "Hairdressicious",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 10,
    "id": "E00D3BAF-E5D2-4570-A9D4-84E0EFD3D7A4",
    "pageId": "C8084765-471D-4662-BDBE-026B84AF2E22",
    "name": "Design Studio",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 107,
    "id": "1BC233C4-52A6-45BB-85C9-C392B0AA8D5B",
    "pageId": "6462FADC-98D5-4B29-A7DA-2103F9DE5E9B",
    "name": "Masterpiece",
    "categories": [
      "portfolios"
    ]
  },
  {
    "index": 60,
    "id": "E278AD6D-D6CD-40ED-9499-88A46014ACD7",
    "pageId": "A6D6D8E6-7CCD-48E3-98B8-225B15169B7C",
    "name": "Upsurge",
    "categories": [
      "business_and_services",
      "family_and_recreation",
      "premium"
    ]
  },
  {
    "index": 42,
    "id": "1FB75C44-5FD4-4BFC-A218-B84CAC1F12AD",
    "pageId": "917F5067-7446-4224-A3CA-A36F33793407",
    "name": "Movie Production",
    "categories": [
      "music"
    ]
  },
  {
    "index": 72,
    "id": "F1ACABB3-0353-4869-81E4-8D5C5A864169",
    "pageId": "C14C7795-A390-4B21-860A-C02A36B0DB0D",
    "name": "Mechanics",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 114,
    "id": "B46FB8B0-418D-4EF8-9522-6FD7BA832026",
    "pageId": "1EAEF3EB-411E-4EAA-9FDE-5468F5B5754C",
    "name": "Cleaner",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 88,
    "id": "6EF63D84-6A51-4CC8-9B06-F988F9710A12",
    "pageId": "58896882-CB5A-4CC1-992E-31E2B90BF944",
    "name": "Event Invitation",
    "categories": [
      "events"
    ]
  },
  {
    "index": 16,
    "id": "FC4E7971-F8BF-40B2-A073-03E774E48ED1",
    "pageId": "42957044-FC35-4995-9B4A-7E40F7C19153",
    "name": "Carpentry",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 124,
    "id": "9452544B-63E5-4996-9139-D6A361788C64",
    "pageId": "C179F788-A044-49E3-AF4D-2D27CBD60E5A",
    "name": "The Villa",
    "categories": [
      "business_and_services",
      "food_and_hospitality",
      "premium"
    ]
  },
  {
    "index": 126,
    "id": "C7ABE0E3-3153-4B67-8569-218E19CBEC26",
    "pageId": "23E5F695-A336-415F-8EDE-86F727E54ACE",
    "name": "Gardener",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 110,
    "id": "0E26702B-461D-4CA0-8DD2-2A12D13A8752",
    "pageId": "D85CFDB4-466E-43BE-BDBD-F8D92BB37B60",
    "name": "Bridge",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 111,
    "id": "079BD787-2B9B-4B56-8102-B08B5E12084F",
    "pageId": "5973DB30-E0E9-4B79-9B01-A6A4803A5B06",
    "name": "Heisengard",
    "categories": [
      "family_and_recreation"
    ]
  },
  {
    "index": 92,
    "id": "D2EDB36B-8D1D-4A6B-AAA0-C7A457ADE73C",
    "pageId": "EBD0C7E9-CDC5-4192-AFB9-3CD3D1116E8A",
    "name": "Book House",
    "categories": [
      "business_and_services",
      "online_store"
    ]
  },
  {
    "index": 19,
    "id": "446936C1-9876-4C2B-B092-3B995203F22B",
    "pageId": "D16D963A-BF9C-4463-9937-2E2CE154F6DD",
    "name": "Music Teacher",
    "categories": [
      "music"
    ]
  },
  {
    "index": 86,
    "id": "BE41D906-B528-4D0D-8E21-3BF4DE79F458",
    "pageId": "EF6525A1-4EDE-4DF0-832B-86501AD62D4F",
    "name": "The Anderson Family",
    "categories": [
      "family_and_recreation"
    ]
  },
  {
    "index": 95,
    "id": "6899B19D-4DCF-4629-BA59-3086ADC460DA",
    "pageId": "5D06CBB0-1BB5-4C58-82E3-BC46594BB9EF",
    "name": "Earnest Consultant",
    "categories": [
      "business_and_services",
      "premium"
    ]
  },
  {
    "index": 131,
    "id": "2CC392D1-8215-4081-8ACB-C18B244D1B41",
    "pageId": "3DB6416A-DF5F-47E5-8026-CDDA622DAC83",
    "name": "Healthy Recipes",
    "categories": [
      "food_and_hospitality"
    ]
  },
  {
    "index": 7,
    "id": "652B49D6-7828-40E8-BF71-298829B05521",
    "pageId": "DF9C2A4D-9FBB-4950-B52F-147D76088A31",
    "name": "Gym",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 31,
    "id": "C533D5EF-9564-4B00-8860-97FD7394DE00",
    "pageId": "42CD1A9F-F9A5-499C-96FA-4B2AF07596A3",
    "name": "Motorcycle Restoration",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 62,
    "id": "5133AE78-79B5-4199-8F89-6B57EEB53E88",
    "pageId": "22C2E58D-C04B-49C7-A5AA-CF94087F2772",
    "name": "Voltaic",
    "categories": [
      "online_store"
    ]
  },
  {
    "index": 122,
    "id": "E388E229-EDCE-426B-9883-7733DFF02082",
    "pageId": "4B88778E-0844-4F29-8C48-25ADD979BE07",
    "name": "Interior Design Studio",
    "categories": [
      "business_and_services"
    ]
  },
  {
    "index": 34,
    "id": "1AFA77CC-A0C5-4543-93D4-72EE8CC8C4F7",
    "pageId": "3D50B879-D6BA-4E9C-8AD1-D1BE07EB8BDC",
    "name": "Model Building",
    "categories": [
      "family_and_recreation",
      "music"
    ]
  }
]

function sortByAttribute(array, ...attrs) {
  // generate an array of predicate-objects contains
  // property getter, and descending indicator
  let predicates = attrs.map(pred => {
    let descending = pred.charAt(0) === '-' ? -1 : 1;
    pred = pred.replace(/^-/, '');
    return {
      getter: o => o[pred],
      descend: descending
    };
  });
  // schwartzian transform idiom implementation. aka: "decorate-sort-undecorate"
  return array.map(item => {
    return {
      src: item,
      compareValues: predicates.map(predicate => predicate.getter(item))
    };
  })
  .sort((o1, o2) => {
    let i = -1, result = 0;
    while (++i < predicates.length) {
      if (o1.compareValues[i] < o2.compareValues[i]) result = -1;
      if (o1.compareValues[i] > o2.compareValues[i]) result = 1;
      if (result *= predicates[i].descend) break;
    }
    return result;
  })
  .map(item => item.src);
}

const newOrderList = sortByAttribute(templateOrder, 'index')

newOrderList.map( item => console.log(item) )