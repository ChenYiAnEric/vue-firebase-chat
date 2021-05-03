<template>
  <div class="about">
    <v-container>
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="3" sm="4" class="justify-center">
              <v-img
                src="~@/assets/my/self.jpg"
                max-width="200px"
                class="rounded-circle mx-auto"
              ></v-img>
            </v-col>
            <v-col cols="12" md="9" sm="8">
              <v-row class="my-list">
                <v-col cols="12" sm="6"><h3>姓名：</h3>陳怡安</v-col>
                <v-col cols="12" sm="6"><h3>星座：</h3>獅子座</v-col>
                <v-col cols="12" sm="6"><h3>血型：</h3>O</v-col>
                <v-col cols="12" sm="6"><h3>興趣：</h3>聽音樂、旅遊</v-col>
                <v-col cols="12">
                  <h3>技能專長：</h3>
                  前端網頁撰寫(Html、JS、CSS、VUE、AngularJS)、網頁切版、GIT
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="my-info px-6">
              <h2>個人簡介</h2>
              <p>
                您好，我是陳怡安，現居台中，喜愛出遊、聽音樂、各種科技新聞和奇聞異事，也因為對多樣事物的好奇心，讓我在處理事情的問題上不會以單一方向去思考。
              </p>
              <p>
                剛從前公司離職，離職前是前端工程師，主要工作內容是html、CSS切版，程式方面用JavaScript、JQuery、VueJS、AngularJS等製作網頁效果，並連接後端Api，讀取、新增、修改資料。
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="my-info">
              <h2>經歷</h2>
              <v-timeline :dense="RWDTab === 'xs'">
                <v-timeline-item
                  v-for="(year, i) in years"
                  :key="i"
                  :color="year.color"
                  small
                >
                  <template v-slot:opposite>
                    <span
                      :class="`headline font-weight-bold ${year.color}--text`"
                      v-text="year.year"
                    ></span>
                  </template>
                  <div class="py-4">
                    <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">{{year.title}}</h2>
                    <div v-for="(item, key) in year.info" :key="key">
                      {{item}}
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
          <!-- <v-row>
            <v-col cols="12" class="my-info">
              <h2>作品連結</h2> -->
              <!-- <v-card class="mb-4" :class="{'d-flex': RWDTab !== 'xs'}">
                <v-img
                  class="white--text align-end"
                  width="400px"
                  height="200px"
                  src="~@/assets/portfolio/template.png"
                >
                  <v-card-title style="background: rgba(68 ,68 ,68 , .5)">網站模板展示</v-card-title>
                </v-img>
                <v-card-text class="link-card-text">
                  <v-btn
                    dark
                    class="px-5 rounded-pill blue darken-1"
                    href="https://chenyianeric.github.io/EricData/Template/index.html"
                    >立即前往</v-btn>
                </v-card-text>
              </v-card>
              <v-card class="mb-4" :class="{'d-flex': RWDTab !== 'xs'}" style="flex-direction: row-reverse;">
                <v-img
                  class="white--text align-end"
                  width="400px"
                  height="200px"
                  src="~@/assets/portfolio/theone.png"
                >
                  <v-card-title style="background: rgba(68 ,68 ,68 , .5)">官網展示</v-card-title>
                </v-img>
                <v-card-text class="link-card-text">
                  <v-btn
                    dark
                    class="px-5 rounded-pill blue darken-1"
                    href="https://chenyianeric.github.io/EricData/theone/index.html"
                  >立即前往</v-btn>
                </v-card-text>
              </v-card>
              <v-card :class="{'d-flex': RWDTab !== 'xs'}">
                <v-img
                  class="white--text align-end"
                  width="400px"
                  height="200px"
                  src="~@/assets/portfolio/lotto.png"
                >
                  <v-card-title style="background: rgba(68 ,68 ,68 , .5)">主畫面展示</v-card-title>
                </v-img>
                <v-card-text class="link-card-text">
                  <v-btn
                    dark
                    class="px-5 rounded-pill blue darken-1"
                    href="https://chenyianeric.github.io/EricData/lotto/index.html"
                  >立即前往</v-btn>
                </v-card-text>
              </v-card> -->
            <!-- </v-col>
          </v-row> -->
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      years: [
        {
          color: 'green',
          year: '2012',
          title: '僑光科技大學(畢業)',
          info: [
            '2008年就讀 僑光科技大學 資訊科技系，並於2012年畢業。',
            '就學期間考取 Adobe 和 TQC 多張證照。',
            '曾擔任班上 副班代 和 輔導股長。'
          ]
        },
        {
          color: 'pink',
          year: '2014',
          title: '僑光科技大學(碩士畢業)',
          info: [
            '大學畢業後，繼續就讀同科系的碩士班',
            '曾擔任班上 副班代 一職'
          ]
        },
        {
          color: 'amber',
          year: '2016',
          title: '跨平台(RWD)網頁設計班',
          info: [
            '於2016年6月參加勞動部勞動力發展署 地方政府訓練課程',
            '並經考核通過結訓。'
          ]
        },
        {
          color: 'orange',
          year: '2017',
          title: '科技公司上班',
          info: [
            '2017年在科技公司上班',
            '並學習AngularJS、VueJS、Git',
            '使用IntelliJ IDEA、Sourcetree、Postman、Xshell'
          ]
        },
        {
          color: 'orange',
          year: '2021',
          title: '從科技公司離職',
          info: [
            '建置個人Blog',
            '學習使用VScode、Vercel、Hexo'
          ]
        },
        {
          color: 'cyan',
          year: '2021',
          title: '現在',
          info: []
        }
      ]
    }
  },
  computed: {
    RWDTab () {
      var breakpoint = this.$vuetify.breakpoint.name
      return breakpoint
    }
  }
}
</script>
<style>
  .container{}
  .my-list h3{
    display: inline-block;
  }
  .my-info h2{
    margin-bottom: 15px;
  }
  .my-info p{
    text-indent: 2rem;
    margin-bottom: 0;
  }
  .link-card-text {
    display:flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }
</style>
