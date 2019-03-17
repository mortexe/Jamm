import { database } from 'firebase';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Button } from 'react-native';

export default function people() {
  const register = () => {
    database()
      .ref('users/abc2')
      .set({
        username: 'mort',
        email: 'mort@proto.io'
      });
  };

  return <Button title="Register" onPress={register} />;
}
