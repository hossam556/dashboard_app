import React from 'react'
import Layout from './hoc/Layout'
import Checkouts from './container/Checkouts/Checkouts'
import Informations from './container/Informations/Informations'

function App() {
  return (
    <div className="App">
     <Layout>
       <Checkouts/>
       <Informations/>
     </Layout>
    </div>
  );
}

export default App;
