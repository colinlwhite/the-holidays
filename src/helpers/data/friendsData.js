import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllFriends = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => { // results is a parameter so technically you could name it anything
      const friendsObject = results.data; // Assigning the firebase object to a variable
      console.log(friendsObject); // already has the data, including the ID
      const friendsArray = [];
      if (friendsObject != null) {
        Object.keys(friendsObject).forEach((friendId) => {
          friendsObject[friendId].id = friendId; // Moving the ID into the object
          friendsArray.push(friendsObject[friendId]); // Each time we're pushing an entire object onto the array
        });
      }
      resolve(friendsArray);
    })
    .catch((error) => {
      reject(error);
    });
});

const getSingleFriend = friendId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends/${friendId}.json`)
    .then((result) => {
      const singleFriend = result.data; 
      singleFriend.id = friendId; // creating a name/key(right side) on an object
      resolve(singleFriend);
    })
    .catch((error) => {
      reject(error);
    });
});

const deleteFriend = friendId => axios.delete(`${firebaseUrl}/friends/${friendId}.json`); // DELETE

const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, JSON.stringify(friendObject)); // CREATE

const updateFriend = (friendObject, friendId) => axios.put(`${firebaseUrl}/friends/${friendId}.json`, JSON.stringify(friendObject)); // UPDATE OR EDIT

const updatedIsAvoiding = (friendId, isAvoiding) => {
  axios.patch(`${firebaseUrl}/friends/${friendId}.json`, { isAvoiding });
}

export default {
  getAllFriends,
  getSingleFriend,
  deleteFriend,
  addNewFriend,
  updateFriend,
  updatedIsAvoiding,
};
