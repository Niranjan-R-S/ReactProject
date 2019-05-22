import React from 'react'

function FormComponent(props){

  return(<form>
    <label> DNA Strand
      <input
        type="text"
        name="dna_strand"
        value={props.state.dna_strand}
        placeholder="Please enter a DNA Strand"
        onChange={props.handleChange}
      />
    </label>
  </form>)

}
export default FormComponent
