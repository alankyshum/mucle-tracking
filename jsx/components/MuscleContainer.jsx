import React from 'react';
// === DATA ===
// import {posFront, posBack, img} from '../lib/musclePositions.jsx';
import musclePosition from '../../lib/musclePositions.json';

export default class MuscleContainer extends React.Component {
  render() {
    return (
      <div id='skinContainer'>
        <div id='skin'>
          {musclePosition.img.map((muscle) => {
            return <img className='muscle' id={muscle.id} key={muscle.id} src={muscle.src}/>
          })}
          <img id='baseImage' src='assets/baseMuscleStructure.png' useMap='#MuscleMap' />
          <map name='MuscleMap'>
            {musclePosition.posFront.map((muscle) => {
              return <area alt={muscle.title} key={muscle.title+muscle.pos} title={muscle.title} coords={muscle.coords} shape="poly"/>
            })}
            {musclePosition.posBack.map((muscle) => {
              return <area alt={muscle.title} key={muscle.title+muscle.pos} title={muscle.title} coords={muscle.coords} shape="poly"/>
            })}
          </map>
        </div>
      </div>
    )
  }
}


// reference code
// #skin
//  - muscleSrc.each do |src|
//    img.muscle[id="#{src['id']}" src="#{src['src']}"]
//  img#baseImage[src="assets/baseMuscleStructure.png" usemap="#Map"]
//  map[name="Map"]
//    - musclePosFront.each do |pos|
//      area[target="" alt="#{pos['title']}" title="#{pos['title']}" coords="#{pos['coords']}" shape="poly"]
//    - musclePosBack.each do |pos|
//      area[target="" alt="#{pos['title']}" title="#{pos['title']}" coords="#{pos['coords']}" shape="poly"]
