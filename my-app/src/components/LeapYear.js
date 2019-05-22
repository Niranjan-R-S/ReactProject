import React, {Component} from 'react'
import LeapYearComponent from './LeapYearComponent.js'
class LeapYear extends Component{
  render(){
    return(
      <div>
        <h1>Leap year detection Engine</h1>
        <LeapYearComponent/>
      </div>
    )
  }
}
export default LeapYear
