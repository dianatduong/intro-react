import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = { // stores data and allows updates
        characters: [
           
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

      handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
      }

      render() {
        const { characters } = this.state


      return (
        <div className="container">
          <Table 
            characterData={characters} 
            removeCharacter={this.removeCharacter}/>
            <Form handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }

  export default App