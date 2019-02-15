import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  button: {
    width: '80%',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#6EB7C7',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statesPage: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  selectDropdownText: {
    width: '80%',
    paddingBottom: 10,
    fontSize: 17,
    paddingLeft: 5,
    paddingTop: 15
  },
  dropdownCont: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 5
  }
});

export default styles;
