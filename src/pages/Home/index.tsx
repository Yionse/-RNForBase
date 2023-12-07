import React from 'react';
import {Text} from 'native-base';

export default function Home({route}) {
  const {date} = route.params;
  console.log(route);

  return (
    <>
      <Text>主页</Text>
      <Text>{date}</Text>
    </>
  );
}
