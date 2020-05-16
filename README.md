1. 引入react方式
   ```
   import * as React from 'raect'
   ```
2. 创建组件
   
3. 数据传递
   ```
   <Hello title="标题"/>
   子组件：
   interface Iprops {
        title: string
    }
    export default class Hello extends React.Component<Iprops> {
        constructor(props:any) {
            super(props)
        }
        render () {
            return (
                <div>
                    <p>hello</p>
            <div>{this.props.title}</div>
                </div>
            )
        }
    }
   ```
4. 状态管理
   ```
   通过接口声明状态
   注意：不能在onclick定义函数的时候直接绑定this
   ```
5. 事件处理
   ```
   1、自组件添加onclick事件
   <button onClick={this.clicksmg}>send msg</button>
   2、定义点击函数
   clicksmg () {
       console.log('事件') // 验证是否触发事件
   }
   3、父组件中自定义事件
   <Hello title="标题" onMyClick={myclickHandle}/>
   4、父组件中声明自定义函数
   const myclickHandle = () => {
       console.log('event')
   }
   5、将父组件中定义的函数传递到自组件中，并在子组件的props中接收
    interface Iprops {
        title: string,
        onMyClick: any
    }
   6、自组件中触发传递过来的事件
   clicksmg () {
       console.log('事件') // 验证是否触发事件
       this.props.onMyClick('child data')
   }
   7、父组件中就可以接收到传递的数据了
   ```
6. 条件与列表渲染
7. 引入antd
8. 路由
   ```
   需要多安装一个路由的声明包
   npm install --save-dev type@react-router
   ```
9.  redux