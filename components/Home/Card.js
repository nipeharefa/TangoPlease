import { Component } from 'react'

import CardMediaUser from './CardMediaUser'
import CardMediaContent from './CardMediaContent'
import CardThumbnail from './CardThumbnail'


export default class Card extends Component {

  render() {
    
    return (

      <div className="nusa">
        <div className="card">
          
          <CardThumbnail />

          <div className="card-content">
              
              <CardMediaUser />

              <CardMediaContent />
          </div>

        </div>
        
      </div>

    )
  }
}