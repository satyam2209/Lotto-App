import React, {Component} from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component{
    static defaultProps = {title:"Lotto",numBalls:6,maxValue:50};

    constructor(props){
        super(props);
        this.state = {nums: Array.from({length: this.props.numBalls})};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let arr = [];
        for(let i = 1; i<=this.props.numBalls; i++)
        {
            let x = Math.floor(Math.random()*this.props.maxValue) + 1;
            arr.push(x);
        }
        this.setState({nums:arr});

    }

    render (){
        let ballsArr = this.state.nums.map((n) => <Ball numValue={n}/>);
        return (<div className="Lottery">
            <h2>{this.props.title}</h2>
            <div>{ballsArr}</div>
            <button onClick={this.handleClick}>Generate Num</button>
        </div>);
    }
}

export default Lottery;