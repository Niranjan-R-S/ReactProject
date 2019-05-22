import React from 'react'

function RnaStrandComponent(props){
  var dnaStrandComponent = props.dnaStrand
  var rnaStrandComponent = ""
  if(dnaStrandComponent != ""){
    var dnaNucleotides = {
      G: "C",
      C: "G",
      T: "A",
      A: "U"
    }
    for(let i=0; i<dnaStrandComponent.length; i++){
      rnaStrandComponent[i] = dnaNucleotides[dnaStrandComponent[i]]
    }
  }
  return(
    <p>{dnaStrandComponent ? rnaStrandComponent: ""}</p>
  )
}
export default RnaStrandComponent
