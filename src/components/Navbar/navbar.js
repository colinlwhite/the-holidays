import $ from 'jquery';
import './navbar.scss';

const createNavbar = () => {
  const domString = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Home for the Holidays</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Authentication</a>
      </li>
      </li>
      <li class="nav-item">
        <a class="nav-link">Holidays</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Friends</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Logout</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"></a>
      </li>
    </ul>
  </div>
</nav>
`;


  $('#navbar').html(domString);
};

export default createNavbar;