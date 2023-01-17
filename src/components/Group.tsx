import { group } from 'console';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Group = () => {
  const [groupInfo, setGroupInfo] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    db.collection('groups')
      .where('userId', '==', user.uid)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setGroupInfo(data);
      });
  }, []);

  return (
    <div>
      {groupInfo.map((group) => (
        <div key={group.id}>
          <h2>{group.name}</h2>
          <Project groupInfo={group} />
        </div>
      ))}
    </div>
  )
}

export default Group;