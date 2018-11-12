class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
  }

  state = {
    list : [],
    word : "",
<<<<<<< Updated upstream
    error: ""
=======
    error: "",
    wordLimit: 10
>>>>>>> Stashed changes
  }

  changeHandler(event){
    if( event.target.value.length > this.state.wordLimit ){
      this.setState({error:"input exceed word Limit"});
      console.log(this.state.error);
    }
    else{
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
<<<<<<< Updated upstream
=======
  }
>>>>>>> Stashed changes
    //creates a length validation on the input
  }
  //takes what is in the input; removes it and push it into the list
  clickHandler(event){
<<<<<<< Updated upstream
    if( this.state.word <= 5 ){
      this.setState({error:"input too short"});
      console.log(this.state.error);
    }
    else{
      this.setState({list:[...this.state.list, this.state.word]});
      console.log(this.state.list);
    }
=======

      this.setState({list:[...this.state.list, this.state.word]});
      console.log(this.state.list);

>>>>>>> Stashed changes
  }

  render() {
    //renders the list
    let contents = this.state.list.map((item, index) => {
                    return <li key={index}>{item}</li>
    });
      console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word} />
          <p>{this.state.error}</p>
          <button onClick={this.clickHandler} > Add Item </button>
          <ul>
            {contents}
          </ul>


        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);
