import React, {Component} from 'react'
import FormComponent from './FormComponent.js'
import PropTypes from 'prop-types'

class RnaTranscriptionApiMethod extends Component{
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
    const axios = require('axios')
    axios.post('http://localhost:8080/convert_DNA_to_RNA', {
      dnaValue: this.state.dna_strand
    })
    .then(response => {
      return response.data
    }
      )
    .then(data => {
      this.setState({
        rna_strand: data.rnaStrand
      })
    })
    .catch(function (error) {
      console.log(error);
    })

    return this.state.rna_strand
  }
  checkRnaValue(){
    var text = ""
    var indexOfN = this.state.rna_strand.indexOf("N")
    if(this.state.rna_strand.length === 4 && indexOfN < 0){
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
          <h1>Convert DNA strand to RNA strand - API method</h1>
          <FormComponent handleChange={this.handleChange} state={this.state}/>
          <button onClick={this.handleSubmit}>Submit</button>
          <p>{this.state.rna_strand ? this.checkRnaValue() : "Please enter DNA above"}</p>
        </div>
      )
    }
  }

export default RnaTranscriptionApiMethod

RnaTranscriptionApiMethod.propTypes = {
  dna_strand: PropTypes.string,
  rna_strand: PropTypes.string
}
