import React from 'react';
// === DATA ===
// import {posFront, posBack, img} from '../lib/musclePositions.jsx';
import musclePosition from '../../lib/musclePositions.json';

export default class MuscleContainer extends React.Component {
  updateMuscleTitle(newTitle, fullTitle) {
    window.store.dispatch({ type: 'SELECT_MUSCLE_TITLE', title: newTitle });
    window.store.dispatch({ type: 'UPDATE_APP_TITLE', title: fullTitle });
  }
  render() {
    return (
      <div id="skinContainer">
        <div id="skin">
          {musclePosition.img.map((muscle) =>
            <img
              alt={muscle.id}
              className={`muscle ${window.store.getState().muscleTitle.selected === muscle.id ? 'hover' : ''}`}
              id={muscle.id} key={muscle.id} src={muscle.src}
            />
          )}
          <img id="baseImage" alt="base container" src="assets/baseMuscleStructure.png" useMap="#MuscleMap" />
          <map name="MuscleMap">
            {musclePosition.posFront.map((muscle) =>
              <area
                alt={muscle.title} key={muscle.title + muscle.pos} title={muscle.title} coords={muscle.coords} shape="poly"
                onClick={() => this.updateMuscleTitle(muscle.title, muscle['full-title'])}
              />
            )}
            {musclePosition.posBack.map((muscle) =>
              <area
                alt={muscle.title} key={muscle.title + muscle.pos} title={muscle.title} coords={muscle.coords} shape="poly"
                onClick={() => this.updateMuscleTitle(muscle.title, muscle['full-title'])}
              />
            )}
          </map>
        </div>
      </div>
    );
  }
}
