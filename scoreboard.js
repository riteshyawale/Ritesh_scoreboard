$(document).ready(function () {

    $('#fteam1').attr("src", flag1);
    $('#gteam1').text(teamname1);
    $('#fteam2').attr("src", flag2);
    $('#gteam2').text(teamname2);
    $('#gteam1s').text(teamname1);
    $('#gteam2s').text(teamname2);
    $('#allovers').text(over);
    $('#runsadd').text(score1);
    $('#wickets').text(wickets1);
    $('#over').text(overs1);
    createscore(array1);
    createscore(array2);
    console.log(array1);
    console.log(array2);
   
});

function createscore(array){
    array.forEach(object => {
        object.runs = 0;
        object.balls = 0;
        object.bowlruns = 0;
        object.wickets = 0;
        object.overs = 0;
    });
}

var teamname1=(sessionStorage.getItem('teamname1'))
var teamname2=(sessionStorage.getItem('teamname2'))
var flag1=(sessionStorage.getItem('flag1'))
var flag2=(sessionStorage.getItem('flag2'))
var data1=sessionStorage.getItem('team1');
var data2=sessionStorage.getItem('team2');
var over=sessionStorage.getItem('over');
var player=sessionStorage.getItem('player');
var array1=JSON.parse(data1);
var array2=JSON.parse(data2);
var noballrun=sessionStorage.getItem('noball');

function showimg(flag){
    if(flag=='fteam1'){var flags=flag1;var teams=teamname1;var array=array1;var conarray=array2;};
    if(flag=='fteam2'){var flags=flag2;var teams=teamname2;var array=array2;var conarray=array1;};
    $('#fflag').show()
    $('#fflag').attr("src", flags);
    $('#selectnames').text(teams);
    $('#selectnamess').text(teams);
    $('#fflags').show()
    $('#fflags').attr("src", flags);
    $('#dropdowns').prop('disabled',true);

    var ddlCustomers = $("#1team1");
    for(var i=0;i<array.length;i++){
        var option = $("<option />");
        option.html(array[i].name);
        option.val(array[i].ids);
        ddlCustomers.append(option);
    }

    var ddlCustomerss = $("#1team2");
    for(var i=0;i<array.length;i++){
        var option = $("<option />");
        option.html(array[i].name);
        option.val(array[i].ids);
        ddlCustomerss.append(option);
    }

    var ddlCustomersss = $("#bowlers");
    for(var i=0;i<conarray.length;i++){
        var option = $("<option />");
        option.html(conarray[i].name);
        option.val(array[i].ids);
        ddlCustomersss.append(option);
    }
}

function startbat(){
    if($('#1team1 option:selected').text()=='Select' || $('#1team2 option:selected').text()=='Select'){
        $('#changesba').css('visibility','');
    }else{
        $('#changesba').css('visibility','hidden');
        $('#1team2').attr('disabled',true);
        $('#1team1').attr('disabled',true);
        $('#startbat').prop('disabled',true);
        bowlpanel();
    }
    
}

function startbowl(){
    if($('#bowlers option:selected').text()=='Select' ){
        $('#changesbo').css('visibility','');
    }else{
        $('#changesbo').css('visibility','hidden');
        $('#bowlers').attr('disabled',true);
        $('#startbowl').prop('disabled',true);
        bowlpanel();
    }
}

function bowlpanel(){
    if($('#startbat').prop('disabled')==true && $('#startbowl').prop('disabled')==true ){
        $('#zero').attr('disabled',false);
        $('#one').attr('disabled',false);
        $('#two').attr('disabled',false);
        $('#three').attr('disabled',false);
        $('#four').attr('disabled',false);
        $('#five').attr('disabled',false);
        $('#six').attr('disabled',false);
        $('#undo').attr('disabled',false);
        $("#wide").prop('checked', false);
        $("#noball").prop('checked', false);
        $("#bye").prop('checked', false);
        $("#lb").prop('checked', false);
        $("#wiket").prop('checked', false);
    }else{
        $('#zero').attr('disabled',true);
        $('#one').attr('disabled',true);
        $('#two').attr('disabled',true);
        $('#three').attr('disabled',true);
        $('#four').attr('disabled',true);
        $('#five').attr('disabled',true);
        $('#six').attr('disabled',true);
        $('#undo').attr('disabled',true);
        $("#wide").prop('checked', false);
        $("#noball").prop('checked', false);
        $("#bye").prop('checked', false);
        $("#lb").prop('checked', false);
        $("#wiket").prop('checked', false);
    }


}

