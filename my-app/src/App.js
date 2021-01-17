import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    state = { // stores data and allows updates
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            }
        ],
    }

    removeCharacter = (index) => {
        const {characters} = this.state
      
        this.setState({ //updates characters 
          characters: characters.filter((character, i) => { //filtering array based on index
            return i !== index
          }),
        })
      }

      render() {
        const { characters } = this.state


      return (
        <div className="container">
          <Table 
            characterData={characters} 
            removeCharacter={this.removeCharacter}/>
        </div>
      )
    }
  }

  export default App