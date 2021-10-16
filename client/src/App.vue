<template>
  <v-app>
    <LogoBar></LogoBar>
    <CarCards> </CarCards>
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import LogoBar from "@/components/LogoBar.vue";
import CarCards from "@/components/CarCards.vue";

export default {
  name: "App",
  components: {
    LogoBar,
    CarCards
  },

  data: () => ({
    //
  })
};
</script>
