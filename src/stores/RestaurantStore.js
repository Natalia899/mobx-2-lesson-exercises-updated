import { observable, computed, action, makeObservable } from  'mobx'
import {Reservation} from './ReservationStore'


export class RestaurantStore {
    constructor() {
        this.reservations = []
        this.numTables = 10

        makeObservable(this, {
            reservations: observable,
            numTables: observable,
            totalReservations: computed,
            openTables: computed,
            restPopulation: computed,
            completedTables: computed,
            addRes: action,
            seatRes: action,
            completeRes: action,
        })
    }

    get totalReservations() { //automatically calculates the total reservations
        return this.reservations.length
    }
    get openTables() { //automatically caluclates the number of tables avalible, only when the state is affected
        let counter = 0
        this.reservations.forEach(r => r.seated ? counter ++: null)
        return (this.numTables - counter)
    }
    get restPopulation() {
        let counter = 0
      this.reservations.forEach(r=> r.seated && !r.completed ? counter += r.numPeople : null)
      return counter
        // calculate the number of people in the restaurant now
        // (e.g. total number of people who are seated, but their reservation is not complete)
    }
    get completedTables() {
        //calculate the number of tables that have been completed
        let counter = 0
       this.reservations.forEach(r=> r.completed ? counter++ : null)
       return counter
    }
    addRes = (name, numPeople) => {
        this.reservations.push(new Reservation(name, numPeople))
    }
    seatRes = (id) => {
        let relReservation = this.reservations.find(r=> r.id === id)
        relReservation.seated = true
        //find the reservation and change its seated value to true
    }
    completeRes = (id) => {
        let relReservation = this.reservations.find(r=> r.id === id)
        relReservation.completed = true
        //find the reservation and mark it as completed
        //after you write this function, add some conditional rendering on compelted tables
        //e.g. strike through our a different color - this will happen on your react, not here.
    }
}