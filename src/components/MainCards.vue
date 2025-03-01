<script setup>
import MainCardSingle from './MainCardSingle.vue';

const cardData = [
  {
    resortadj: "Tropical",
    resortname: "Brazil",
    phonenumber: "(555) 123-4567",
    bio: "Tropical paradise with amazing beaches and resorts.",
    imageUrl: "https://images.pexels.com/photos/3272589/pexels-photo-3272589.jpeg",
    username: "tropicalbrazil"
  },
  {
    resortadj: "Peaceful",
    resortname: "Japan",
    phonenumber: "(555) 234-5678",
    bio: "A serene retreat surrounded by nature and culture.",
    imageUrl: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "peacefuljapan"
  },
  {
    resortadj: "Luxurious",
    resortname: "Switzerland",
    phonenumber: "(555) 345-6789",
    bio: "Luxurious resorts amidst the stunning Swiss Alps.",
    imageUrl: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "luxuriousswiss"
  },
  {
    resortadj: "Scenic",
    resortname: "Canada",
    phonenumber: "(555) 456-7890",
    bio: "Scenic mountain lodges with breathtaking views.",
    imageUrl: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "sceniccanada"
  },
  {
      resortadj: "Vibrant",
      resortname: "Thailand",
      phonenumber: "(555) 567-8901",
      bio: "A lively resort destination with stunning beaches and nightlife.",
      imageUrl: "https://images.pexels.com/photos/472309/pexels-photo-472309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "vibrantthailand"
  },
  {
      resortadj: "Historic",
      resortname: "Italy",
      phonenumber: "(555) 678-9012",
      bio: "Charming resorts set in Italy's historic landscapes.",
      imageUrl: "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "historicitaly"
  },
  {
      resortadj: "Majestic",
      resortname: "Norway",
      phonenumber: "(555) 789-0123",
      bio: "Experience majestic fjords and serene luxury.",
      imageUrl: "https://images.pexels.com/photos/1940038/pexels-photo-1940038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "majesticnorway"
  },
  {
      resortadj: "Exotic",
      resortname: "Maldives",
      phonenumber: "(555) 890-1234",
      bio: "Overwater bungalows and clear blue waters await you.",
      imageUrl: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "exoticmaldives"
  },
  {
      resortadj: "Adventurous",
      resortname: "New Zealand",
      phonenumber: "(555) 901-2345",
      bio: "A haven for adventure seekers and nature lovers.",
      imageUrl: "https://images.pexels.com/photos/572689/pexels-photo-572689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "adventurousnz"
  },
  {
      resortadj: "Charming",
      resortname: "France",
      phonenumber: "(555) 012-3456",
      bio: "Romantic resorts nestled in the heart of France.",
      imageUrl: "https://images.pexels.com/photos/2901212/pexels-photo-2901212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "charmingfrance"
  },
  {
      resortadj: "Serene",
      resortname: "Bali",
      phonenumber: "(555) 123-4567",
      bio: "A tranquil escape in lush tropical surroundings.",
      imageUrl: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "serenebali"
    },
  {
      resortadj: "Sunny",
      resortname: "Spain",
      phonenumber: "(555) 234-6789",
      bio: "Enjoy warm beaches, vibrant culture, and stunning coastlines.",
      imageUrl: "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "sunnyspain"
  },
  {
      resortadj: "Picturesque",
      resortname: "Greece",
      phonenumber: "(555) 345-7890",
      bio: "White-washed resorts with stunning ocean views in the Mediterranean.",
      imageUrl: "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "picturesquegreece"
  },
  {
      resortadj: "Wild",
      resortname: "South Africa",
      phonenumber: "(555) 456-8901",
      bio: "Luxury resorts surrounded by breathtaking wildlife and safaris.",
      imageUrl: "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "wildsouthafrica"
  },
  {
      resortadj: "Tranquil",
      resortname: "Fiji",
      phonenumber: "(555) 567-9012",
      bio: "Private island resorts with crystal-clear waters and soft sands.",
      imageUrl: "https://images.pexels.com/photos/4784462/pexels-photo-4784462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "tranquilfiji"
  },
  

  
  
];
</script>

<template>
  <div class="grid grid-cols-5 gap-10 p-10 ">
    <MainCardSingle 
      v-for="(card, index) in cardData" 
      :key="index"
      :resortadj="card.resortadj"
      :resortname="card.resortname"
      :phonenumber="card.phonenumber"
      :bio="card.bio"
      :imageUrl="card.imageUrl"
      :username="card.username"
    />
  </div>
</template>

