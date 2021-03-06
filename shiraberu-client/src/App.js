import './App.css';
import React from "react"
import SignIn from "./panels/signIn/SignIn"
import SignUp from "./panels/signUp/SignUp"
import ResetPassword from "./panels/resetPassword/ResetPassword"
import Home from "./panels/home/Home"
import Loading from "./util/Loading"
import Lesson from './panels/lesson/Lesson'

import * as firebase from "firebase"
import { createMuiTheme } from '@material-ui/core/styles';


class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {activePanel: "Loading"}
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              this.setState({activePanel: "Home"})
          } else {
              this.setState({activePanel: "SignIn"})
          }
      }.bind(this))
      this.activePanelHandler = this.activePanelHandler.bind(this)
      this.handleLesson = this.handleLesson.bind(this)
  }


  activePanelHandler(nextPanel, event = null) {
      this.setState({activePanel: nextPanel})
  }

  handleLesson(queue){
    queue = [28,29,30,31]
    this.setState({lessonQueue: queue})
    this.activePanelHandler("Lesson")
  }

  render() 
  {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ffdb50',
        main: '#f7aa11',
        dark: '#bf7b00',
        contrastText: '#fff',
      },
      secondary: {
        light: '#d853ff',
        main: '#a108ee',
        dark: '#6a00ba',
        contrastText: '#fff',
      }
    },
  });

  const colors = {
    radicals : '#10f6a9',
    kanji: '#f7aa11',
    vocab: '#a108ee',
  }
  switch (this.state.activePanel) {
      case "Loading":
        return <Loading theme={theme}/>
      case "Home":
        return <Home activePanelHandler = {this.activePanelHandler} handleLesson = {this.handleLesson} theme={theme}/>
      case "Lesson":
        return <Lesson activePanelHandler = {this.activePanelHandler} lessonQueue = {this.state.lessonQueue} theme={theme} colors={colors}/>
      case "SignIn":
        return <SignIn activePanelHandler = {this.activePanelHandler} theme={theme}/>
      case "SignUp":
        return <SignUp activePanelHandler = {this.activePanelHandler} theme={theme}/>
      case "ResetPassword":
        return <ResetPassword activePanelHandler = {this.activePanelHandler} theme={theme}/>
      default:
        return <h1>Что-то пошло не так 🤕</h1>
  }
  }

}

export default App