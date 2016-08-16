// src/client.jsx
import ReactDOM from 'react-dom';
import HelloApp from 'HelloApp/client/HelloApp';
import React from 'react';

Meteor.startup(() => {
  ReactDOM.render(
    <HelloApp />,
    document.getElementById('react-app')
  );
});

