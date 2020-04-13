import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import paper from 'paper/dist/paper-core';

const useStyles = makeStyles((theme) => ({
  webwizard: {
    backgroundColor: '#FFFFFF',
    margin: '20px',
    width: '500px',
    height: '500px'
  }
}));

export default function PeperTest() {
  const classes = useStyles();

  useEffect(() => {
    // Get a reference to the canvas object
    var canvas = document.getElementById('webwizard');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    // Create a Paper.js Path to draw a line into it:
    var path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = 'black';
    var start = new paper.Point(100, 100);
    // Move to start and draw a line from there
    path.moveTo(start);
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    path.lineTo(start.add([200, -50]));
    // Draw the view now:
    paper.view.draw();
  });

  return <canvas id="webwizard" className={classes.webwizard}></canvas>;
}
