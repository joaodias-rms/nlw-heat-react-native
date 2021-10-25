import React from 'react';

import {
  ScrollView
} from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

const message = {
    id: '1',
    text: 'Tester',
    user: {
      name: 'Juão',
      avatar_url: 'https://github.com/joaodias-rms.png',
    }
}

export function MessageList(){
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps='never'>
        <Message data={message}/>
    </ScrollView>
  );
}