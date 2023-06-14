import React, { Component } from "react"
import CountButton from "./components/CountButton"
import Number from "./components/Number"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin-top: 100px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

class App extends Component {
  state = { number: 0 }

  // state를 Update
  countUp = () => {
    this.setState(
      ({ number }) => ({
        number: number + 1
      })
    )
  }
  // setState 함수 앞에 state 값을 받고 이를 전달
  countDown = () => {
    const { number } = this.state
    this.setState({ number: number - 1 })
  }

  render() {
    // Destructuring Assignment 문법을 사용한 방식
    const { number } = this.state
    const { countUp, countDown } = this

    return (
      <Wrapper>
        <ButtonWrapper>
          <CountButton onClick={countUp} text="+" />
          <CountButton onClick={countDown} text="-" />
        </ButtonWrapper>
        <Number number={number} />
      </Wrapper>
    )
  }
}

export default App;
