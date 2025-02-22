import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Reservation extends Component {

    completeRes = () => {
        this.props.RestaurantStore.completeRes(this.props.res.id)
    }
    seatRes = ()=> {
        this.props.RestaurantStore.seatRes(this.props.res.id)
    }
    render() {
        return (
            <div className={this.props.res.completed ? "conditional" : null}>
                <p>Reservation name: {this.props.res.name}</p>
                <p>Number of people: {this.props.res.numPeople}</p>
                <button onClick={this.completeRes}>Complete</button>
                <button onClick={this.seatRes}>Seat</button>
            </div>
            //render the reservation data here
            //make sure you store the ID somewhere so you can find the reservation
            //use the class "conditional" to conditionally render completed reservations
            //You should hav ea complete reservation button to complete the reservation
        )
    }
}

//inject your store here
export default inject("RestaurantStore")(observer(Reservation))