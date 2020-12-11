import React from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import cyrillicToHiragana from '../../kikana-src/src/cyrillicToHiragana'

/*REQUIRED PROPS:
    *current
    *colors
    *handleSubmit
*/

const blackTheme = createMuiTheme({
    palette: {
      primary: {
        light: '#ccc',
        main: '#999',
        dark: '#444',
        contrastText: '#fff',
      }
    },
  });

class EvaluationCard extends React.Component {
    constructor(props) {
    super(props)
        this.state = {
            answer: "",
        }
        this.transcribe = this.transcribe.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    transcribe(event) {
        let value = event.target.value
        const last = value.slice(-1).toLowerCase()
        //checking if the last character is "н" or "й"
        if(last !== "н" && last !== "й"){
            value = cyrillicToHiragana(value)
        }
        else if (last === "н"){
            //if the last two are "н"
            if(this.state.answer.slice(-1) === 'н'){
                value = this.state.answer.slice(0, -1) + "ん"
            }
            //if just the last one is "н"
            else {
                value = this.state.answer + "н"
            }
        }
        else { // last === "й"
            //if the last two are "й"
            if(this.state.answer.slice(-1) === 'й'){
                value = this.state.answer.slice(0, -1) + "い"
            }
            //if just the last one is "й"
            else {
                value = this.state.answer + "й"
            }
        }
        this.setState(
            {
                answer: value
            }
        )
    }

    handleSubmit(){
        this.props.handleSubmit(this.state.answer)
    }

    render() {
            const current = this.props.current
            let currentColor;
            let characters = current.characters
            let question;

            if(!current.readingPassed && !current.meaningPassed){
                question = current.meaningFirst ? "Значение": "Чтение";
            }
            else{
                question = current.readingPassed ? "Значение": "Чтение";
            }

            if(current.type === "R") {
                currentColor = this.props.colors.radicals;
                question += " Радикала"
            }
            else if(current.type === "K") {
                currentColor = this.props.colors.kanji;
                question += " Кандзи"
            }
            else if (current.type === "V")  {
                currentColor = this.props.colors.vocab;
                question += " Слова"
            }
            else {
                currentColor = "red"
                characters = "Ошибка"
            }

        
        return (<Card>
            <CardContent style={{backgroundColor: currentColor}}>
                <Typography variant="h1" component="h1" style = {{textAlign: "center", color: "white"}}>
                    {characters !== null ? 
                        characters :
                        <img alt = "radical_image" style={{ maxHeight: "90px"}} src={current.radical_picture} />
                    }
                </Typography>
                <br />
            </CardContent>
            <CardContent>
                <Typography variant="h5" component="h2" style = {{textAlign: "center"}}>
                    {question}
                </Typography>
            </CardContent>
            <hr color={"#EEEEEE"}/>
            <CardContent>
            <ThemeProvider theme={blackTheme}>
                <FormControl fullWidth="true">    
                    <TextField 
                        style={{marginBottom: "10px"}}
                        label="Ответ"
                        variant="outlined"
                        color = "primary"
                        name = "answer"
                        type = "answer"
                        value = {this.state.answer}
                        onChange = {this.transcribe}
                    />            
                    </FormControl>
                </ThemeProvider>
            </CardContent>
            <CardActions>
                <Button 
                    style = {{flex: 1}} 
                    size="small" 
                    onClick = {this.handleSubmit}
                >
                    Проверить
                </Button>
            </CardActions>
            </Card>
        )
    }
} 

export default EvaluationCard