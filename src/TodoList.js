import React, { Component, Fragment } from "react";
import { changeInputValue,addListItem } from './store/actionCreator';
import store from "./store";
import axios from "axios";
import { TitleDiv, InputContainer, InputQues, 
    ButtonContainer, SubmitButton, AnswerDiv } from "./style/style"
import { OpenAI } from "langchain/llms/openai";

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(() =>this.setState(store.getState()));
        this.changeInputValue = this.changeInputValue.bind(this);
        this.addListValue = this.addListValue.bind(this);

        
    }
    componentDidMount(){
        console.log("commponentDidMount");
     
    }

    render() {
        return (
            <Fragment>
                <div>
                    <TitleDiv>
                        <div>🦜️🔗 LangChain</div>
                    </TitleDiv>
                    <InputContainer>
                        <InputQues placeholder="输入你的问题，我将为你解答" value={this.state.inputValue} onChange={this.changeInputValue} />
                        <ButtonContainer>
                            <SubmitButton onClick={this.addListValue}>提交</SubmitButton>
                        </ButtonContainer>
                    </InputContainer>
                       
                    <AnswerDiv>{this.state.answer}</AnswerDiv>
                </div>
            </Fragment>
        )      
    } 
    changeInputValue(e){
        console.info(e.target.value);
        const inputValue = e.target.value;
        store.dispatch(changeInputValue(inputValue))
    }

    async addListValue() {
        const inputValue = this.state.inputValue;
        const model = new OpenAI({ openAIApiKey: "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",
         temperature: 0.9 });
        
        const resA = await model.call(
            inputValue
          );
        console.info("我的回答是:" +resA);
        store.dispatch(addListItem(resA))

    }

}
export default TodoList;