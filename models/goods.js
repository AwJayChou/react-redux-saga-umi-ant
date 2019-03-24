// 首先安装axios
import axios from 'axios'

// api
function getGoods() {
    return axios.get('/api/goods')
}

export default {
    namespace: 'goods', // model 命名空间，区分多个model
    state: [{title:'web全栈'},{title:'java架构师'}],//初始状态
    effects: { // 异步操作
      *getList(action,{call,put}) {
          const res = yield call(getGoods)
          yield put({type:'initGoods',payload:res.data.result})
      }
    }, 
    reducers: { // 更新状态
        initGoods(state,{payload}){
          return payload
        },
        addGood(state,action) {
            return [...state,{title:action.payload.title}]
        }
    }
}