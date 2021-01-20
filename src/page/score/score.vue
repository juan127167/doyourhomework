<template>
  <div>
    <div class="your_score_container">
      <header class="your_scores">
        <span class="store_num">{{ score }}分！</span>
      </header>
      <div class="result_tips">{{ scoreTips }}</div>
    </div>
    <div class="share_button" @click="showCover"></div>
    <div class="share_code">
      <header class="share_words">关注葡萄之家，获取答案</header>
      <img src="../../assets/4-4.png" class="share_image" />
    </div>
    <div class="share_cover" @click="showCover" v-show="!showFlag">
      <img src="../../assets/5-2.png" class="share_content" />
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "score",
  data() {
    return {
      showFlag: true,
      score: 0,
      scoreTips:'',
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！",
      ],
      rightAnswer:[2,7,12,13,18]
    };
  },
  created(){
      this.computedScore();
      this.getScoreTip();
  },
  computed:{
      ...mapState(['answerId'])
  },
  methods: {
      computedScore(){
          this.answerId.forEach((item,index)=>{
              if(item==this.rightAnswer[index]){
                  this.score+=20;
              }
          })
      },
      getScoreTip(){
          let n=Math.ceil(this.score/20)-1;
          this.scoreTips=scoreTipsArr[n]
      },
    showCover() {
      this.showFlag = !this.showFlag;
    },
  },
};
</script>
<style lang='less' >
body {
  background-image: url(../../assets/4-1.jpg);
  padding-top: 1.2rem;
}
.your_score_container {
  width: 9.7rem;
  height: 9.1rem;
  background: url(../../assets/4-2.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin: 0 auto 0;
  .your_scores {
    font-size: 1.4rem;
    width: 100%;
    text-indent: 3.3rem;
    position: absolute;
    top: 4.7rem;
    font-weight: 900;
    font-family: "Microsoft YaHei";
    .store_num {
      color: orange;
    }
  }
  .result_tips {
    position: absolute;
    top: 7rem;
    left: 0.6rem;
    width: 9rem;
    color: #3e2415;
    font-size: 0.65px;
    text-align: center;
  }
}
.share_button {
  width: 6.025rem;
  height: 2.4rem;
  margin: 0.8rem auto 0;
  background: url(../../assets/4-3.png) no-repeat 0.4rem 0;
  background-size: 5.825rem 100%;
}
.share_code {
  width: 5.3rem;
  margin: 1.5rem auto 0;
  .share_words {
    width: 7rem;
    font-size: 0.475rem;
    color: #664718;
    font-weight: 500;
    // text-align: center;
  }
  .share_image {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}
.share_cover {
  width: 100%;
  height: 100%;
  background: url(../../assets/5-1.png) no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: 100% 100%;
  opacity: 0.92;
  .share_content {
    position: fixed;
    top: 0.5rem;
    left: 50%;
    width: 12rem;
    height: 10.975rem;
    margin-left: -6rem;
  }
}
</style>