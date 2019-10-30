import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'

Vue.use(Vuex)


export default new Vuex.Store({
    state,
    
    actions:{
        changeCity(ctx,city){
            ctx.commit('chcity',city)
        }
    },
    mutations,
    // actions:{
    //     changeCity(ctx,city){
    //         ctx.commit('changeCity',city)
    //     }
    // },
    // mutations:{
    //     changeCity(state,city){
    //         state.city = city

    //     }
    // }
    getters:{
        doubleCity(state){
            return state.city + ' ' + state.city
        }
    }
    //getters相当于computed属性，通过计算state的数据的到新的数据，防止数据冗余
})
