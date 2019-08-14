import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the trash', done: false },
        { id: 1, title: 'Cook dinner', done: false }
      ]
    }
  }

  addNewToDo() {
    let updateTodos = this.state.todos;

    updateTodos.unshift({
      id: updateTodos.length + 1,
      title: this.state.todoInput,
      done: false
    });

    this.setState({
      todos: updateTodos,
      todoInput: '',
    });
    console.log(updateTodos)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <Header title="To Do List"/>
        <InputBar 
          textChange={(updateToDoInput) => this.setState({ todoInput: updateToDoInput })}
          addNewToDo={() => this.addNewToDo()}
          todoInput={this.state.todoInput}
        />
        <FlatList 
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={( item, index) => index.toString()}
          renderItem={ ({item, index}) => {
            return (
              <TodoItem todoItem={item}/>
            );
          }}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    backgroundColor: '#FFCE00',
    height: 23
  }
});
