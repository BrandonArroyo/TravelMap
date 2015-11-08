var userListData = [];
var STATESELECT;

$(document).ready(function() {
    $('#map').usmap({
        'stateSpecificStyles': {
	      'FL' : {fill: '#f00'},
          'SC' : {fill: '#f00'},
          'NY' : {fill: '#f00'},
          'NV' : {fill: '#f00'},
          'CA' : {fill: '#f00'},
          'LA' : {fill: '#f00'},

	    },

        'click' : function(event, data) {
            $('#alert')
            .text('State selected: '+data.name)
            .stop()
            STATESELECT = data.name;
            //logic that will take the data.name for later use
            console.log('event');
            populateTable();
            console.log('event end');
        }

    });


});

function populateTable() {


    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON

    $.getJSON( '/users/tdetail/'+ STATESELECT, function( data ) {
        var tableContent = '';
        console.log(data);

        //console.log(queryLimits);
        // For each item in our JSON, add a table row and cells to the content string
        tableContent +='<table >';
        tableContent +='<tr>';
        tableContent +='<td> Origin </td>' ;
        tableContent +='<td> Destination </td>';
        tableContent +='<td> Price </td>';
        tableContent +='<td>Book!</td>'
        tableContent +='<tr>';
        // <a class="pure-button" href="#">
        //     <i class="fa fa-shopping-cart fa-lg"></i>
        //     Checkout
        // </a>
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>'+ this.Origin + '</td>';
            tableContent += '<td>' + this.Destination + '</td>';
            tableContent += '<td>'+this.JetBluePackagePricePerson+'</td>';
            tableContent  +=  '<td><a class="pure-button" href ="http://www.jetblue.com/#/"><i class="fa fa-shopping-cart fa-lg"></i>'+this.SavingsComparedtoExpedia+'off!</a></td>';
            tableContent += '</tr>';

        });
            tableContent += '</table>';
        // Inject the whole content string into our existing HTML table

        $('body').append('<div id="overlay" style="display: block"></div>');

        $('#overlay').html(tableContent);
        $('#overlay').click(function(){
            document.getElementById("overlay").remove();
        });

    });



};
