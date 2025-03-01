<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  resortadj: String,
  resortname: String,
  phonenumber: String,
  bio: String,
  imageUrl: String,
  username: String
})
</script>

<template>
  <RouterLink :to="{name: 'CardDetail', params: {id: props.username}}">
    <div class="border border-gray-500 rounded-lg shadow bg-white h-full transition-transform duration-300 hover:scale-105">
      <img class="w-full h-48 object-cover rounded-t-lg" :src="props.imageUrl" />
      <div class="p-4 ">
        <p class="mb-2 text-2xl font-bold">{{ props.resortadj }} {{ props.resortname }}</p>
        <p class="mb-3 font-normal text-gray-800">{{ props.phonenumber }}</p>
        <p class="mb-3 font-normal text-gray-800">{{ props.bio }}</p>
      </div>
    </div>
  </RouterLink>
</template>