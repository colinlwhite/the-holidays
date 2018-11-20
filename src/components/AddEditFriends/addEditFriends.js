import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';

const formBuilder = () => {
    const form = `
  <div class="form-group">
    <label for="form-friend-name">Name:</label>
    <input type="text" class="form-control" id="form-friend-name" placeholder="Colin White">
  </div>
  <div class="form-group">
    <label for="form-friend-address">Address:</label>
    <input type="text" class="form-control" id="form-friend-address" placeholder="500 Blvd">
  </div>
  <div class="form-group">
    <label for="form-friend-email">Email:</label>
    <input type="email" class="form-control" id="form-friend-email" placeholder="time@time">
  </div>
  <div class="form-group">
    <label for="form-friend-phone">Phone Number:</label>
    <input type="text" class="form-control" id="form-friend-phone" placeholder="1-800-call">
  </div>
  <div class="form-group">
    <label for="form-friend-relationship">Relationship:</label>
    <input type="text" class="form-control" id="form-friend-relationship" placeholder="Cousin">
  </div> 
`
  return form;
}

const gettingFriendFromForm = () => {
    const friend = {
        name: $('#form-friend-name').val(),
        address: $('#form-friend-address').val(),
        email: $('#form-friend-email').val(),
        relationship: $('#form-friend-relationship').val(),
        phoneNumber: $('#form-friend-phone').val(),
        isAvoiding: false,
        uid: authHelpers.getCurrentUid()
    }
}