import * as firebase from 'firebase';
import { observer } from 'mobx-react';
import * as React from 'react';
import { View } from 'react-native';
import config from '../app/firebase/config';
import People from './components/People';

export default function app() {
  firebase.initializeApp(config);

  return (
    <View style={{ marginTop: 50 }}>
      <People />
    </View>
  );
}
