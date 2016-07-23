import React from 'react';
// === DATA ===
// import {posFront, posBack, img} from '../lib/musclePositions.jsx';
import musclePosition from '../../lib/musclePositions.json';

export default class MuscleContainer extends React.Component {
  updateMuscleTitle(newTitle) {
    store.dispatch({type: "SET_MUSCLE_TITLE", title: newTitle})
  }
  highlightMuscle(muscleTitle) {
    store.dispatch({type: "HIGHLIGHT_MUSCLE_TITLE", title: muscleTitle})
  }
  render() {
    return (
      <div id='skinContainer'>
        <div id='skin'>
          {musclePosition.img.map((muscle) => {
            return <img className={`muscle ${store.getState().muscleTitle.highlight == muscle.id ? 'hover' : ''}`} id={muscle.id} key={muscle.id} src={muscle.src}/>
          })}
          <img id='baseImage' src='assets/baseMuscleStructure.png' useMap='#MuscleMap' />
          <map name='MuscleMap'>
            {musclePosition.posFront.map((muscle) => {
              return <area alt={muscle.title} key={muscle.title+muscle.pos} title={muscle.title} coords={muscle.coords} shape="poly" onClick={() => this.updateMuscleTitle(muscle.title)} onMouseOver={() => {this.highlightMuscle(muscle.title)}} />
            })}
            {musclePosition.posBack.map((muscle) => {
              return <area alt={muscle.title} key={muscle.title+muscle.pos} title={muscle.title} coords={muscle.coords} shape="poly" onClick={() => this.updateMuscleTitle(muscle.title)} onMouseOver={() => {this.highlightMuscle(muscle.title)}} />
            })}
          </map>
        </div>
      </div>
    )
  }
}
