<script setup>
import MainCardSingle from './MainCardSingle.vue';

const cardData = [
  {
    resortadj: "tropical",
    resortname: "Brazil",
    phonenumber: "(555) 123-4567",
    bio: "Tropical paradise with amazing beaches and resorts.",
    imageUrl: "https://images.pexels.com/photos/3272589/pexels-photo-3272589.jpeg",
    username: "tropicalbrazil"
  },
  {
    resortadj: "peaceful",
    resortname: "Japan",
    phonenumber: "(555) 234-5678",
    bio: "A serene retreat surrounded by nature and culture.",
    imageUrl: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "peacefuljapan"
  },
  {
    resortadj: "luxurious",
    resortname: "Switzerland",
    phonenumber: "(555) 345-6789",
    bio: "Luxurious resorts amidst the stunning Swiss Alps.",
    imageUrl: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "luxuriousswiss"
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