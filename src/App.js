import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      board : Array(9).fill(null),
      player: "X",
      winner: ""
    }
  }
  checkWinner(){
    let winners = 
    [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","4","8"],
      ["2","4","6"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
    ]
    for (let index = 0; index < winners.length; index++) {
      const [a,b,c] = winners[index];
      if (this.state.board[a] && this.state.board[a] === this.state.board[b] 
      && this.state.board[b] === this.state.board[c] && this.state.winner === ""
      ){
        setTimeout(()=> alert('Ganaste!') )
        this.setState({
           winner: this.state.player
         })
         

      }
    }
  }

  handleClick(index){
    let newBoard = this.state.board
    if(this.state.board[index] === null && !this.state.winner){
      newBoard[index] = this.state.player
      this.setState({
        board: newBoard,
        player : this.state.player === "X" ? "O" : "X"
      })
    }
    this.checkWinner()
  }
  render() {
    const Square = this.state.board.map(
      (square,index) => 
      <div className="square" 
        key = {index} 
        onClick={() => this.handleClick(index)}>
          {square}
      </div>
    )
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          {Square}
        </div>
      </div> 
    )
  }
}
 
export default App
