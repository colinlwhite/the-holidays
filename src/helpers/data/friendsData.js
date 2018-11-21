import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllFriends = (uid) => {
  console.log('uid', uid);
};

const getSingleFriend = friendId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends/${friendId}.json`)
    .then((result) => {
      const singleFriend = result.data; // coming from FIREBase
      singleFriend.id = friendId; // attaching a new key or ID to the data
      resolve(singleFriend);
    })
    .catch((error) => {
      reject(error);
    });
});

const deleteFriend = (friendId) => {
  console.log(friendId);
};


export default {
  getAllFriends,
  getSingleFriend,
  deleteFriend,
};
