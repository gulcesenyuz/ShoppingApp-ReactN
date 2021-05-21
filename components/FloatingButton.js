import React from 'react';
import { View,Animated,TouchableWithoutFeedback,Text, StyleSheet,SafeAreaView } from 'react-native';
import {AntDesign, Entypo} from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class FloatingButton extends React.Component{
animation=new Animated.Value(0);


toggleMenu=()=>{
  const toValue= this.open?0:1;
  Animated.spring(this.animation, {
    toValue,
    friction:5
  }).start();
  this.open=! this.open;
}

  render(){
    const { navigation } = this.props;

const pinStyle={
  transform:[
    {scale: this.animation},
    {
      translateY: this.animation.interpolate({
        inputRange:[0,1],
        outputRange:[0,-20]
      })
    }
  ]
}

    const rotation={
      transform:[
       { rotate: this.animation.interpolate({
          inputRange:[0,1],
          outputRange:["0deg","180deg"]
        })}
      ]
    }
    return(
      <View style={[styles.container, this.props.style]}>

        <TouchableWithoutFeedback>
       <Animated.View style={[styles.button, styles.secondary,pinStyle]}>
       <Entypo onPress={()=>navigation.navigate('AddCategory')} name="plus" size={24} color='red'/>

       </Animated.View>
       </TouchableWithoutFeedback>

       <TouchableWithoutFeedback onPress={this.toggleMenu}>
       <Animated.View style={[styles.button, styles.menu, rotation]}>
       <AntDesign name="up"  size={24} color='white'/>

       </Animated.View>
       </TouchableWithoutFeedback>

      </View>

    )
  }
}

const styles=StyleSheet.create({
  container:{
    left:"70%",
    top:"85%",
 position:"absolute",
    alignItems:'center'
  },
  button:{
    //position:'absolute',
    width:60,
    height:60,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
    shadowColor:"grey",
    shadowRadius:10,
    shadowOpacity:0.3,
    shadowOffset:{ height:10}
  },
  menu:{
    backgroundColor:'#ffc13b'
  },
  secondary:{
    width:40,
    height:40,
    borderRadius:24,
    backgroundColor:'#f5f0e1'
  }
})