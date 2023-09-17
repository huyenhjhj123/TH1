import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ex1 from '../helloword/scr/ex1';
import ex2 from './scr/ex2';
import ex3 from './scr/ex3';
import ex4 from './scr/ex4';
import Ex5 from './scr/ex5';
//import ex4 from './scr/ex4';
//import ex4 from './scr/ex4';
//import ex4 from './scr/ex4';




const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Ex1', title: 'Ex1', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex2', title: 'Ex2', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex3', title: 'Ex3', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex4', title: 'Ex4', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex5', title: 'Ex5', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    //{ key: 'Ex6', title: 'Ex6', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    //{ key: 'Ex7', title: 'Ex7', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    //{ key: 'Ex8', title: 'Ex8', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Ex1: ex1,
    Ex2: ex2,
    Ex3: ex3,
    Ex4: ex4,
    Ex5: Ex5,
    //Ex4: ex4,
    //Ex4: ex4,
    //Ex4: ex4,

  });

  return (
    <SafeAreaProvider>
       <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </SafeAreaProvider>
   
  );
};

export default MyComponent;