function swap(){
    if($('#star1').css('display')=='inline'){
        $('#star2').css('display','inline');
        $('#star1').css('display','none'); 
    } 
    else{
        $('#star1').css('display','inline');
        $('#star2').css('display','none'); 
    }
}

function firstbatsman2(){
    $( "#1team2 option:selected" ).text();
    firstbatsman2s=true;
}

function firstbatsman1(){
    $( "#1team1 option:selected" ).text();
    firstbatsman1s=true;
}

function firstbowler(){
    $( "#bowlers option:selected" ).text();
    firstbowlers=true;
}

var firstbatsman2s=false;
var firstbatsman1s=false;
var firstbowlers=false;
var score1=0;
var wickets1=0;
var overs1=0;
var oldwic=0;

function getrun(run){
    var noballcheck=false;
    var extras1=0;
    $("#wide").prop('checked') ? extras1=1 : extras1=extras1 ;
    $("#bye").prop('checked') ? extras1=extras1 : extras1=extras1;
    $("#lb").prop('checked') ? extras1=extras1 : extras1=extras1;
    $("#wiket").prop('checked') ? wickets1+=1 : wickets1=wickets1;
    if($("#noball").prop('checked')){
        if(noballrun==0){noballcheck=true;}
        extras1=noballrun;
    }
    var num=parseInt(run.textContent);
    score1+=num;
    var ext=false;
    if(extras1>0 ){
        overs1=overs1;
        score1+=1;
        ext=true;
    }
    else if(noballcheck==true){
        score1=score1;
        ext=true;
    }
    else{
        overs1=overs1+0.1;
        overs1=parseFloat(overs1.toFixed(1));
        if(overs1.toString().includes('.6')){
           overs1+=0.4;
        }
    }
    forallchange(score1,wickets1,overs1,num,ext)
}

function forallchange(score1,wickets1,overs1,num,ext){
    $('#runsadd').text(score1);
    $('#wickets').text(wickets1);
    $('#over').text(overs1);
    $("#wide").prop('checked', false);
    $("#noball").prop('checked', false);
    $("#bye").prop('checked', false);
    $("#lb").prop('checked', false);
    $("#wiket").prop('checked', false);
    if(firstbatsman1s==true){
        $('#run1').text(0);
        firstbatsman1s=false;
        $('#bowl1').text(0);
    }
    if(firstbatsman2s==true){
        $('#run2').text(0);
        firstbatsman2s=false;
        $('#bowl2').text(0);
    }
    if($('#star1').css('display')=='inline'){
        $('#run1').text(parseInt($('#run1').text())+num);
        if(ext==false)
        $('#bowl1').text(parseInt($('#bowl1').text())+1);
        else
        $('#bowl1').text(parseInt($('#bowl1').text()));
        if(num==1 || num==3 || num==5 ){
            $('#star2').css('display','inline');
            $('#star1').css('display','none');
        }
    }else{
        $('#run2').text(parseInt($('#run2').text())+num);
        if(ext==false)
        $('#bowl2').text(parseInt($('#bowl2').text())+1);
        else
        $('#bowl2').text(parseInt($('#bowl2').text()));
        if(num==1 || num==3 || num==5 ){
            $('#star1').css('display','inline');
            $('#star2').css('display','none');
        }
    }
    if(oldwic !=wickets1){
        $('#changesba').css('visibility','');
        $('#startbat').prop('disabled',false);
        $('#1team2').attr('disabled',false);
        $('#1team1').attr('disabled',false);
        bowlpanel();
    }else{
        $('#changesba').css('visibility','hidden');
    }
    oldwic = wickets1;
    if(!(overs1.toString().includes('.')) && ext==false){
        if($('#star1').css('display')=='inline'){
            $('#star2').css('display','inline');
            $('#star1').css('display','none'); 
        } 
        else{
            $('#star1').css('display','inline');
            $('#star2').css('display','none'); 
        }
        $('#changesbo').css('visibility','');
        $('#startbowl').prop('disabled',false);
        $('#bowlers').attr('disabled',false);
        bowlpanel();
    }
    else{
        $('#changesbo').css('visibility','hidden'); 
    }
    if(overs1==over){
        Swal.fire({
            title: "End of Innings",
            icon: "success"
            });
            $('#zero').attr('disabled',true);
            $('#one').attr('disabled',true);
            $('#two').attr('disabled',true);
            $('#three').attr('disabled',true);
            $('#four').attr('disabled',true);
            $('#five').attr('disabled',true);
            $('#six').attr('disabled',true);
            $('#undo').attr('disabled',true);
    }
}
