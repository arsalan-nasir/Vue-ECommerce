<template>
  <div class="container">
    <v-tabs>
      <v-tab
        v-for="(item, index) in categories"
        :key="index"
        @click="tabChange(item)"
        >{{ item.value }}</v-tab
      >
    </v-tabs>
    <div class="cards">
      <v-card
        v-for="(items, index) in categories"
        :key="index"
        class="mx-auto"
        :color="items.color"
        dark
        max-width="400"
      >
        <v-card-title>
          <v-icon large left>
            mdi-twitter
          </v-icon>
          <span class="text-h6 font-weight-light">{{ selectedTab }}</span>
        </v-card-title>

        <v-card-text class="text-h5 font-weight-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          voluptates. Id repellendus corrupti ipsa
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ selectedTab }}</v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon class="mr-1">
                mdi-heart
              </v-icon>
              <span class="subheading mr-2">256</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1">
                mdi-share-variant
              </v-icon>
              <span class="subheading">45</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      categories: this.$store.state.app.categories,
    };
  },
  computed: {
    ...mapGetters(["selectedTab"]),
  },
  methods: {
    tabChange(param) {
      this.$store.dispatch("app/handleTabChange", param.value);
    },
  },
};
</script>
<style scoped lang="scss">
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .v-card {
    margin: 20px;
  }
}
</style>
