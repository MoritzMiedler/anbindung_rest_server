<template>
  <v-card>
    <v-img :src="cardata.image"></v-img>

    <div class="pa-3">
      <span class="text-h5">{{ cardata.title }}</span>
      <br />
      Owner:
      <span class="font-weight-bold"
        >{{ cardata.owner.firstName }} {{ cardata.owner.lastName }}</span
      >
      <br />
      Year: <span class="font-weight-bold">{{ cardata.yearOfMake }}</span>
      <br />
      Miles: <span class="font-weight-bold">{{ cardata.miles }} </span>
      <br />
      Price: <span class="font-weight-bold"> {{ cardata.price }} </span>
      <br />
      {{ cardata.description }}
      <br />
      <v-btn class="purple darken-3 mt-2 white--text" :to="'/details/' + cardata.id">Details</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    cardata: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped></style>
