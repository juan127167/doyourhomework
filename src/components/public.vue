<template>
  <section>
    <header class="top_tips">
      <span v-if="fatherComponent == 'home'" class="num_tip">{{ level }}</span>
      <span v-if="fatherComponent == 'item'" class="num_tip"
        >题目{{ itemNum }}</span
      >
    </header>
    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style"></router-link>
    </div>
    <div v-if="fatherComponent == 'item'">
      <div class="item_back item_container_style" >
        <div class="item_list_container">
          <header class="item_title">
            {{ itemDetail[itemNum - 1].topic_name }}
          </header>
          <ul>
            <li
              class="item_list"
              v-for="(item, index) in itemDetail[itemNum - 1].topic_answer"
              :key="index"
              @click="choosed(index, item.topic_answer_id)"
            >
              <span
                class="option_style"
                :class="{ choosed_style: chooseNum == index }"
                >{{ chooseType(index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span
        class="next_item button_style"
        v-if="itemDetail.length > itemNum"
        @click="nextItem"
      ></span>
      <span class="submit_item button_style" v-else @click='submit'></span>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Public",
  props: ["fatherComponent"],
  data() {
    return {
      chooseID: null,
      chooseNum: null,
    };
  },
  computed: {
    ...mapState(["level", "itemNum", , "itemDetail",'timer']),
  },
  methods: {
      ...mapActions(['addNum','initializeData']),
      submit(){
          //最后一题，清空计时器，，跳转分数页面
          if(this.chooseNum!==null){
              this.addNum(this.chooseID);
              clearInterval(this.timer)
              this.$router.push('/score');
          } else{
            alert("您还没有选择正确答案呢！")
        }
          
      },
      //点击下一题
    nextItem() {
        if(this.chooseNum!=null){
            this.chooseNum=null;
            //保存答案，itemNum+1，直接跳转到下一题
            this.addNum(this.chooseID);
        }
        else{
            alert("您还没有选择正确答案呢！")
        }
    },
    choosed(index, id) {
      // id表示已选择项的id
      //表示选中这行答案
      this.chooseID = id;
      this.chooseNum = index;
    },
    chooseType(index) {
      switch (index) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
  },
    // created() {
    //   if (this.fatherComponent == "home") {
    //     this.initializeData();
    //     document.body.style.backgroundImage = "url(../assets/1-1.png)"; //为什么写
    //   }
    // },
};
</script>
<style lang='less'>
.top_tips {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../assets/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: "黑体";
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}
.home_logo {
  background: url(../assets/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.start {
  background-image: url(../assets/1-4.png);
}
.next_item {
  background-image: url(../assets/2-2.png);
}
.submit_item {
  background-image: url(../assets/3-1.png);
}
.button_style {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}
.item_back {
  background-image: url(../assets/2-1.png);
  background-size: 100% 100%;
}
.item_list_container {
  position: absolute;
  height: 7rem;
  width: 8rem;
  top: 1.5rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}
.item_title {
  color: #ffffff;
  font-size: 0.65rem;
  line-height: 0.7rem;
}
.item_list {
  margin-top: 0.18rem;
  width: 10rem;
  span {
    color: bisque;
    font-size: 0.6rem;
    display: inline-block;
    vertical-align: middle;
  }
  .option_style {
    border: 1px solid #ffffff;
    border-radius: 50%;
    height: 0.75rem;
    width: 0.75rem;
    line-height: 0.75rem;
    text-align: center;
    font-size: 0.5rem;
    font-family: "Arial";
  }
}
.choosed_style {
  background-color: orange;
}
</style>