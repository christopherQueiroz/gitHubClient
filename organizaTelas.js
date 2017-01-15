      $(document).ready(function(){
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#lockIssue").hide();
        $("#searchIssue").hide();
      })

      $("#btnList").click(function(){
        $("#listIssues").show();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#lockIssue").hide();
        $("#searchIssue").hide();
        $("#innerTitle").text("Lista de issues");
      });

      $("#btnCreate").click(function(){
        $("#listIssues").hide();
        $("#createIssue").show();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#searchIssue").hide();
        $("#innerTitle").text("Criar uma issue");
      });

      $("#btnEdit").click(function(){
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").show();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#searchIssue").hide();
        $("#innerTitle").text("Editar uma issue");
      });

      $("#btnSearch").click(function(){
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#searchIssue").show();
        $("#innerTitle").text("Buscar uma issue");
      });

     $("#btnLock").click(function(){
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").show();
        $("#unLockIssue").hide();
        $("#searchIssue").hide();
        $("#innerTitle").text("Lock uma issue");
      });
      
      $("#btnUnlock").click(function(){
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").show();
        $("#searchIssue").hide();
        $("#innerTitle").text("Unlock uma issue");
      });



      $("#lockIssue button").click(lockIssue);
      $("#unLockIssue button").click(unLockIssue);
      $("#editIssue button").click(editIssue);
      $("#createIssue button").click(createIssue);
      $("#searchIssue button").click(listaUmaIssue);
      $("#btnList").click(listaIssues);