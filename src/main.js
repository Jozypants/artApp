import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {ArtService} from "./artApp.js";


$(document).ready(function (){
  
  (async () => {
    let artService = new ArtService();
    // eslint-disable-next-line 
    const response = await artService.getArt();
    let {title, people, images} = response;
  })();
});
