let stays = [
  {
    id: "cityviewhotel",
    name: "City View Hotel",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0b/22/79/96/dsc-0421-largejpg.jpg",
    description:
      "example description here",
    nearby: ["Whitechapel Gallery", "Columbia Road Flower Market", "Museum of the Home"],
    title:"Reviews",
    long_description:["example review here"]
  },
  {
    id: "wildeaparthoetls",
    name: "Wilde Aparthotels",
    img: "https://www.staycity.com/staycity2017/wp-content/uploads/2017/08/WildeA.jpg",
    description:
      "example description here",
    nearby: ["ZSL London Zoo", "Hyde Park", "Buckingham Palace"],
    title:"Reviews",
    long_description:["example review here"]
  },
  {
    id: "theritz",
    name: "The Ritz",
    img: "https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg",
    description:
      "example description here",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    title:"Reviews",
    long_description:["example review here"],
  }
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
