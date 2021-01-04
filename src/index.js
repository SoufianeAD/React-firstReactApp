import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function getMessage() {
    return "Muy bien!";
}
const Ok = () => {
    const btnText = "Good";
    const btnSTyle = {backgroundColor: 'blue', color: 'white'};
    const pText = {text: 'Allez!'};
    return (
        <div>
            <h1>Hello react world!</h1>
            <h4>{getMessage()}</h4>
            <p>{pText.text}</p>
            <label htmlFor="test">Test</label>
            <input type="text" name="test" id="test" />
            <button style={btnSTyle}>
                {btnText}
            </button>
        </div>
    );
};

ReactDOM.render(
  <React.StrictMode>
      <Ok/>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
