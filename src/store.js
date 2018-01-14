import Vue from 'vue'
import Vuex from 'vuex'

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderFoods:[]
  },
  getters:　{
    FoodNum: state => {
      return state.orderFoods.length;
    }
  },
  mutations: {
    addFood (state,newOrder) {
      let index = state.orderFoods.findIndex(item=>{
        return item.id==newOrder.id
      });
      if(index !== -1){//存在，已点
        state.orderFoods.push(newOrder);
        return {
          status:true,
          msg:'成功'
        }
      }else{
        return {
          status:false,
          msg:'已点过该菜品'
        }
      }
    }
  }
})
