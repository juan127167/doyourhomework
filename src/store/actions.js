export default {
    addNum({state,commit},id){
        //记录答案
        commit('REMBER_ANSWER',id);
        if(state.itemNum<state.itemDetail.length){
            commit('ADD_ITEMNUM',1);
        }
    },
    initializeData(store){
        store.commit('INITIALIZE_DATA')
    }

}