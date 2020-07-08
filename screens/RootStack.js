import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';

import SplashComponent from '../screens/SplashComponent';
import SignInComponent from '../screens/SignInComponent';
import SignUpComponent from '../screens/SignUpComponent';

const Stack = createStackNavigator();

// Register: { screen: SplashComponent },
// SignInScreen:{
//     screen:SignInComponent,
//     navigationOptions:{
//         headerShown:false
//     }
// },
// SignUpScreen:{
//     screen:SignUpComponent,
//     navigationOptions:{
//         headerShown:false
//     }
// }
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashComponent} />
        </Stack.Navigator>
    );
}function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUpComponent} />
        </Stack.Navigator>
    );
}





// export default createAppContainer(Stack);