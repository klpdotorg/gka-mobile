import React, { Component } from 'react'
import { View, Picker, TouchableOpacity, Text } from 'react-native'

import { Loading } from '../common';
import { fetchStates } from '../actions'

import styles from './styles'

class SelectState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fetchingStates: true,
      states: [],
      selectedState: ''
    }
    this.goToDashboard = this.goToDashboard.bind(this)
  }

  componentDidMount() {
    fetchStates().then((res) => {
      const states = res.results.filter((state) => {
        return state.gka_dashboard_enabled
      }).map((state) => {
        return {
          label: state.name,
          value: state.site_url
        }
      })

      this.setState({
        states,
        fetchingStates: false,
        selectedState: states.length ? states[0].value: '',
      })
    })
  }

  goToDashboard() {
    const { selectedState } = this.state
    
    if (selectedState) {
      this.props.navigation.navigate('dashboard', {
        url: `${selectedState}/gka`
      })
    } else {
      alert('Please select the state first.')
    }
  }

  render() {
    const { fetchingStates, states } = this.state

    if (fetchingStates) {
      return <Loading />
    }

    return (
      <View style={styles.statesPage}>
        <Text style={{ width: '80%', paddingBottom: 10, fontSize: 17, paddingLeft: 5 }}>Select your state</Text>
        <View style={{ height: 40, width: '80%', borderWidth: 1, borderColor: '#f0f0f0', borderRadius: 5 }}>
          <Picker
            selectedValue={this.state.selectedState}
            style={{ height: 40, width: '100%' }}
            onValueChange={(itemValue) =>
              this.setState({ selectedState: itemValue })
            }
          >
            {states.map((state, i) => {
              return <Picker.Item label={state.label} value={state.value} key={i} />
            })}
          </Picker>
        </View>
        <TouchableOpacity onPress={this.goToDashboard} style={styles.button}>
          <Text style={styles.buttonText}>Go!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SelectState
