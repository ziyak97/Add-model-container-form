import React from 'react'

import ContainerForm from './components/container-form/container-form.component'
import ModelForm from './components/model-form/model-form.component'
import ParametersForm from './components/parameters-form/parameters-form.component'
import ModelTable from './components/model-table/model-table.component'
import ParameterTable from './components/parameters-table/parameters-table.component'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div>
      <ContainerForm />
      {/* <ModelForm />
      <ParametersForm />
      <ModelTable />
      <ParameterTable /> */}
    </div>
  )
}

export default App
