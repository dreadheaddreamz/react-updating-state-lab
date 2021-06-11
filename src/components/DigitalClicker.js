// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    buttonClick = () => {
        this.setState(preState => ({
            timesClicked: preState.timesClicked+1
        }))
    }
    
        render() {
            return (
                <button onClick={this.buttonClick}>{this.state.timesClicked}</button>
            )
        }
    }

export default DigitalClicker;