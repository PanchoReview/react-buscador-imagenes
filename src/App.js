import { Formik, Form, Field } from "formik";
import { useState } from "react";
import './header.css'
import './content.css'
import './article.css'


const App = () => {
  const [photos, setPhotos] = useState([])
  const open = url => window.open(url)
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
      <div className="container">
        <div className="center">
          {photos.map(photo => 
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} />
              <p>{[photo.description, photo.alt_description].join(' - ')}</p>
            </article>)}
        </div>
      </div>

    </div>
  )
}

export default App;
