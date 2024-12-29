function grade()
{
    var sname = document.getElementById('sname').Value;
    var fname = document.getElementById('fname').Value;
    var rollnum = document.getElementById('rno').Value;
    var batch = document.getElementById('batch').Value;
    var r1 = document.getElementById('r2').Value;
    var eproject = document.getElementById('eproject').Value;
    var mod = document.getElementById('mod').Value;
    var obtain = +r1 + + r2 + + eproject + +modular;
    var percent = (obtain/400) * 100 + "%";

    if(Percent >="80%")
    {
        alert
        {"Your name is.." + sname +  + "/nYour father name is.." + fname + + "/nYour roll num is.." + rno + "/n Your Batch Code is..." + batch + "/n Ypur R1 Marks is..." + "/nYour R2 Marks is.." + r2 +"Your E-Project Marks is..." + eproject + "Your Modular Marks is..." + mod + "Your obtained marks is.." + obtain + "Your Percent is.." + percent+ "Your Grade A-1"}
        document.write
        {"Outstanding Result"}
    }
     else if(Percent >="70%" && percent <="79%")
    {
        alert
        {"Your name is.." + sname +  + "/nYour father name is.." + fname + + "/nYour roll num is.." + rno + "/n Your Batch Code is..." + batch + "/n Ypur R1 Marks is..." + "/nYour R2 Marks is.." + r2 +"Your E-Project Marks is..." + eproject + "Your Modular Marks is..." + mod + "Your obtained marks is.." + obtain + "Your Percent is.." + percent+ "Your Grade A"}
        document.write
        {"Superb Result"}
    }
    else if(Percent >="60%" && percent <="69%")
    {
        alert
        {"Your name is.." + sname +  + "/nYour father name is.." + fname + + "/nYour roll num is.." + rno + "/n Your Batch Code is..." + batch + "/n Ypur R1 Marks is..." + "/nYour R2 Marks is.." + r2 +"Your E-Project Marks is..." + eproject + "Your Modular Marks is..." + mod + "Your obtained marks is.." + obtain + "Your Percent is.." + percent+ "Your Grade B"}
        document.write
        {"Excellent Result"}
    }
    else if(Percent >="50%" && percent <="59%")
    {
        alert
        {"Your name is.." + sname +  + "/nYour father name is.." + fname + + "/nYour roll num is.." + rno + "/n Your Batch Code is..." + batch + "/n Ypur R1 Marks is..." + "/nYour R2 Marks is.." + r2 +"Your E-Project Marks is..." + eproject + "Your Modular Marks is..." + mod + "Your obtained marks is.." + obtain + "Your Percent is.." + percent+ "Your Grade C"}
        document.write
        {"GOOD Result"}
    }
    else
    {
        alert
        {"Batter Luck Next Time"}
    }