import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import History from './History';


export default function App() {

const Stack = createNativeStackNavigator(); 

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
    </NavigationContainer>
    );
    
}
