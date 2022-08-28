import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import Task from './components/Tasks';

export default function App() {
  // store task to state
  const [task, setTask] = useState();
  // Array to add Tasks to list. useState() is goin to be emp array
  const [taskItems, setTaskItems] = useState([]);
  // logs a task which are in state.
  const handleAddTask = () => {
    Keyboard.dismiss();
    console.log(task);
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  //Delete Task
  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks  */}
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>Today's Tasks</Text>
        <View style = {styles.items}>
          {/* This is where the tasks will go */}
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key = {index} onPress = {() => completeTask(index)}>
                <Task text = {item} />

                </TouchableOpacity>
              )    
            })
          }
         
        </View>
        {/* Write a Task */}
        <KeyboardAvoidingView
          behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
          style = {styles.writeTaskWrapper}
          >
            <TextInput style = {styles.input} placeholder = {'Write a Task'} vvalue = {task} onChangeText = {text => setTask(text)}/>
            <TouchableOpacity onPress = {() => handleAddTask()}>
              <View style = {styles.addWrapper}>
                <Text style = {styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'center',
    bottom: -60,
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText: {

  },

});
