<template>
  <div class="home">
    <v-card>
      <v-card-text>
        <v-col cols="12" class="pa-0">
          <v-carousel>
            <v-carousel-item
            v-for="(item, key) in carouselData"
            :key="key"
            >
              <v-img
              :src="require('../assets/carousel/'+item.dataName+'.jpg')"
              class="fill-height"
              >
                <v-container
                fill-height
                fluid
                pa-0 ma-0
                >
                  <v-layout
                    fill-height
                    align-end
                  >
                    <v-col cols="12">
                      <span class="headline white--text" v-text="item.title"></span>
                    </v-col>
                  </v-layout>
                </v-container>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      carouselData: [
        {
          name: 'pic01',
          dataName: 'DSC_0158',
          title: '恆春南門'
        },
        {
          name: 'pic02',
          dataName: 'DSC_0228',
          title: '台北霞海城隍廟'
        },
        {
          name: 'pic03',
          dataName: 'DSC_0230',
          title: '大稻埕碼頭'
        },
        {
          name: 'pic04',
          dataName: 'DSC_0240',
          title: '自由廣場'
        },
        {
          name: 'pic05',
          dataName: 'DSC_0266',
          title: '布農族射日英雄傳說'
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>
