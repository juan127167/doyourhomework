const ADD_ITEMNUM='ADD_ITEMNUM'
const REMBER_ANSWER='REMBER_ANSWER'
const REMBER_TIME='REMBER_TIME'
const INITIALIZE_DATA='INITIALIZE_DATA'
export default {
    //点击进入下一题 
    [ADD_ITEMNUM](state,num){
        state.itemNum+=num;
    },
    //记录答案
    [REMBER_ANSWER](state,id){
        state.answerId.push(id);
    },
    //记录做题时间
    [REMBER_TIME](state){
        state.timer=setTimeout(()=>{
            state.allTime++;
        },1000)
    },
    //初始话信息
    [INITIALIZE_DATA](state){
        state.Num=1;
        state.allTime=0;
        state.answerId=[];
    }
}