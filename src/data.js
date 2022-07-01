let stays = [
  {
    id: "cityviewhotel",
    name: "City View Hotel",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0b/22/79/96/dsc-0421-largejpg.jpg",
    description:
      "We are London’s cheapest and lowest rated hotel but do we do the job? Yes we do;being only 10 minutes from McDonalds and 5 minutes from Bethenal Green tube station we should be perfect for even a one night stay if on a budget",
    nearby: ["Whitechapel Gallery", "Columbia Road Flower Market", "Museum of the Home"],
    title:"Reviews",
    long_description:["'I was disgusted with this hotel the rooms very small window in first room broken wouldnt shut moved to another room both rooms walls dirty. carpet dirty .and shower mould on walls neither of showers very clean'", "'The staff were very pleasant and helpful. The room was basic but very clean. Nice bedding. Bathroom really needed a facelift. Breakfast was free which was a lovely touch, especially in London'", "'Rooms are nasty and poorly maintained. Staff it negligent. Tenants are sketchy. I actually got locked out at night in the middle of winter while the door man was away, then was woken up in the morning by a fire alarm'"]
  },
  {
    id: "wildeaparthoetls",
    name: "Wilde Aparthotels",
    img: "https://www.staycity.com/staycity2017/wp-content/uploads/2017/08/WildeA.jpg",
    description:
      "Inspired by the wit and wisdom of Oscar Wilde, each apartment is carefully curated in the most considered and creative way that’s stylish, sophisticated, playful, practical, unique in personality and alive with Irish spirit.",
    nearby: ["ZSL London Zoo", "Hyde Park", "Buckingham Palace"],
    title:"Reviews",
    long_description:["'Outstanding. Stylish and modern. Incredibly comfortable bed and pillows. Reception staff extraordinarily friendly and helpful. Amazing convenient location. Amazing views from upper floor rooms'", "'If you want a box room in the basement with no windows no chair no air con no fridge and a clamber over the bed to get in stay here!! The staff whilst smiley weren’t able to get a working fridge - I say fridge, it was one of those mini fridges that hold 2 cans of coke!!!'", "'Excellent location, great staff, comfortable bed, clever storage and lighting.So close to the underground (Charing cross station) and the theatres. Also very easy to get to good restaurants and shopping'"]
  },
  {
    id: "theritz",
    name: "The Ritz",
    img: "https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg",
    description:
      "We are London’s most iconic hotel. A five star haven on Piccadilly that is famous the world over for its historic elegance, impeccable service, impressive suites, and legendary Afternoon Tea.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    title:"Reviews",
    long_description:["'Absolutely amazing Service staff.The sandwiches are as light as a feather, The cakes are to die for, The Ritz club is stunning. It's worth a visit to come to this iconic place.There really is nothing you can fault'", "'For my wife's 50th birthday, I decided to surprise her with Afternoon Tea at the Ritz. I had hoped it would live up to expectations, but it surpassed them in magnificent style!'","'Zero stars if I could. My husband and I were completely discriminated against due to not having a British residence. We came here for a one night staycation while visiting our family in the UK'"],
  }
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
