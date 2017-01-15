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
      });

      $("#btnCreate").click(function(){
        $("#createIssue").show();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#lockIssue").hide();
        $("#searchIssue").hide();
      });

      $("#btnEdit").click(function(){
        $("#createIssue").hide();
        $("#editIssue").show();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#lockIssue").hide();
        $("#searchIssue").hide();
      });

      $("#btnSearch").click(function(){
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").hide();
        $("#lockIssue").hide();
        $("#searchIssue").show();
      });

     $("#btnLock").click(function(){
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").show();
        $("#unLockIssue").hide();
        $("#searchIssue").hide();
      });
      
      $("#btnUnlock").click(function(){
        $("#createIssue").hide();
        $("#editIssue").hide();
        $("#lockIssue").hide();
        $("#unLockIssue").show();
        $("#lockIssue").hide();
        $("#searchIssue").hide();
      });



      $("#lockIssue button").click(lockIssue);
      $("#unLockIssue button").click(unLockIssue);
      $("#editIssue button").click(editIssue);
      $("#createIssue button").click(createIssue);
      $("#searchIssue button").click(listaUmaIssue);
      $("#btnList").click(listaIssues);