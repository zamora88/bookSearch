


     $("#sbmt").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        var apiTwo = "https://api.cognitive.microsoft.com/bing/v5.0/images/search";
var searchTerm =  $("#authSearch").val();
        $.ajax({
          url: apiTwo,
          data:{
              q: searchTerm,
              count:1
          },
          method: "GET",
          headers: {"Ocp-Apim-Subscription-Key": "bdcda01bdef942d9ac0b05555944d1c9"}
        }).done(function(response) {
            $('.picture').empty()
            console.log(response);

       response.value.forEach(function(element){

               var div = $("<div>");

        console.log(element.datePublished);
        console.log(element.thumbnail);
        console.log(element.contentUrl);

            var image = "<img src= '" + element.contentUrl + " '>"

            div.append(image);

              $('.picture').append(div)
                
           })


           
       });

        // Here we grab the text from the input box
        var bk = $("#authSearch").val();

        // Here we construct our URL
        var queryURL = "https://www.googleapis.com/books/v1/volumes?q="+ bk;
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response.items)
          $('.mainContent').empty()
          response.items.forEach(function(element){



          var content ="<tr> <th id='hd'></th> <td id='hd'><h4>" + (element.volumeInfo.title || 'Information is not available') + "</h4></td></tr>"


                content += "<tr> <th> Author:</th> <td>" + (element.volumeInfo.authors || 'Information is not available') +  "</td></tr>"
                content += "<tr> <th> Category:</th> <td>" + (element.volumeInfo.categories || 'Information is not available') +  "</td></tr>"
                content += "<tr> <th> Description:</th> <td>" + (element.volumeInfo.description || 'Information is not available') +  "</td></tr>"
                content += "<tr> <th> Page Count:</th> <td>" + (element.volumeInfo.pageCount || 'Information is not available') +  "</td></tr>"
                content += "<tr id='lr'> <th> Publisher:</th> <td>" + (element.volumeInfo.publisher || 'Information is not available') +  "</td></tr>"
                content += "<tr id='lr'> <th>Buy Book:</th> <td>" +  "<a href =" + (element.volumeInfo.infoLink || 'Information is not available')+ ">Click here to purchase</a>" + "<td></tr>"
                content += "<tr id='lr'> <th> Published Date:</th> <td>" + (element.volumeInfo.publishedDate || 'Information is not available') +  "</td></tr>"
                 
                $('.mainContent').append(content)
          //mainContent
          console.log(element)
          })
          
        });

  })

