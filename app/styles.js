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
  }
});

export default styles;
