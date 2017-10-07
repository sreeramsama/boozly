import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

class App extends React.Component {
  static navigationOptions = {
    title: 'Boozly',
    headerTitleStyle: {
      color: 'white',
    },
    headerStyle: {
      backgroundColor: 'deeppink',
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.header}>Most Popular</Text>
        </View>

        <View style={styles.bzCard}>
          <Image source={require('./goose.jpeg')} style={styles.alcoholImage} />
          <Text>Grey Goose</Text>
        </View>

        <TouchableHighlight style={styles.ctaButton} onPress={() => navigate('Results')}>
          <Text style={styles.ctaButtonText}>Boozly Me!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    flexGrow: 1,
  },
  headingContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 10,
  },
  ctaButton: {
    backgroundColor: 'deeppink',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
    marginTop: 12,
  },
  bzCard: {
    backgroundColor: 'white',
    paddingTop: 24,
    paddingRight: 10,
    paddingBottom: 24,
    paddingLeft: 10,
    shadowOpacity: 0.08,
    shadowColor: '#242936',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 1,
    marginTop: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  alcoholImage: { 
    height: 200,
    width: 100,
  },
  ctaButtonText: {
    color: 'white',
  },
});

class ResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'Results',
    headerTitleStyle: {
      color: 'white',
    },
    headerStyle: {
      backgroundColor: 'deeppink',
    },
  };  

  render() {
    return (
      <View>
        <View style={styles.bzCard}>
          <Text>Results...</Text>
        </View>
      </View>
    );
  }
}

export default Boozly = StackNavigator({
  Landing: { screen: App },
  Results: { screen: ResultsScreen },
});
