import React, { PureComponent } from 'react';
import { BackHandler, Animated, Easing } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
} from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import Loading from './containers/Loading';
import Login from './containers/Login';
import Home from './containers/Home';
import Account from './containers/Account';
import Detail from './containers/Detail';

const HomeNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  Account: { screen: Account },
});

HomeNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index]
  if (routeName === 'Home') {
    return {
      header: null,
    };
  } else {
    return {
      headerTitle: routeName,
    };
  }
};

const MainNavigator = createStackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    Detail: { screen: Detail },
  },
  {
    headerMode: 'float',
  }
);

const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login },
  },
  {
    headerMode: 'none', // headerMode - 指定如何呈现标题：
    mode: 'modal', // 定义渲染和转换的样式  modal - 使屏幕从底部滑入，这是一种常见的iOS模式。仅适用于iOS，对Android没有影响。
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({ //
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);

export const routerReducer = createNavigationReducer(AppNavigator);

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
);

const App = reduxifyNavigator(AppNavigator, 'root');

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    // 监听设备上的后退按钮事件(主要是安卓)。    ios:尚无作用
    BackHandler.addEventListener('hardwareBackPress', this.backHandle);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router);
    if (currentScreen === 'Login') {
      return true;
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back()); // 往后退
      return true;
    }
    return false;
  }

  render() {
    const { app, dispatch, router } = this.props;
    if (app.loading) return <Loading />;

    return <App dispatch={dispatch} state={router} />;
  }
}

export default Router;
