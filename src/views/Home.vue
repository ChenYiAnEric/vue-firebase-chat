<template>
  <div class="home">
    <v-carousel :height="RWDHeight" class="carouselStyle" hide-delimiters>
      <v-carousel-item v-for="(item, key) in carouselData" :key="key">
        <v-img
          max-height="100%"
          :src="require('../assets/carousel/' + item.dataName + '.jpg')"
        >
          <v-container fluid fill-height pa-0 ma-0>
            <v-layout fill-height align-end>
              <v-col cols="12">
                <span
                  class="headline white--text carousel-text"
                  v-text="item.title"
                ></span>
              </v-col>
            </v-layout>
          </v-container>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <v-container
      :class="{ 'pa-0': RWDTab === 'xs' }"
      :style="'min-height: calc(100% - ' + RWDHeight + ');'"
    >
      <v-tabs :vertical="RWDTab !== 'xs'">
        <v-tab :class="{ 'tab-mobile': RWDTab === 'xs' }">北台灣</v-tab>
        <v-tab :class="{ 'tab-mobile': RWDTab === 'xs' }">中台灣</v-tab>
        <v-tab :class="{ 'tab-mobile': RWDTab === 'xs' }">南台灣</v-tab>
        <v-tab-item style="overflow-x: hidden">
          <v-row>
            <v-col col sm="6" v-for="(item, key) in TopAtt" :key="key">
              <v-card
                class="mx-auto"
                max-width="400"
                :class="{ 'rounded-0': RWDTab === 'xs' }"
                style="height: 100%"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="require('../assets/att/' + item.dataName + '.jpg')"
                >
                  <v-card-title
                    style="background-color: rgba(68, 68, 68, .5)"
                    >{{ item.title }}</v-card-title
                  >
                </v-img>

                <v-card-subtitle class="pb-0">{{ item.tag }}</v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>{{ item.info1 }}</div>

                  <div>{{ item.info2 }}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item style="overflow-x: hidden">
          <v-row>
            <v-col col sm="6" v-for="(item, key) in MiddleAtt" :key="key">
              <v-card
                class="mx-auto"
                max-width="400"
                :class="{ 'rounded-0': RWDTab === 'xs' }"
                style="height: 100%"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="require('../assets/att/' + item.dataName + '.jpg')"
                >
                  <v-card-title
                    style="background-color: rgba(68, 68, 68, .5)"
                    >{{ item.title }}</v-card-title
                  >
                </v-img>

                <v-card-subtitle class="pb-0">{{ item.tag }}</v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>{{ item.info1 }}</div>

                  <div>{{ item.info2 }}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item style="overflow-x: hidden">
          <v-row>
            <v-col col sm="6" v-for="(item, key) in BottomAtt" :key="key">
              <v-card
                class="mx-auto"
                max-width="400"
                :class="{ 'rounded-0': RWDTab === 'xs' }"
                style="height: 100%"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="require('../assets/att/' + item.dataName + '.jpg')"
                >
                  <v-card-title
                    style="background-color: rgba(68, 68, 68, .5)"
                    >{{ item.title }}</v-card-title
                  >
                </v-img>

                <v-card-subtitle class="pb-0">{{ item.tag }}</v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>{{ item.info1 }}</div>

                  <div>{{ item.info2 }}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      carouselData: [
        {
          name: "pic01",
          dataName: "DSC_0158",
          title: "恆春南門"
        },
        {
          name: "pic02",
          dataName: "DSC_0228",
          title: "台北霞海城隍廟"
        },
        {
          name: "pic03",
          dataName: "DSC_0230",
          title: "大稻埕碼頭"
        },
        {
          name: "pic04",
          dataName: "DSC_0240",
          title: "自由廣場"
        },
        {
          name: "pic05",
          dataName: "DSC_0266",
          title: "布農族射日英雄傳說"
        }
      ],
      TopAtt: [
        {
          title: "總統府",
          dataName: "t-1",
          info1: "中華民國總統府廳舍位於臺灣臺北市博愛特區",
          info2:
            "雖為國定古蹟，但因其為重要官署建築，周邊維安戒備森嚴，只有在特定時間才會開放給民眾入內參觀。",
          tag: "#North"
        },
        {
          title: "西本願寺",
          dataName: "t-2",
          info1: "西本願寺是臺灣日治時期建於臺北市新起町的淨土真宗寺院",
          info2:
            "原址是理教公所和一群違建，後因多次火災，拆建後，復原為西本願寺的遺址。",
          tag: "#North"
        },
        {
          title: "紅毛城",
          dataName: "t-3",
          info1: "古稱安東尼堡，是一座位於台灣新北市淡水區的古蹟",
          info2:
            "紅毛城被視為台灣現存最古老的建築之一，也是中華民國內政部所頒訂的國定古蹟。",
          tag: "#North"
        }
      ],
      MiddleAtt: [
        {
          title: "三井outlet",
          dataName: "m-1",
          info1: "三井不動產株式會社出資100%成立之專案公司",
          info2: "台中市梧棲區臺灣大道十段168號",
          tag: "#Central"
        },
        {
          title: "鹿港老街",
          dataName: "m-2",
          info1: "鹿港老街位於臺灣彰化縣鹿港鎮",
          info2:
            "範圍包含整個鹿港鎮的歷史古蹟街區，狹義的定義則主要由瑤林街與埔頭街連結而成。",
          tag: "#Central"
        },
        {
          title: "路思義教堂",
          dataName: "m-3",
          info1: "東海大學的基督新教禮拜堂",
          info2:
            "臺中市文化資產處以「路思義教堂及鐘樓」將其與畢律斯鐘樓登錄為臺中市定古蹟，衛理會館、舊藝術中心將其登錄為歷史建築。",
          tag: "#Central"
        },
        {
          title: "新設花園古堡",
          dataName: "m-4",
          info1: "位於台中大坑風景區圈內的新社鄉",
          info2:
            "園區擁有非常廣大的綠地山林，海拔500公尺到860公尺，四季氣候宜人。",
          tag: "#Central"
        }
      ],
      BottomAtt: [
        {
          title: "恆春南門",
          dataName: "b-1",
          info1: "位於南門圓環的中間",
          info2:
            "以前曾是恆春鎮的交通要道，附近的餐廳和小吃攤販很多，還有一間南門醫院，相當熱鬧。",
          tag: "#South"
        },
        {
          title: "大尖山",
          dataName: "b-2",
          info1: "屹立在墾丁牧場當中的大尖石山",
          info2: "西至南灣東到鵝鑾鼻，只要一抬頭，就可望見它那尖聳的身影。",
          tag: "#South"
        },
        {
          title: "東石漁人碼頭",
          dataName: "b-3",
          info1: "位於嘉義縣東石鄉東石村",
          info2:
            "主體設施包含海洋文化館、特產館、商店街、觀海亭、浮橋市場、海邊漫步平台等",
          tag: "#South"
        }
      ]
    };
  },
  computed: {
    RWDHeight() {
      var breakpoint = this.$vuetify.breakpoint.name;
      if (breakpoint === "xs") {
        return "180px";
      } else if (breakpoint === "sm") {
        return "250px";
      } else {
        return "300px";
      }
    },
    RWDTab() {
      var breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint;
    }
  },
  methods: {}
};
</script>

<style>
.home {
  height: 100%;
}
.carousel-text {
  text-shadow: 3px 3px 3px #000;
}
.carouselStyle {
}
.tab-mobile {
  flex: 1 !important;
}
</style>
