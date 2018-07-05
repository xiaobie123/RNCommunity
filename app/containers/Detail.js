import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import { Button } from '../components';
import { NavigationActions } from '../utils';

const { width, height } = Dimensions.get('window');

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  }
  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }));
  }
  showActionSheet = () => {
    this.ActionSheet.show();
  }
  render() {
    return (
      <View style={styles.container}>
        <Button text="Go Back" onPress={this.goBack} />
        <Text onPress={this.showActionSheet}>Open ActionSheet</Text>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Which one do you like ?'}
          options={['Apple', 'Banana', 'cancel']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { /* do something */ }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width,
    backgroundColor: 'red',
  },
});

export default Detail;
