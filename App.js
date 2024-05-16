
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  state = {
    homePageDisplay: 'block',
    plantPageDisplay: 'none',
    tasksPageDisplay: 'none',
    historyPageDisplay: 'none',
    zoomInPageDisplay: 'none',
    addTaskDisplay: 'none',
    tasksComplete: [],
    tasksIncomplete: [],
    complete: 0,
    incomplete: 0,
    addTask: '',
    plantName: 'Name your plant!',
    plantGrowth: ["./assets/PlantImages/Plant1.jpg",
      "./assets/PlantImages/Plant2.jpg", "./assets/PlantImages/Plant3.jpg",
      "./assets/PlantImages/Plant4.jpg", "./assets/PlantImages/Plant5.jpg",
      "./assets/PlantImages/Plant6.jpg", "./assets/PlantImages/Plant7.jpg",
      "./assets/PlantImages/Plant8.jpg", "./assets/PlantImages/Plant9.jpg",
      "./assets/PlantImages/Plant10.jpg", "./assets/PlantImages/Plant11.jpg"],
    plantVariable: 0,
    daysCompleteTasks: 0,
    daysIncompleteTasks: 0,
    date: new Date(),
    datee: 'today'

  };

  _storeData = async () => {
    console.log(this.getFormattedDate(this.state.date));
    try {
      await AsyncStorage.setItem(
        this.getFormattedDate(this.state.date),
        [this.state.tasksComplete.length, this.state.tasksIncomplete.length],
      );

      console.log('successfully stored data');
    } catch (error) {
      console.log(error);
    }
  };

  _getData = async (date) => {
    console.log(date);
    try {
      const value = await AsyncStorage.getItem(date);
      if (value !== null) {
        // We have data!!
        console.log(value);

        console.log('successfully retrieved data');
        this.setState((state) => ({
          daysCompleteTasks: value[0],
          daysIncompleteTasks: value[2]
        }));
      } else {
        console.log(console.log('did not retrieve data'));
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    console.log(month + '-' + day + '-' + year);

    return month + '-' + day + '-' + year;
  }

  formatDate = (dateString) => {
    var spl = dateString.split("-");
    return (spl[1] + "-" + spl[2] + "-" + spl[0]);
  }

  toggleAddTaskDisplay = () => {
    if (this.state.addTaskDisplay === 'none') {
      this.setState((state) => ({
        addTaskDisplay: 'block'
      }));
    }
    else if (this.state.addTaskDisplay === 'block') {
      this.setState((state) => ({
        addTaskDisplay: 'none'
      }));
    }
  }

  handlePlantGrowthPagePress = () =>
    this.setState((state) => ({
      homePageDisplay: 'none',
      plantPageDisplay: 'block',
      tasksPageDisplay: 'none',
      historyPageDisplay: 'none',
      zoomInPageDisplay: 'none',
    }));
  handleTaskPagePress = () =>
    this.setState((state) => ({
      homePageDisplay: 'none',
      plantPageDisplay: 'none',
      tasksPageDisplay: 'block',
      historyPageDisplay: 'none',
      zoomInPageDisplay: 'none',
    }));
  handleHistoryPagePress = () =>
    this.setState((state) => ({
      homePageDisplay: 'none',
      plantPageDisplay: 'none',
      tasksPageDisplay: 'none',
      historyPageDisplay: 'block',
      zoomInPageDisplay: 'none',
    }));



  addNewTask = () => {
    this.setState(() => ({
      tasksIncomplete: [...this.state.tasksIncomplete, this.state.addTask],
      addTask: '',
    }))
  }


  handleIncompleteTask2 = (task) => {
    // this.setState((prevState) => {
    //   /* const newIncompleteCount = prevState.incomplete > 0 ? prevState.incomplete - 1 : prevState.incomplete;
    //   const newCompleteCount = prevState.complete + 1; */

    //   return {
    //     tasksIncomplete: prevState.tasksIncomplete.filter(e => e !== task),
    //     tasksComplete: [...prevState.tasksComplete, task],
    //     incomplete: this.state.tasksIncomplete.length,
    //     complete:  this.state.tasksComplete.length,
    //   };
    // }, () => {
    //   console.log("incomplete: " + this.state.incomplete);
    //   console.log("complete: " + this.state.complete);
    // });
    if (this.state.tasksComplete.length <= 10) {
      this.setState(() => ({
        plantVariable: this.state.tasksComplete.length,
      }));
    }
    else if (this.state.tasksComplete.length > 10) {
      this.setState(() => ({
        plantVariable: 10,
      }));
    }
    this.setState(() => ({
      tasksIncomplete: this.state.tasksIncomplete.filter(e => e !== task),
      tasksComplete: [...this.state.tasksComplete, task],
      incomplete: this.state.tasksIncomplete.length,
      complete: this.state.tasksComplete.length,
    }));
    console.log("incomplete: " + this.state.tasksIncomplete.length);
    console.log("complete: " + this.state.complete);
  }

  handleCompleteTask2 = (task) => {
    // this.setState((prevState) => {
    //   /* const newCompleteCount = prevState.complete > 0 ? prevState.complete - 1 : prevState.complete;
    //   const newIncompleteCount = prevState.incomplete + 1; */

    //   return {
    //     tasksComplete: this.state.tasksComplete.filter(e => e !== task),
    //   tasksIncomplete: [...this.state.tasksIncomplete, task],
    //     complete: this.state.tasksComplete.length,
    //     incomplete: this.state.tasksIncomplete.length,
    //   };
    // }, () => {
    //   console.log("incomplete: " + this.state.incomplete);
    //   console.log("complete: " + this.state.complete);
    // });
    if (this.state.tasksComplete.length <= 10) {
      this.setState(() => ({
        plantVariable: this.state.tasksComplete.length,
      }));
    }
    else if (this.state.tasksComplete.length > 10) {
      this.setState(() => ({
        plantVariable: 10,
      }));
    }
    this.setState(() => ({
      tasksComplete: this.state.tasksComplete.filter(e => e !== task),
      tasksIncomplete: [...this.state.tasksIncomplete, task],
      incomplete: this.state.tasksIncomplete.length,
      complete: this.state.tasksComplete.length,
    }))
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ display: this.state.homePageDisplay }}>
          <View style={styles.container3}>

            <Text style={styles.welcometext}>Welcome to </Text>
            <Image
              source={require("./assets/PlantImages/blossomLogo.png")}
              style={styles.logoFormatting}

            />

            <View style={styles.container7}>
              <Text style={styles.instructions}> Set tasks everyday and complete them to grow your plant! </Text>
            </View>
            <TouchableHighlight onPress={this.handlePlantGrowthPagePress} style={styles.button} >
              <Text>GO TO APP ➡ </Text>

            </TouchableHighlight>

          </View>
        </View>

        <View style={{ display: this.state.tasksPageDisplay }}>
          <View style={styles.container2}>

            <TouchableHighlight onPress={this.toggleAddTaskDisplay} >
              <Text style={styles.title}>+ New Task</Text>
            </TouchableHighlight>

            <View style={{ display: this.state.addTaskDisplay }}>
              <View style={styles.container4}>
                <TextInput style={styles.inputtext}
                  placeholder='Enter task'
                  value={this.state.addTask}
                  onChangeText={(val) => this.setState({
                    addTask: val,
                  })}
                ></TextInput>
                <TouchableHighlight onPress={() => this.addNewTask()} style={styles.addtask}>
                  <Text style={styles.addtask}>Add task!</Text>
                </TouchableHighlight>
              </View>
            </View>
            <ScrollView>
              {this.state.tasksIncomplete.map((task, i) => (
                <TouchableHighlight key={i} onPress={() => this.handleIncompleteTask2(task)}>

                  <View style={styles.task} >
                    <Text style={styles.tasktext}>{task}</Text>
                  </View>
                </TouchableHighlight>
              ))
              }
              <View style={{ "textDecoration": "line-through" }}>
                {this.state.tasksComplete.map((task, i) => (
                  <TouchableHighlight key={i} onPress={() => this.handleCompleteTask2(task)}>
                    <View style={styles.task}>
                      <Text style={styles.tasktext}>{task}</Text>
                    </View>
                  </TouchableHighlight>
                ))
                }

              </View>
            </ScrollView>
            <TouchableHighlight onPress={() => this._storeData()}><Text>End Day</Text></TouchableHighlight>

          </View>
          <View style={styles.navcontainer}>

            <TouchableHighlight style={styles.buttoncontainer}
              onPress={this.handlePlantGrowthPagePress}
            >
              <Text style={styles.buttontext}>
                Plant
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttoncontainer}
              onPress={this.handleTaskPagePress}
            >
              <Text style={styles.buttontext}>
                Tasks
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttoncontainer}
              onPress={this.handleHistoryPagePress}
            >
              <Text style={styles.buttontext}>
                History
              </Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{ display: this.state.plantPageDisplay }}>
          <View style={styles.container6}>
            <View>
              <TextInput style={styles.inputtext}
                value={this.state.plantName}
                onChangeText={(val) => this.setState({
                  plantName: val,
                })}
              ></TextInput>
              <Image
                source={this.state.plantGrowth[this.state.plantVariable]}
                style={styles.imageFormatting}
              />
              <Text style={styles.statsText}>
                Tasks Completed Today: {this.state.tasksComplete.length}
              </Text>
              <Text style={styles.statsText}>
                Tasks Incomplete Today: {this.state.tasksIncomplete.length}
              </Text>
            </View>
          </View>

          <View style={styles.navcontainer}>

            <TouchableHighlight style={styles.buttoncontainer}
              onPress={this.handlePlantGrowthPagePress}
            >
              <Text style={styles.buttontext}>
                Plant
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttoncontainer}
              onPress={this.handleTaskPagePress}
            >
              <Text style={styles.buttontext}>
                Tasks
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttoncontainer}
              onPress={this.handleHistoryPagePress}
            >
              <Text style={styles.buttontext}>
                History
              </Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{ display: this.state.historyPageDisplay }}>
          <View style={styles.container5}>
            <Text style={styles.statsText}>{this.state.plantName}'s Calendar:</Text>

            <View style={styles.calStyle}>
              <Calendar onDayPress={day => this._getData(this.formatDate(day.dateString))} />
            </View>
            {/* 
            <Text style={styles.statsText}>Completed Tasks: {this.state.tasksComplete.length}</Text>
            <Text style={styles.statsText}>Incompleted Tasks: {this.state.tasksIncomplete.length}</Text>
 */}
            <Text style={styles.statsText}>Completed Tasks: {this.state.daysCompleteTasks}</Text>
            <Text style={styles.statsText}>Incompleted Tasks: {this.state.daysIncompleteTasks}</Text>


          </View>
          <View style={styles.navcontainer}>

            <TouchableHighlight style={styles.buttoncontainer}
              onPress={this.handlePlantGrowthPagePress}
            >
              <Text style={styles.buttontext}>
                Plant
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttoncontainer}
              onPress={this.handleTaskPagePress}
            >
              <Text style={styles.buttontext}>
                Tasks
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttoncontainer}
              onPress={this.handleHistoryPagePress}
            >
              <Text style={styles.buttontext}>
                History
              </Text>
            </TouchableHighlight>
          </View>


        </View>

        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 5 * (deviceHeight / 6),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    height: 5 * (deviceHeight / 6),
    alignItems: 'center',
  },
  container5: {
    height: 5 * (deviceHeight / 6),
    width: deviceWidth,
    alignItems: 'center'

  },
  container6: {
    height: 5 * (deviceHeight / 6),
    alignItems: 'center',
    justifyContent: 'center',

  },
  container7: {
    height: deviceHeight / 6,
    width: deviceWidth / 3,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  instructions: {
    fontSize: deviceHeight / 40,
    color: 'green',
    textAlign: 'center',
  },
  statsText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'green',
  },
  container4: {
    flex: 1,
    alignItems: 'center',
  },
  container3: {
    height: 5 * (deviceHeight / 6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoFormatting: {
    height: 50,
    width: 200,
    marginBottom: 25
  },
  welcometext: {
    fontSize: deviceHeight / 20,
    color: 'pink',
    fontWeight: 'bold'
  },
  button: {
    padding: 15,
    backgroundColor: 'white',
    margin: 10,
    width: deviceWidth / 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: deviceWidth / 70,
    color: 'green'
  },
  title: {
    fontSize: deviceHeight / 15,
    color: 'pink',
    fontWeight: 'bold',
  },
  addtask: {
    fontSize: deviceHeight / 35,
    height: deviceHeight / 25,
    width: deviceWidth / 5,
    color: 'pink',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  tasktext: {
    fontSize: deviceHeight / 20,
    color: 'green',
  },
  addTaskDisplay: {
    height: deviceHeight / 10,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    borderColor: 'green',
    borderWidth: 2,
  },
  inputtext: {
    fontSize: deviceHeight / 35,
    color: 'green',
    height: deviceHeight / 25,
    width: deviceWidth / 3.5,
    borderColor: 'green',
    borderWidth: 2,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 5,
  },
  calStyle: {
    width: 4 * (deviceWidth / 6)
  },
  navcontainer: {
    height: deviceHeight / 6,
    width: deviceWidth,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
  },
  buttoncontainer: {
    height: deviceHeight / 15,
    width: deviceWidth / 3.5,
    borderColor: 'green',
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 5,
  },
  buttontext: {
    fontSize: deviceHeight / 20,
    color: 'green',
  },
  imageFormatting: {
    height: deviceHeight / 2,
    width: deviceHeight / 2
  }
});
