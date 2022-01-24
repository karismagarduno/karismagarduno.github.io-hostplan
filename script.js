function Plan(name, price, space, transfer, pages, discountMonths){
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    Plan.prototype.calcAnnual = function(percentIfDisc)
                    {
                    var bestPrice = this.price;
                    console.log("Price " + bestPrice);
                    var currDate = new Date();
                    console.log("Current Date " +currDate);
                    var thisMo = currDate.getMonth();
                    console.log("This Month " +thisMo);
                    for (var i = 0; i < this.discountMonths.length; i++) {
 
                    if (this.discountMonths[i] === thisMo) {
                    bestPrice = this.price * percentIfDisc;
                    break;}
                    console.log("Best Price" +bestPrice);
                    }
                    return bestPrice * 12;
                    }
                }
                const Basic = new Plan("Basic", 3.99, 100, 1000, 10, [0,7]);
                const Professional = new Plan("Professional", 5.99, 500, 5000, 50, [0,7,11]);
                const Ultimate = new Plan("Ultimate", 9.99, 2000, 20000, 500, [0,7]);


    function BasicCalc() {    
        var annualPrice = Basic.calcAnnual(0.80);
        document.getElementById("price").innerHTML = "Annual Price = $" +annualPrice.toFixed(2);
        document.getElementById("selected").innerHTML = "Selected Plan: Basic";
        document.getElementById("form").style.opacity = 1;
        document.getElementById("finprice").innerHTML = "";
    }
    function ProfCalc() {    
        var annualPrice = Professional.calcAnnual(0.80);
        document.getElementById("price").innerHTML = "Annual Price = $" +annualPrice.toFixed(2);
        document.getElementById("selected").innerHTML = "Selected Plan: Professional";
        document.getElementById("form").style.opacity = 1;
        document.getElementById("finprice").innerHTML = "";
    }
    function UltCalc() {    
        var annualPrice = Ultimate.calcAnnual(0.80);
        document.getElementById("price").innerHTML = "Annual Price = $" +annualPrice.toFixed(2);
        document.getElementById("selected").innerHTML = "Selected Plan: Ultimate";
        document.getElementById("form").style.opacity = 1;
        document.getElementById("finprice").innerHTML = "";
    }
    function PlanCalc3() {
    if(document.getElementById("selected").innerHTML === "Selected Plan: Basic"){
        var finalprice = 3.99*3;
        document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice.toFixed(2);
        console.log("base");
    }
    else if(document.getElementById("selected").innerHTML === "Selected Plan: Professional"){
        var finalprice2 = 5.99*3;
        document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice2.toFixed(2);
        console.log("prof");
    }
    else if(document.getElementById("selected").innerHTML === "Selected Plan: Ultimate"){
        var finalprice3 = 9.99*3;
        document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice3.toFixed(2);
        console.log("ult");
    }
        }
        function PlanCalc6() {
            if(document.getElementById("selected").innerHTML === "Selected Plan: Basic"){
                var finalprice = 3.99*6;
                document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice.toFixed(2);
                console.log("base");
            }
            else if(document.getElementById("selected").innerHTML === "Selected Plan: Professional"){
                var finalprice2 = 5.99*6;
                document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice2.toFixed(2);
                console.log("prof");
            }
            else if(document.getElementById("selected").innerHTML === "Selected Plan: Ultimate"){
                var finalprice3 = 9.99*6;
                document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice3.toFixed(2);
                console.log("ult");
        }
    }
    function PlanCalc12() {
        if(document.getElementById("selected").innerHTML === "Selected Plan: Basic"){
            var finalprice = Basic.calcAnnual(.80);
            document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice.toFixed(2);
            console.log("base");
        }
        else if(document.getElementById("selected").innerHTML === "Selected Plan: Professional"){
            var finalprice2 = Professional.calcAnnual(0.80);
            document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice2.toFixed(2);
            console.log("prof");
        }
        else if(document.getElementById("selected").innerHTML === "Selected Plan: Ultimate"){
            var finalprice3 = Ultimate.calcAnnual(0.80);
            document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice3.toFixed(2);
            console.log("ult");
        }
    }
    function PlanCalc24() {
        if(document.getElementById("selected").innerHTML === "Selected Plan: Basic"){
            var finalprice = Basic.calcAnnual(.80)*2;
            document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice.toFixed(2);
            console.log("base");
        }
        else if(document.getElementById("selected").innerHTML === "Selected Plan: Professional"){
            var finalprice2 = Professional.calcAnnual(0.80)*2;
            document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice2.toFixed(2);
            console.log("prof");
        }
        else if(document.getElementById("selected").innerHTML === "Selected Plan: Ultimate"){
            var finalprice3 = Ultimate.calcAnnual(0.80)*2;
            document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice3.toFixed(2);
            console.log("ult");
        }
    }
    function PlanCalc36() {
        if(document.getElementById("selected").innerHTML === "Selected Plan: Basic"){
            var finalprice = Basic.calcAnnual(.80)*3;
            document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice.toFixed(2);
            console.log("base");
        }
        else if(document.getElementById("selected").innerHTML === "Selected Plan: Professional"){
            var finalprice2 = Professional.calcAnnual(0.80)*3;
            document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice2.toFixed(2);
            console.log("prof");
        }
        else if(document.getElementById("selected").innerHTML === "Selected Plan: Ultimate"){
            var finalprice3 = Ultimate.calcAnnual(0.80)*3;
            document.getElementById("finprice").innerHTML = "Final Price: $"+finalprice3.toFixed(2);
            console.log("ult");
        }
}

function signupinfo()
{
    var fname=document.signup.fname;
    var lname=document.signup.lname;
    var gender=document.signup.gender;
    var num=document.signup.num;
    if(allLettername(fname))
    {
        if(allLetterlast(lname))
        {
            if(genderselect(gender))
            {
                if(Mobile(num))
                    {
                    }
            }
        }
    }
    return false;
}   
function allLettername(fname)
{ 
    var letters = /^[A-Za-z]+$/;
    if(fname.value.length==0)
    {
        alert('Please enter first name');
        fname.focus();
        return false;
    }
    else if(fname.value.match(letters))
    {
        return true;
        
    }
    else
    {
        alert('First name must have alphabet characters only');
        fname.focus();
        return false;
    }
}
function allLetterlast(lname)
{ 
    var letters = /^[A-Za-z]+$/;
    if(lname.value.length==0)
    {
        alert('Please enter last name');
        fname.focus();
        return false;
    }
    else if(lname.value.match(letters))
    {
        return true;
        }
    else
    {
        alert('last name must have alphabet characters only');
        fname.focus();
        return false;
    }
}
function genderselect(gender)
{
    if(gender.value == "Gender")
    {
        alert('Select your gender');
        gender.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function Mobile(num)
{ 
    var numbers = /^[0-9]+$/;
    if(num.value.length==0 )
    {
        alert('Please enter contact number');
        fname.focus();
        return false;
    }
    else if(num.value.length>10)
    {
        alert('Please enter a valid contact number');
        fname.focus();
        return false;
    }
    else if(num.value.match(numbers))
    {
        alert('Form Successfully Submitted');
        window.location.reload();
        return true;
    }
    else
    {
        alert('Please check your contact number');
        return false;
    }
}