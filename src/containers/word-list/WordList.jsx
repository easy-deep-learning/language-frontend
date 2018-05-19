import React from 'react'
import {
  Table
} from 'semantic-ui-react'

import axios from 'axios'

class WordList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      words: []
    }
  }

  componentDidMount () {
    axios
      .get(
        'http://api-language.easy-deep-learning.org/words',
        {
          crossDomain: true
        }
      )
      .then(response => {
        console.log(response)
        this.setState({
          words: response.data
        })
      })
  }

  render () {
    const words = this.state.words.map(word => (
        <Table.Row key={word.word}>
          <Table.Cell>{word.word}</Table.Cell>
          <Table.Cell>{word.translations.main}</Table.Cell>
          <Table.Cell>{word.created_at}</Table.Cell>
          <Table.Cell>{word.updated_at}</Table.Cell>
        </Table.Row>
      )
    )

    return (
      <div className="WordList">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>word</Table.HeaderCell>
              <Table.HeaderCell>translations</Table.HeaderCell>
              <Table.HeaderCell>created_at</Table.HeaderCell>
              <Table.HeaderCell>updated_at</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {words}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default WordList

