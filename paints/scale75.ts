import { Paint } from ".";

const scaleColor: Array<Paint> = [
  {
    name: "Black SC00",
    color: "#231F20",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "White SC01",
    color: "#FFFFFF",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Nacar SC02",
    color: "#C3CDBF",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Graphite SC03",
    color: "#7F8481",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Anthracite Gray SC04",
    color: "#575A61",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Artic Blue SC05",
    color: "#9FBEC5",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Bering Blue SC06",
    color: "#4A818E",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Caspian Blue SC07",
    color: "#376171",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Abyssal Blue SC08",
    color: "#152029",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "White Sands SC09",
    color: "#F4F3DE",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Tenere Yellow SC10",
    color: "#EEC46C",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Sahara Yelllow SC11",
    color: "#B08430",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Gobi Brown SC12",
    color: "#5D5C31",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Dubai Brown SC13",
    color: "#573516",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Kalahari Orange SC14",
    color: "#B65238",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Eclipse Grey SC16",
    color: "#00AFBB",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Pale Skin SC17",
    color: "#292D2F",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Light Skin SC18",
    color: "#FAD5C7",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Golden Skin SC19",
    color: "#E9B386",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Adriatic Blue SC15",
    color: "#FBBF93",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Basic Flesh SC20",
    color: "#D09C82",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Pink Flesh SC21",
    color: "#E08F8A",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Arabic Shadow SC22",
    color: "#7A6331",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Indian Shadow SC23",
    color: "#6B383F",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "African Shadow SC24",
    color: "#533D46",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Birch SC25",
    color: "#EEDAB9",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Sandalwood SC26",
    color: "#BB8981",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Iroko SC27",
    color: "#B68843",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Orange Leather SC28",
    color: "#A45A2A",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Walnut SC29",
    color: "#7C5D4B",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Red Leather SC30",
    color: "#612D31",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Brown Leather SC31",
    color: "#3F1208",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Black Leather SC32",
    color: "#342023",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Sunset Purple SC33",
    color: "#682958",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Fuchsia SC34",
    color: "#C02C70",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Deep Red SC35",
    color: "#7B111B",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Blood Red SC36",
    color: "#A82429",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Antares Red SC37",
    color: "#E8272C",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Aldebaran Red SC38",
    color: "#E43A28",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Mars Orange SC39",
    color: "#C66934",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Sol Yellow SC40",
    color: "#F5CA11",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Black Forest Green SC41",
    color: "#003E2E",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Boreal Green SC42",
    color: "#005F5B",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Irati Green SC43",
    color: "#01944B",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Sherwood Green SC44",
    color: "#75863E",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Ardennes Green SC45",
    color: "#485F42",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Field Gray SC46",
    color: "#5B6E67",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Spring Green SC47",
    color: "#5BBC5B",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Fall Green SC48",
    color: "#BFD167",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Caribbean Blue SC49",
    color: "#2DBEAF",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Sky Blue SC50",
    color: "#009ECD",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Mediterranean Blue SC51",
    color: "#0472BB",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Tesla Blue SC52",
    color: "#3156A4",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Cantabric Blue SC53",
    color: "#014F6F",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Navy Blue SC54",
    color: "#193869",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Deep Blue SC55",
    color: "#1B2A54",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Violet SC56",
    color: "#634976",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Petroleum Gray SC57",
    color: "#262F2E",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Graphene Gray SC58",
    color: "#343F48",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Brown Gray SC59",
    color: "#776B6A",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Rainy Gray SC60",
    color: "#827E7B",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Thar Brown SC61",
    color: "#AB9778",
    range: "Scale Color",
    finish: "Matte",
  },
  {
    name: "Mojave White SC62",
    color: "#CCC5AD",
    range: "Scale Color",
    finish: "Matte",
  },
];

const paints = [...scaleColor];

export default paints;