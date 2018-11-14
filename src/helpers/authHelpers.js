import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#friends').hide();
      $('#holidays').show();
      $('#auth').hide();
      $('#nav-button-auth').hide();
      $('#nav-button-holidays').show();
      $('#nav-button-friends').show();
      $('#nav-button-logout').show();
    } else {
      $('#friends').hide();
      $('#holidays').hide();
      $('#auth').show();
      $('#nav-button-auth').show();
      $('#nav-button-holidays').hide();
      $('#nav-button-friends').hide();
      $('#nav-button-logout').hide();
    }
  });
};

export default checkLoginStatus;
