import React, { Component } from 'react';
import Carousel from "nuka-carousel"


interface MyProps {
    slides: string[][],
    title: string,
    imgheight: number,
    slideheight: number
}

interface MyState {

}

export default class BasicCarousel extends Component<MyProps,MyState> {
    constructor(props: any){
        super(props);
    }

    render(){
        return (

            <div style={{margin: '10%' ,width: '75%', height:this.props.slideheight+100||'500px'}}>
                <h3 className="text-center">{this.props.title}</h3>
                <Carousel autoplay={false} adaptiveHeight = {false} >
                    {this.props.slides.map((slide) => (
                        <div style={{height:this.props.slideheight||'400px'}} className="text-center">
                            <img className="rounded-corners" height={this.props.imgheight||'300px'} src={slide[0]} key={slide[0]} alt={slide[1]}/>
                            <p>{slide[1]}</p>
                            <p></p>
                        </div>
                    ))}
                </Carousel>
            </div>
          );
    }


}

 
