import axios from 'axios'
import React from 'react';


class Requestsend extends React.Component {
     url="http://localhost:57987/api/";
addnewcomplain=function(complinData){
    axios.post('http://localhost:57987/api/addcomplain', {
        complinData:complinData
       })
       .then(function (response) {
         console.log(response)
       })
       .catch(function (error) {
         console.log(error);
       });
}
}
export default Requestsend;