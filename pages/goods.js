
import styles from './goods.css'
import {connect} from 'dva'
import {Card,Button} from 'antd'
import {Component} from 'react'
@connect(
  state => ({
    loading: state.loading,
    goodsList: state.goods
  }),
  {
    addGood: title => ({
      type: 'goods/addGood',
      payload: {title}
    }),
    getList: () => ({
      type: 'goods/getList' // action 的type 需要命名孔家
    })
  }
)
export default class extends Component {
  componentDidMount(){
        this.props.getList()
  }
  render(){
    console.log(this.props.loading)
    if(this.props.loading.models.goods){
      return <div>加载中...</div>
    }
    return (
      <div className={styles.normal}>
        <h1>Page goods</h1>
        <div>
          {this.props.goodsList.map(good => {
            return (
              <Card key={good.title}>
                <div>{good.title}</div>
              </Card>
            )
          })}
        </div>
        <div>
          <Button onClick={() => this.props.addGood('商品'+new Date().getTime())}>
            点击添加商品
          </Button>
        </div>
      </div>
    )
  }
}
