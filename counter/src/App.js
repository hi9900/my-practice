import React from "react"
import CountButton from "./components/CountButton"
import Number from "./components/Number"
import styled from "styled-components"
import { connect } from "react-redux"
import * as counter from './store/reducer'
import { bindActionCreators } from 'redux'

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

// 기존코드 + LifeCycle API
// class App extends Component {
//   state = { number: 0 }

//   constructor(props) {
//     super(props)
//     console.log("constructor 호출")
//   }

//   componentDidMount() {
//     console.log("componentDidMount 호출")
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate 호출")
//     if (nextState.number % 3 === 0) return false
//     return true
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("componentDidUpdate 호출")
//   }

//   // state를 Update
//   countUp = () => {
//     this.setState(
//       ({ number }) => ({
//         number: number + 1
//       })
//     )
//   }
//   // setState 함수 앞에 state 값을 받고 이를 전달
//   countDown = () => {
//     const { number } = this.state
//     this.setState({ number: number - 1 })
//   }

//   render() {
//     // Destructuring Assignment 문법을 사용한 방식
//     const { number } = this.state
//     const { countUp, countDown } = this

//     console.log("render 호출")

//     return (
//       <Wrapper>
//         <ButtonWrapper>
//           <CountButton onClick={countUp} text="+" />
//           <CountButton onClick={countDown} text="-" />
//         </ButtonWrapper>
//         <Number number={number} />
//       </Wrapper>
//     )
//   }
// }

// useState, useEffect
// const App = () => {
//   const [number, setNumber] = useState(0)

//   useEffect(() => {
//     console.log("useEffect -> componentDidMount")

//     return () => {
//       console.log("useEffect -> componentWillUnmount")
//     }
//   }, [])

//   useEffect(() => {
//     console.log(`componentDidUpdate (number) -> ${number}`)
//   }, [number])

//   useEffect(() => {
//     console.log("useEffect -> componentDidUpdate")
//   })

//   return (
//     <Wrapper>
//       <ButtonWrapper>
//         <CountButton onClick={() => setNumber(number + 1)} text="+" />
//         <CountButton onClick={() => setNumber(number - 1)} text="-" />
//       </ButtonWrapper>
//       <Number number={number} />
//     </Wrapper>
//   )
// }

// Redux
const App = ({ number, counter }) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <CountButton onClick={() => counter.increase(number + 1)} text="+" />
        <CountButton onClick={() => counter.decrease(number - 1)} text="-" />
      </ButtonWrapper>
      <Number number={number} />
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  number: state.number
})

// const mapDispatchToProps = dispatch => ({
//   increase: number => dispatch(increase(number)),
//   decrease: number => dispatch(decrease(number))
// })
const mapDispatchToProps = dispatch => ({
  counter: bindActionCreators(counter, dispatch)
})

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)
