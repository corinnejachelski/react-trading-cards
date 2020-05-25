"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <a href='/cards'>Click here for cards</a>
        <div><img src='/static/img/balloonicorn.jpg' alt='Balloonicorn'></img></div>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
