import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import { Button } from '../components';
import { NavigationActions } from '../utils';

const { width, height } = Dimensions.get('window');

@connect()
class listItem extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  }
  render() {
    // const myIcon = (<Icon name="rocket" size={30} color="#900" />);
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => { this.props.gotoDetail(); }}>
          <Text>fdfdf</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.props.gotoDetail(); }}>
          <Text>fdfdf</Text>
        </TouchableHighlight>
        <View>
          <Text><Icon name="rocket" size={30} color="#900" /></Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
        </View>
        <ActionSheet
          title={'Which one do you like ?'}
          ref={o => this.ActionSheet = o}
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

export default listItem;
