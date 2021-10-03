import { Formik, Form, Field } from "formik";
import { useState } from "react";
import './header.css'


const App = () => {
  const [photos, setPhotos] = useState()
  console.log(photos)
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {            
            const api= `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`            
            const response = await fetch(api, {
              headers: {
                'Authorization': 'Client-ID cn7oPtcOEcDjCFAI844KhChYCZNDeHum3j1eJMVN6zc'
              }
            })

            const data = await response.json()            
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name="search"></Field>
          </Form>
        </Formik>
      </header>

    </div>
  )
}

export default App;
