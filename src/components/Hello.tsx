import * as React from 'react'
interface Iprops {
    title: string,
    onMyClick: any
}
interface IState {
    count: number
}
export default class Hello extends React.Component<Iprops, IState> {
    constructor(props:any) {
        super(props)
        this.state = {
            count: 100
        }
        this.clickHandle = this.clickHandle.bind(this)
        this.clicksmg = this.clicksmg.bind(this)
    }
    public clickHandle () {
        this.setState({
            count: 200
        })
    }
    public clicksmg () {
        console.log('事件')
        this.props.onMyClick('child data')
    }
    render () {
        return (
            <div>
                <p>hello</p>
                <div>{this.props.title}</div>
                <p>{this.state.count}</p>
                <button onClick={this.clickHandle}>点击</button>
                <button onClick={this.clicksmg}>send msg</button>
            </div>
        )
    }
}