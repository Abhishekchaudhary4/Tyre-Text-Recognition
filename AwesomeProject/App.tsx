/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack=createStackNavigator();
type SectionProps = PropsWithChildren<{
  title: string;
}>;
function ScreenA({navigation}: {navigation: any}){
  const onPressHandler1 = ()=>{
    navigation.navigate('Screen_B');
  }
  const onPressHandler2 = ()=>{
    navigation.navigate('Screen_C');
  }
  const onPressHandler3 = ()=>{
    navigation.navigate('Screen_D');
  }
  return(
    <ScrollView>
    <View>
    <View style={styles.model1}>
      {/* <Text>ScrrenA</Text> */}
      <View style={styles.model1_upper}>
      <View style={styles.uppertyres}>
      <View style={styles.Leftupper}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>1</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>2</Text>
      </View>

      </View>

      <View style={styles.Rightupper}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>3</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>4</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>5</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>6</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>7</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>8</Text>
      </View>

      </View>
      


      </View>
      <View style={styles.model}>
      <Text style={styles.txt}>MHCV Model1</Text>
      </View>
      <View style={styles.downtyres}>
      <View style={styles.Leftdown}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>9</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>10</Text>
      </View>

      </View>

      <View style={styles.Rightdown}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>11</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>12</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>13</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>14</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>15</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>16</Text>
      </View>

      </View>
      

      
      </View>
      </View>

      
      {/* <View style={styles.scanbutton}>
      <View style={styles.scanvinbutton}>
        <Button  onPress={() => {
    console.log('You tapped the button!');
  }}
        title='SCAN VIN' ></Button>
      </View>
      <View style={styles.scanvinbutton}>
        <Button  onPress={() => {
    console.log('You tapped the button!');
  }}
        title='SCAN serial no.' ></Button>
      </View>
      </View> */}
      
       <Pressable style={styles.openButton1}
      onPress={onPressHandler1}
        // style={({pressed})=>({backgroundColor: pressed? '#ddd': '#0f0'})}
        >
          <Text style={styles.txt}>Open model 1</Text>
      </Pressable> 

    </View>

    <View style={styles.model1}>
      {/* <Text>ScrrenA</Text> */}
      <View style={styles.model1_upper}>
      <View style={styles.uppertyres}>
      <View style={styles.Leftupper}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>1</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>2</Text>
      </View>

      </View>

      <View style={styles.Rightupper}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>3</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>4</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>5</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>6</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>7</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>8</Text>
      </View>

      </View>
      


      </View>
      <View style={styles.model}>
      <Text style={styles.txt}>MHCV Model2</Text>
      </View>
      <View style={styles.downtyres}>
      <View style={styles.Leftdown}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>9</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>10</Text>
      </View>

      </View>

      <View style={styles.Rightdown}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>11</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>12</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>13</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>14</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>15</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>16</Text>
      </View>

      </View>
      

      
      </View>
      </View>

      
      {/* <View style={styles.scanbutton}>
      <View style={styles.scanvinbutton}>
        <Button  onPress={() => {
    console.log('You tapped the button!');
  }}
        title='SCAN VIN' ></Button>
      </View>
      <View style={styles.scanvinbutton}>
        <Button  onPress={() => {
    console.log('You tapped the button!');
  }}
        title='SCAN serial no.' ></Button>
      </View>
      </View> */}
      
       <Pressable style={styles.openButton1}
      onPress={onPressHandler2}
        // style={({pressed})=>({backgroundColor: pressed? '#ddd': '#0f0'})}
        >
          <Text style={styles.txt}>Open model 2</Text>
      </Pressable> 

    </View>

    <View style={styles.model1}>
      {/* <Text>ScrrenA</Text> */}
      <View style={styles.model1_upper}>
      <View style={styles.uppertyres}>
      <View style={styles.Leftupper}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>1</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>2</Text>
      </View>

      </View>

      <View style={styles.Rightupper}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>3</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>4</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>5</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>6</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>7</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>8</Text>
      </View>

      </View>
      


      </View>
      <View style={styles.model}>
      <Text style={styles.txt}>MHCV Model3</Text>
      </View>
      <View style={styles.downtyres}>
      <View style={styles.Leftdown}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>9</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>10</Text>
      </View>

      </View>

      <View style={styles.Rightdown}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>11</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>12</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>13</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>14</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>15</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>16</Text>
      </View>

      </View>
      

      
      </View>
      </View>

      
      {/* <View style={styles.scanbutton}>
      <View style={styles.scanvinbutton}>
        <Button  onPress={() => {
    console.log('You tapped the button!');
  }}
        title='SCAN VIN' ></Button>
      </View>
      <View style={styles.scanvinbutton}>
        <Button  onPress={() => {
    console.log('You tapped the button!');
  }}
        title='SCAN serial no.' ></Button>
      </View>
      </View> */}
      
       <Pressable style={styles.openButton1}
      onPress={onPressHandler3}
        // style={({pressed})=>({backgroundColor: pressed? '#ddd': '#0f0'})}
        >
          <Text style={styles.txt}>Open model 3</Text>
      </Pressable> 

    </View>
    </View>
    </ScrollView>
  )
}
function ScreenC(){
  return(
    <View>
      <Text>Screen C</Text>
    </View>
  )
}
function ScreenD(){
  return(
    <View>
      <Text>Screen D</Text>
    </View>
  )
}
function ScreenCam(){
  const [{cameraRef},{takePicture}]=useCamera();
  const captureHandle= async ()=>{
    try{
      const data= await takePicture();
      console.log(data.uri);

    } catch(error){
      console.log(error);
      
    }
  }
  return(
    <View>
     <RNCamera 
     ref={cameraRef}
     type={RNCamera.Constants.Type.back}
     captureAudio={false}
    //  style={styles.preview}
     >
      <Button 
        title="capture"
        color='#1eb'
        onPress={()=> captureHandle()}
        />
        
     </RNCamera>
    </View>
  )
}
function ScreenB({navigation}: {navigation: any}){
  const onPressHandler4 = ()=>{
    navigation.navigate('Screen_Cam');
  }
  return(
    // <View>
    //   <Text>Scrren B</Text>
    // </View>
    <View>
     <View style={styles.upper}>
     <View style={styles.uppertyres}>
     <View style={styles.Leftupper}>

     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>1</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>2</Text>
     </View>

     </View>

     <View style={styles.Rightupper}>

     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>3</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>4</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>5</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>6</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>7</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>8</Text>
     </View>

     </View>
     


     </View>
     <View style={styles.model}>
     <Text style={styles.txt}>MHCV Model1</Text>
     </View>
     <View style={styles.downtyres}>
     <View style={styles.Leftdown}>

     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>9</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>10</Text>
     </View>

     </View>

     <View style={styles.Rightdown}>

     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>11</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>12</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>13</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>14</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>15</Text>
     </View>
     <View style={styles.tyrebox1}>
       <Text style={styles.txt}>16</Text>
     </View>

     </View>
     

     
     </View>
     </View>

     <Pressable style={styles.openButton1}
      onPress={onPressHandler4}
        // style={({pressed})=>({backgroundColor: pressed? '#ddd': '#0f0'})}
        >
          <Text style={styles.txt}> Open Camera</Text>
      </Pressable> 
     <View style={styles.scanbutton}>
     <View style={styles.scanvinbutton}>
       <Button  onPress={() => {
   console.log('You tapped the button!');
 }}
       title='SCAN VIN' ></Button>
     </View>
     <View style={styles.scanvinbutton}>
       <Button  onPress={() => {
   console.log('You tapped the button!');
 }}
       title='SCAN serial no.' ></Button>
     </View>
     </View> 
     </View>
  )
}
function App() {
 
  return (
    
    
       /* <View style={styles.upper}>
      <View style={styles.uppertyres}>
      <View style={styles.Leftupper}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>1</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>2</Text>
      </View>

      </View>

      <View style={styles.Rightupper}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>3</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>4</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>5</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>6</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>7</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>8</Text>
      </View>

      </View>
      


      </View>
      <View style={styles.model}>
      <Text style={styles.txt}>MHCV Model1</Text>
      </View>
      <View style={styles.downtyres}>
      <View style={styles.Leftdown}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>9</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>10</Text>
      </View>

      </View>

      <View style={styles.Rightdown}>

      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>11</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>12</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>13</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>14</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>15</Text>
      </View>
      <View style={styles.tyrebox1}>
        <Text style={styles.txt}>16</Text>
      </View>

      </View>
      

      
      </View>
      </View>

      
      <View style={styles.scanbutton}>
      <View style={styles.scanvinbutton}>
        <Button  onPress={() => {
    console.log('You tapped the button!');
  }}
        title='SCAN VIN' ></Button>
      </View>
      <View style={styles.scanvinbutton}>
        <Button  onPress={() => {
    console.log('You tapped the button!');
  }}
        title='SCAN serial no.' ></Button>
      </View>
      </View>  */


     
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen 
          name='Screen_A'
          component={ScreenA}
          />
           <stack.Screen 
          name='Screen_B'
          component={ScreenB}
          />
          <stack.Screen 
          name='Screen_C'
          component={ScreenC}
          />
           <stack.Screen 
          name='Screen_D'
          component={ScreenD}
          />
          <stack.Screen 
          name='Screen_Cam'
          component={ScreenCam}
          />

        </stack.Navigator>

      </NavigationContainer>

   
  )
}

