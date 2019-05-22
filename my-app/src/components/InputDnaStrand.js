import React, {Component} from 'react'
import FormComponent from './FormComponent.js'
import PropTypes from 'prop-types'

class InputDnaStrand extends Component{
  constructor(){
    super()
    this.state = {
      dna_strand: "",
      rna_strand: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRnaChange = this.handleRnaChange.bind(this)
  }
  handleChange(event){
    const {name , value} = event.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit(){
    if(this.state.dna_strand === "" || this.state.dna_strand.length > 4 || this.state.dna_strand.length < 4){
      this.setState({
        rna_strand: "undefined"
      })
    }
    else{
      var rnaStrandComponent = this.handleRnaChange()
      this.setState({
        rna_strand: rnaStrandComponent
      })
    }
  }
  handleRnaChange(){
    var dnaStrandComponent = this.state.dna_strand
    var rnaStrandComponent = ""
    if(dnaStrandComponent !== ""){
      var dnaNucleotides = {
        G: "C",
        C: "G",
        T: "A",
        A: "U"
      }
      for(let i=0; i<dnaStrandComponent.length; i++){
        rnaStrandComponent += dnaNucleotides[dnaStrandComponent.charAt(i).toUpperCase()]
      }
    }
    return rnaStrandComponent
  }
  checkRnaValue(){
    var text = ""
    if(this.state.rna_strand.length === 4){
      text = `The RNA strand corresponding to the entered DNA strand is ${this.state.rna_strand}`
    }
    else{
      text =  "Please enter a valid DNA strand"
    }
    return text
  }
  render(){
      return(
        <div>
          <FormComponent handleChange={this.handleChange} state={this.state}/>
          <button onClick={this.handleSubmit}>Submit</button>
          <p>{this.state.rna_strand ? this.checkRnaValue() : "Please enter DNA above"}</p>
        </div>
      )
    }
  }

export default InputDnaStrand

InputDnaStrand.propTypes = {
  dna_strand: PropTypes.string,
  rna_strand: PropTypes.string
}
