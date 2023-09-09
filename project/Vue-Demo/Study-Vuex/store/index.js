import { createStore } from 'vuex';

//公共state对象，存储所有组件状态
const state = null != window.sessionStorage.getItem('state')?JSON.parse(window.sessionStorage.getItem('state')):{
    user: {
        name: ''
    }
}

//计算属性
const getters = {
    getUser(state) {
        return state.user
    }
}

//修改值的方法，注意是同步阻塞的，调用方式为:store.commit()
const mutations = {
    updateUser(state, user) {
        state.user = user
    }
}

//异步调用mutations方法,
//用dispatch调用actions
const actions = {
    asyncUpdate(user) {
        context.commit('updateUser', user)
    }
}

export default Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

// export default createStore({
//     modules:{
//         User
//     }
// })