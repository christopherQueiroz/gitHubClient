       var fragUm = "747789749e";
       var fragDois = "0ab4f5b3c39";
       var fragTres = "f58906afe3";
       var fragQuatro = "5d9883caf"

       var token = "token "+fragUm + fragDois + fragTres + fragQuatro;
    
        //Faz a request da listagem das issues

        function listaIssues(){
        var ajax = new XMLHttpRequest();
        var issueList = "";
        
        ajax.onreadystatechange = function() 
        {
          if (this.readyState == 4 && this.status == 200) 
          {
            issueList = JSON.parse(this.responseText);
            populaDadosIssues(issueList);
        
          }
        }
        ajax.open("GET", "https://api.github.com/repos/christopherQueiroz/gitHubClient/issues", true);
        ajax.send();
       }


        //Lista apenas uma issue
        function listaUmaIssue()
        {
          var ajax = new XMLHttpRequest();
          var issueList = "";
          var number = $("#searchIssue .numeroIssue").val();
          ajax.onreadystatechange = function() 
          {
             if (this.readyState == 4 && this.status == 200) 
             {
                issueList = JSON.parse(this.responseText);
                populaDadosUmaIssue(issueList);             
              }
          }
          
           ajax.open("GET", "https://api.github.com/repos/christopherQueiroz/gitHubClient/issues/"+number, true);
           ajax.send();
         
        }

        //Cria uma issue
        function createIssue(){

          var tituloIssue = $("#createIssue .ttleIssue").val();
          var msgIssue = $("#createIssue .msgIssue").val(); 
          var json = {
                     "title" :  tituloIssue,
                     "body" :  msgIssue
                     };

          json = JSON.stringify (json);

         console.log(json);


          $.ajax({
            type: "POST",
            headers : {
             "Authorization" : token
            },
            data: json,
            url : "https://api.github.com/repos/christopherQueiroz/gitHubClient/issues",
            success: function(data) 
            {
              alert("Issue criada com sucesso");
              listaIssues();
            }

      });
    }


    //Edita uma issue
    function editIssue(){
        debugger;
        var tituloIssue = $("#editIssue .ttleIssue").val();
        var msgIssue = $("#editIssue .msgIssue").val(); 
        var number = $("#editIssue .numeroIssue").val();

        var json = {
                   "title" :  tituloIssue,
                   "body" :  msgIssue,
                   "state" : "open"
                   };

        json = JSON.stringify (json);

       console.log(json);


      $.ajax({
        type: "PATCH",
        headers : {
         "Authorization" : token
        },
        data: json,
        url : "https://api.github.com/repos/christopherQueiroz/gitHubClient/issues/"+number,
        success: function(data) 
        {
          alert("Edição efetuada com sucesso");
          listaIssues();
        }

      });
    }



    //Lock uma issue
    function lockIssue(){

        var number = $("#lockIssue .numeroIssue").val();
        $.ajax({
          type: "PUT",
          headers : {
           "Authorization" : token
          },
          url : "https://api.github.com/repos/christopherQueiroz/gitHubClient/issues/"+number+"/lock",
          success: function(data) 
          {
            alert("Lock feito com sucesso");
            listaIssues();
          }

      });
    }



    //UnLock uma issue
    function unLockIssue(){

        var number = $("#unLockIssue .numeroIssue").val();
        $.ajax({
          type: "DELETE",
          headers : {
           "Authorization" : token
          },
          url : "https://api.github.com/repos/christopherQueiroz/gitHubClient/issues/"+number+"/lock",
          success: function(data) 
          {
            alert("Unlock feito com sucesso");
            listaIssues();
          }

      });
    }





          //Popula os dados listados no grid
      function populaDadosIssues(issues)
      {
          var divContent = '<table>';

          divContent += '<tr><th>Número</th><th>Id</th><th>Título</th><th>Mensagem</th></tr>';

          for(var cont = 0; cont < issues.length; cont++)
          {
            divContent += '<tr><td>'+issues[cont].number+'</td><td>'+issues[cont].id+'</td><td>'+issues[cont].title+'</td><td>'+issues[cont].body+'</td></tr>'
          }

         divContent += '</table>';

         document.getElementById("contentIssues").innerHTML = divContent;

      }

      

      //Popula o grid com apenas uma issue
      function populaDadosUmaIssue(issues)
      {
          var divContent = '';
          divContent += '<tr><th>Número</th><th>Id</th><th>Título</th><th>Mensagem</th></tr>';
          divContent += '<tr><td>'+issues.number+'</td><td>'+issues.id+'</td><td>'+issues.title+'</td><td>'+issues.body+'</td></tr>';
          divContent += '</table>';
         document.getElementById("contentIssues").innerHTML = divContent;

      }