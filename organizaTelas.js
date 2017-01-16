      $(document).ready(function(){
        $("#home").show();
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#lockIssue").hide();
        $("#searchIssue").hide();
      });

      $("#btnHome").click(function(){
        $("#home").show();
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#lockIssue").hide();
        $("#searchIssue").hide();
        $("#innerTitle").text("Selecione a ação que deseja executar com as issues");
      });

      $("#btnList").click(function(){
        $("#listIssues").show();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#lockIssue").hide();
        $("#searchIssue").hide();
        $("#home").hide();
        $("#innerTitle").text("Lista de issues");
      });

      $("#btnCreate").click(function(){
        $("#listIssues").hide();
        $("#createIssue").show();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#searchIssue").hide();
        $("#home").hide();
        $("#innerTitle").text("Criar uma issue");
      });

      $("#btnEdit").click(function(){
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").show();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#searchIssue").hide();
        $("#home").hide();
        $("#innerTitle").text("Editar uma issue");
      });

      $("#btnSearch").click(function(){
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#searchIssue").show();
        $("#home").hide();
        $("#innerTitle").text("Buscar uma issue");
      });

     $("#btnLock").click(function(){
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").show();
        $("#unLockIssue").hide();
        $("#searchIssue").hide();
        $("#home").hide();
        $("#innerTitle").text("Lock uma issue");
      });
      
      $("#btnUnlock").click(function(){
        $("#listIssues").hide();
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").show();
        $("#searchIssue").hide();
        $("#home").hide();
        $("#innerTitle").text("Unlock uma issue");
      });



      $("#lockIssue button").click(lockIssue);
      $("#unLockIssue button").click(unLockIssue);
      $("#editIssue button").click(editIssue);
      $("#createIssue button").click(createIssue);
      $("#searchIssue button").click(listaUmaIssue);
      $("#btnList").click(listaIssues);