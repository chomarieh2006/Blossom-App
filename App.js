import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function App() {
  state = {
    homePageDisplay:'block',
    plantPageDisplay: 'none',
    tasksPageDisplay: 'none',
    historyPageDisplay: 'none',
    zoomInPageDisplay: 'none',
    plantGrowth:["./assets/PlantImages/Plant1.jpg", 
    "./assets/PlantImages/Plant2.jpg", "./assets/PlantImages/Plant3.jpg", 
    "./assets/PlantImages/Plant4.jpg","./assets/PlantImages/Plant5.jpg", 
    "./assets/PlantImages/Plant6.jpg","./assets/PlantImages/Plant7.jpg", 
    "./assets/PlantImages/Plant8.jpg","./assets/PlantImages/Plant9.jpg", 
    "./assets/PlantImages/Plant10.jpg", "./assets/PlantImages/Plant11.jpg"],
  };

  handlePlantGrowthPagePress = {
    homePageDisplay:'none',
    plantPageDisplay: 'block',
    tasksPageDisplay: 'none',
    historyPageDisplay: 'none',
    zoomInPageDisplay: 'none',
  }

  return (
    <View style={styles.container}>
      <Image
        source = {require("./assets/PlantImages/blossomLogo.png")}
        style ={styles.logoFormatting}
        
      />
      <Text>Welcome to Blossom!</Text>
      <TouchableHighlight onClick = {this.handlePlantGrowthPagePress} style = {styles.button} >
        <Text>GO TO APP ➡</Text>

      </TouchableHighlight>
      {/* <Image
        source= {plantGrowth[0]}
        style= {{height:200, width:200}}
      /> */}
      <StatusBar style="auto" />
      <View style = {{display: this.state.plantPageDisplay}}>
        <View style = {styles.container2}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    height: 5*(deviceHeight/6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoFormatting:{
    height: 50,
    width:200,
    marginBottom:25
  },
  button:{
    padding:15,
    backgroundColor: 'green',
    margin: 10
  }
});
