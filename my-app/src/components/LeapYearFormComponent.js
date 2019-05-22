import React from 'react'

function LeapYearFormComponent(props){
  return(
    <form>
      <label> Year
        <input
          type="text"
          name="enteredYear"
          value={props.state.enteredYear}
          placeholder="Please enter year"
          onChange={props.handleChange}
        />
      </label>
    </form>
  )
}
export default LeapYearFormComponent
