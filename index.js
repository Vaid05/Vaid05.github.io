function myFunction() {
    var x = document.getElementById("fname").value;
    document.getElementById("paraf").innerHTML = x;
    var x1 = document.getElementById("lname").value;
    document.getElementById("paral").innerHTML = x1;
    var x2 = document.getElementById("pnum").value;
    document.getElementById("paran").innerHTML = x2;
    //return x,x1;
  }
  
  
  function addSub(id) {
    
   var divelement = document.getElementById(id);
  
   if(divelement.style.display == 'none')
     divelement.style.display = 'block';
    else
    divelement.style.display = 'block';
  }
  

  
  function pushData()
      {
        var myArr = ["A","B","C","D"];
        var myArr1 = ["A","B"];
        var myArr2 = ["1","2"];
            push1();
            document.getElementById("pText").innerHTML=pval;
            push2();
            document.getElementById("lText").innerHTML=pval1;
            push3();
            document.getElementById("num").innerHTML=pval2;
          
      }
      function push1()
      {
        var inputText = document.getElementById('fname').value;
        myArr.push(inputText);
        var pval = "";
        for(i = 0; i < myArr.length; i++)
          {
              pval = pval + myArr[i] + "<br/>";
          }
          
          
      }
      function push2()
      {
        var inputText1 = document.getElementById('lname').value;
        myArr1.push(inputText1);
        var pval1 = "";
        for(j = 0; j < myArr1.length; j++)
        {
            pval1 = pval1 + myArr1[j] + "<br/>";
        }
        
      }

      function push3()
      {
        var inputText2 = document.getElementById('pnum').value;
        myArr2.push(inputText2);
        var pval2 = "";
        for(j = 0; j < myArr2.length; j++)
        {
            pval2 = pval2 + myArr2[j] + "<br/>";
        }
        
      }