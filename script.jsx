class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);

  }
  //takes what is in the input; removes it and push it into the list
  clickHandler(event){
    this.setState({list:[...this.state.list, this.state.word]});
    console.log(this.state.list);
  }

  render() {
    //renders the list
    let contents = this.state.list.map(item => {
                    return <li>{item}</li>
    });
      console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word} />
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
