import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/application.scss';
import * as contentful from 'contentful'

const SPACE_ID = 'ffp8twp9l14j'
const ACCESS_TOKEN = '14bae2340a7d76f8781170afc11c0f88e20ef883d2744da3862f5d3824e21184'

var client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})

ReactDOM.render(<App client={client}/>, document.getElementById('root'));
registerServiceWorker();