const styles = StyleSheet.create({
  upper:{
    width:410,
    height:350,
    backgroundColor:'yellow'
    },
   model1:{
    flexDirection:'row',
   },
   model1_upper:{
    width:315,
    height:350,
    // backgroundColor:'yellow'
    
   },
   openButton1:{
    height:50,
    justifyContent:'center',
    marginTop:110,
    backgroundColor:'#ff0000'
   },
    Leftupper:{
     flexDirection:'row',
     margin:20,
     marginTop:40,
    //  backgroundColor:'pink',
     width:90,
     height:30,
    },
    Rightupper:{
      flexDirection:'row',
      flexWrap:'wrap',
      marginLeft:70,
      width:120,
      height:60,
      // backgroundColor:'pink',
      marginBottom:20,
      marginTop:20

    },
    Rightdown:{
      flexDirection:'row',
      flexWrap:'wrap',
      marginLeft:70,
      width:120,
      height:60,
      // backgroundColor:'pink',
      marginBottom:20,
      marginTop:20

    },
    uppertyres:{
      flexDirection:'row'

    },
    downtyres:{
      flexDirection:'row'

    },
    Leftdown:{
      flexDirection:'row',
      // backgroundColor:'pink',
      margin:20,},
 model:{
  width:300,
  height:90,
  backgroundColor:'blue',
  alignItems:'center',
  justifyContent:'center',
  marginLeft:15,
  
  

 },

 txt:{
  color:'#fffb',
  fontSize:15,
  alignContent:'center'  ,
  textAlign:'center'
 },
 tyrebox1:{
  height:20,
  width:30,
  backgroundColor:'grey',
  // marginTop:110,
  // marginBottom:10,
  margin:5,
  color:'red',
  
 },
 tyrebox2:{
  height:30,
  width:40,
  backgroundColor:'grey',
  // marginTop:110,
  // marginBottom:10,
  marginLeft:100,
  color:'red',
  
 },
 scanbutton:{
  flexDirection:'row',
  margin:20
 },
 scanvinbutton:{
  width:150,
  height:60,
  marginLeft:20,


 },
 preview:{
 flex:1,
 alignItems:'center',
 justifyContent:'flex-end',
 },
});

export default App;

