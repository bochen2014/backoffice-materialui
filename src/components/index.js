import React from 'react'
import MaterialUiForm from './materialUiForm'


const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

export default ()=>(
    <MaterialUiForm onSubmit={showResults}/>
)