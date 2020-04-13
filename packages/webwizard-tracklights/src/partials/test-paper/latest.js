import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import paper from 'paper/dist/paper-core';

const useStyles = makeStyles((theme) => ({
  webwizard: {
    backgroundColor: '#FFFFFF',
    margin: '1vh 1vw',
    width: '98vw',
    height: '90vh',
    border: '1px solid #AAAAAA'
  }
}));

export default function PeperTest() {
  const classes = useStyles();

  useEffect(() => {
    // Create an empty project and a view for the canvas:
    paper.setup('webwizard');
    // Create a Paper.js Path to draw a line into it:
    var path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = 'black';
    var start = new paper.Point(0, 0);
    // Move to start and draw a line from there
    path.moveTo(start);
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    path.lineTo(start.add([300, 300]));

    // onFrame event handler for animations:
    paper.view.onFrame = function (event) {
      // On each frame, rotate the path by 3 degrees:
      path.rotate(3);
    };
  });

  return <canvas id="webwizard" className={classes.webwizard}></canvas>;
}
