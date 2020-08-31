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
                現任索朗科技公司的前端工程師，主要工作內容是html、CSS切版，程式方面用JavaScript、JQuery、VueJS、AngularJS等製作網頁效果，並連接後端Api，讀取、新增、修改資料。
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

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
</style>
