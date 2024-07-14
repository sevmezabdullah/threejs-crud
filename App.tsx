

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import List from './src/pages/list';
import ModelView from './src/pages/model_view';
import CreateModel from './src/pages/create_model';
import PAGES from './src/utils/pages_const';
import { ListProvider } from './src/context/listContext';


const Stack = createStackNavigator();
function App(): React.JSX.Element {
  return (

    <ListProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="list">
          <Stack.Screen name={PAGES.List} options={{ headerShown: false }} component={List} />
          <Stack.Screen name={PAGES.ModelView} options={{ headerShown: false }} component={ModelView} />
          <Stack.Screen name={PAGES.CreateModel} options={{ headerShown: false }} component={CreateModel} />
        </Stack.Navigator>
      </NavigationContainer>
    </ListProvider>

  );
}


export default App;
