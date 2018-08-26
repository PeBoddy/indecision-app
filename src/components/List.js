import React from 'react';
import ListElement from './ListElement';

const List = (props) => (
  <div>
    <div className="list-header">
      <h3>Your Options</h3>
      <button 
        className="button button--link"
        onClick={props.handleDeleteOptions}>
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="list-message">Please add an option to get started!</p>}
    {
      props.options.map((option, index) => (
        <ListElement
          count={index + 1}
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
)

export default List;
