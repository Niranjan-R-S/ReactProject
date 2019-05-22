import React, {Component} from 'react'
import LeapYearFormComponent from './LeapYearFormComponent'
import PropTypes from 'prop-types'

class LeapYearComponent extends Component{
  constructor(){
    super()
    this.state = {
      enteredYear:"",
      isLeapYear:false,
      isChecked:false
    }
    this.handleChange = this.handleChange.bind(this)
    this.checkForLeapyear = this.checkForLeapyear.bind(this)
    this.checkForYearEntered = this.checkForYearEntered.bind(this)
  }
  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value,
      isChecked:false
    })
  }
  checkForLeapyear(){
    var leapYear = false
    var convertedYear = parseInt(this.state.enteredYear, 10)
    if(convertedYear % 400 === 0){
        leapYear = true
    }
    else if(convertedYear % 100 === 0){
        leapYear = false
    }
    else if(convertedYear % 4 === 0){
        leapYear = true
    }
    else{
        leapYear = false
    }
    this.setState({
      isLeapYear: leapYear,
      isChecked:true
    })
  }
  checkForYearEntered(){
    if(this.state.isChecked){
      return `The entered year ${this.state.enteredYear} is not a leap year`
    }
    else{
      return ""
    }
  }
  checkForYearEnteredTrueCase(){
    if(this.state.isChecked){
      return `The entered year ${this.state.enteredYear} is a leap year`
    }
    else{
      return ""
    }
  }
  render(){
      return(
        <div>
          <LeapYearFormComponent state={this.state} handleChange={this.handleChange}/>
          <p>{this.state.enteredYear ? `The entered year is ${this.state.enteredYear}` : "Please enter year in the area above"}</p>
          <button onClick={this.checkForLeapyear}>Check</button>
          <p>{this.state.isLeapYear ?  this.checkForYearEnteredTrueCase(): this.checkForYearEntered()}</p>
        </div>
      )
  }
}


export default LeapYearComponent

LeapYearComponent.propTypes = {
  enteredYear: PropTypes.string,
  isLeapYear: PropTypes.bool,
  isChecked: PropTypes.bool
}
