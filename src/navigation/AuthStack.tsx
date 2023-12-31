import React from 'react'
import { ScreenList } from './NavigationProp'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import ForgetScreen from '../screens/ForgetScreen'


const AuthStack = () => {
  const stack = createNativeStackNavigator<ScreenList>()

  return (
    <stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName='Login'>
        
        <stack.Screen name="Login" component={Login}  />
        <stack.Screen name="SignUp" component={SignUp}  />
        <stack.Screen name="ForgetScreen" component={ForgetScreen}  />
      </stack.Navigator>
  )
}

export default AuthStack