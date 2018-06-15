import React, { Component, PropTypes } from 'react';
import Slider from 'react-rangeslider';

class RangerSliders extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            sliderValue: 0,
        }
    }

    handleChangesliderValue = (value) => {

        this.setState({
            sliderValue: value
        })

    };

    render() {
        const { sliderValue } = this.state
        console.log(this.props.name)
        var name = this.props.name;
        var unit = this.props.unit;

        const formatkg = value => {
            var data = formatData(value)
           
            return data;
        }
        console.log(sliderValue)
        // send to ServiceElements

        return (
            <div className='slider custom-labels'>

                <table >
                    <tbody>
                        <tr>

                            <td className="styleRangName" align="center"><label>{this.props.name}</label></td>

                            <td className = "styleRang" > <Slider
                                min={0}
                                max={5}
                                value={sliderValue}
                                format={formatkg}
                                onChange={this.handleChangesliderValue}
                            /></td>

                        </tr>

                    </tbody>
                </table>

            </div>
        )
    }
}
function formatData(value) {
    var data
    switch (value) {
        case 0:
            data = "144";
            return (data)
        case 1:
            data = "240";
            return (data)
        case 2:
            data = "360";
            return (data)
        case 3:
            data = "480";
            return (data)
        case 4:
            data = "720";
            return (data)
        case 5:
            data = "1080";
            return (data)
    }
};
function formatVideo(value) {
    return value;
}
export default RangerSliders;