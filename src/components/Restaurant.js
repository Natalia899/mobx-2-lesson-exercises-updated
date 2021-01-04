import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation'

class Restaurant extends Component{

    addReservation = () => {
        this.props.RestaurantStore.addRes(this.props.GeneralStore.name, this.props.GeneralStore.numPeople )
            }
    render () {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <div>Number of people in the restaurant: {this.props.RestaurantStore.restPopulation}</div>
                <div>Number of completed tables: {this.props.RestaurantStore.completedTables}</div>
                
                <ResInput/>
                <button onClick={this.addReservation} id="addRes">Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                    {this.props.RestaurantStore.reservations.map(r=> <Reservation res={r} key={r.id} /> )}
                
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))