import React from 'react';
import './DataList.css';
import CrossIcon from '../../../../../../images/cross_icon.svg';

const DataList = ({ options }) => {
  return (
    <>
      <div className="data-list-container">
        <input
          type="text"
          list="skills"
          className="skills-select-input"
          placeholder="Escribe para buscar..."
        />
        <datalist id="skills">
          <option>HTML&CSS</option>
          <option>JavaScript</option>
        </datalist>
        <div className="skills-select-chevron"></div>
      </div>
      <div className="selected-skills-container">
        <div className="selected-skill">
          HTML&CSS
          <img alt="" className="cross-icon" src={CrossIcon} />
        </div>
        <div className="selected-skill">
          REACT
          <img alt="" className="cross-icon" src={CrossIcon} />
        </div>
        <div className="selected-skill">
          ANGULAR
          <img alt="" className="cross-icon" src={CrossIcon} />
        </div>
      </div>
    </>
  );
};

export default DataList;
