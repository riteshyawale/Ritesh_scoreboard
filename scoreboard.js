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
    if(sessionStorage.getItem('baating')!=null){
        $("#second").show();
        $("#dropdowns").hide();
    }
   
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
var firstarrays;
var secondarays;
var st2;

function showimg(flag){
    if(flag=='fteam1'){var flags=flag1;var teams=teamname1;var array=array1;var conarray=array2;var t2=teamname2;};
    if(flag=='fteam2'){var flags=flag2;var teams=teamname2;var array=array2;var conarray=array1;var t2=teamname1;};
    $('#fflag').show()
    $('#fflag').attr("src", flags);
    $('#selectnames').text(teams);
    $('#selectnamess').text(teams);
    $('#fflags').show()
    $('#fflags').attr("src", flags);
    $('#dropdowns').prop('disabled',true);
    firstarrays=array;
    $('#grid1').text(teams)
    $('#grid2').text(t2)
    $('#grid1').show()
    $('#grid2').show()
    secondarays=conarray;
    if(flags==flag1){st2='fteam2'};
    if(flags==flag2){st2='fteam1'};

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

function secondinn(){
    showimg(sessionStorage.getItem('baating'))
    $('#target').text(sessionStorage.getItem('target'));
    firstarrays=JSON.parse(sessionStorage.getItem('innings2battingarray'))
    secondarays=JSON.parse(sessionStorage.getItem('innings1battingarray'))
}

var bowlflag=false;
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
        bowlflag=false;
    }else{
        $('#changesbo').css('visibility','hidden');
        $('#bowlers').attr('disabled',true);
        $('#startbowl').prop('disabled',true);
        cartRowHTML1='';
        var arrayobj=secondarays.find(o => o.name == $( "#bowlers option:selected" ).text());
        $('#wickb1').text(arrayobj.wickets)
        $('#runb1').text(arrayobj.bowlruns)
        $('#overb1').text(arrayobj.overs)
        wickb1=wickets1;
        runb1=score1;
        overb1=overs1;
        bowlflag=true;
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
var bowlinc=false;
var score1=0;
var wickets1=0;
var overs1=0;
var oldwic=0;
var wickb1=0;
var runb1=0;
var overb1=0;

function getrun(run){
    var noballcheck=false;
    var noballf=false;
    var extras1=0;
    var byes=false;
    var lbyes=false;
    $("#wide").prop('checked') ? extras1=1 : extras1=extras1 ;
    $("#bye").prop('checked') ? byes=true : byes=false;
    $("#lb").prop('checked') ? lbyes=true : lbyes=false;
    $("#wiket").prop('checked') ? wickets1+=1 : wickets1=wickets1;
    if($("#noball").prop('checked')){
        if(noballrun==0){noballcheck=true;}
        extras1=noballrun;
        noballf=true;
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
    forallchange(score1,wickets1,overs1,num,ext,byes,lbyes,noballf,extras1)
}

function forallchange(score1,wickets1,overs1,num,ext,byes,lbyes,noballf,extras1){
    $('#runsadd').text(score1);
    $('#wickets').text(wickets1);
    $('#over').text(overs1);
    $("#wide").prop('checked', false);
    $("#noball").prop('checked', false);
    $("#bye").prop('checked', false);
    $("#lb").prop('checked', false);
    $("#wiket").prop('checked', false);
    // new batsman
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
    // for getting runs to a strike batsman
    if($('#star1').css('display')=='inline'){
        if(byes==true){
            $('#run1').text(parseInt($('#run1').text()));
        }
        else if(lbyes==true){
            $('#run1').text(parseInt($('#run1').text()));
        }
        else{
            $('#run1').text(parseInt($('#run1').text())+num);
        }
        if(ext==false){
            $('#bowl1').text(parseInt($('#bowl1').text())+1);
            bowlinc=true;
        }
        else{
            $('#bowl1').text(parseInt($('#bowl1').text()));
            bowlinc=false;
        }
        updatebatsmen( $( "#1team1 option:selected" ).text(),$('#run1').text(),$('#bowl1').text());
        if(num==1 || num==3 || num==5 ){
            $('#star2').css('display','inline');
            $('#star1').css('display','none');
        }
    }else{
        if(byes==true){
            $('#run2').text(parseInt($('#run2').text()));
        }
        else if(lbyes==true){
            $('#run2').text(parseInt($('#run2').text()));
        }
        else{
            $('#run2').text(parseInt($('#run2').text())+num);
        }
        if(ext==false){
            $('#bowl2').text(parseInt($('#bowl2').text())+1);
            bowlinc=true;
        }
        else{
            $('#bowl2').text(parseInt($('#bowl2').text()));
            bowlinc=false;
        }
        updatebatsmen( $( "#1team2 option:selected" ).text(),$('#run2').text(),$('#bowl2').text());
        if(num==1 || num==3 || num==5 ){
            $('#star1').css('display','inline');
            $('#star2').css('display','none');
        }
    }
    // for wicket out
    var wicketf=false;
    if(oldwic !=wickets1){
        $('#changesba').css('visibility','');
        $('#startbat').prop('disabled',false);
        $('#1team2').attr('disabled',false);
        $('#1team1').attr('disabled',false);
        wicketf=true;
        bowlpanel();
    }else{
        $('#changesba').css('visibility','hidden');
    }
    oldwic = wickets1;
    // for new over
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
    //for getting bowling figures
    bowlingfigures(wickets1,score1,overs1,num,noballf,extras1)
    //bowling grid create
    createsbowlinggrid(num,ext,byes,lbyes,noballf,wicketf)
    if( $('#jsGrid1batting').css('display')=='block'){
        $("#jsGrid1batting").jsGrid({width: "100%",height: "auto",data: firstarrays,
            fields: [
                { name: "name",title:"Player Name", width: 120, validate: "required" },
                { name: "runs",title:"Runs", width: 100 },
                { name: "balls",title:"Balls", width: 100 }
            ]
        });
        $("#jsGrid2bowling").jsGrid({ width: "100%",height: "auto",data: secondarays,
            fields: [
                { name: "name",title:"Player Name", width: 120, validate: "required" },
                { name: "overs",title:"Overs",  width: 60 },
                { name: "bowlruns",title:"Runs",  width: 60 },
                { name: "wickets",title:"Wickets",  width: 60 }
            ]
        });
    }
    if( $('#jsGrid2batting').css('display')=='block'){
        $("#jsGrid2batting").jsGrid({width: "100%", height: "auto",data: secondarays,
            fields: [
                { name: "name",title:"Player Name", width: 120, validate: "required" },
                { name: "runs",title:"Runs", width: 100 },
                { name: "balls",title:"Balls", width: 100 }
            ]
        });
        $("#jsGrid1bowling").jsGrid({ width: "100%",height: "auto",data: firstarrays,
            fields: [
                { name: "name",title:"Player Name", width: 120, validate: "required" },
                { name: "overs",title:"Overs",  width: 60 },
                { name: "bowlruns",title:"Runs",  width: 60 },
                { name: "wickets",title:"Wickets",  width: 60 }
            ]
        });
    }
   
    // end of innings 
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
            $('#startnew').show();
            $('#target').text('Target = '+(score1+1)+ ' runs in '+over+' overs');
            sessionStorage.setItem('innings1battingarray',JSON.stringify(firstarrays));
            sessionStorage.setItem('innings2battingarray',JSON.stringify(secondarays));
            sessionStorage.setItem('baating',st2);
            sessionStorage.setItem('target','Target = '+(score1+1)+ ' runs in '+over+' overs');
    }
}

function bowlingfigures(wickets1,score1,overs1,num,noballf,extras1){
    var overv=parseFloat((overs1-overb1).toFixed(1));
    updatebowler($( "#bowlers option:selected" ).text(),wickets1-wickb1,score1-runb1,overv,num,noballf,extras1)
}

function startnew(){
    location.reload();
}

var cartRowHTML1 = "";
function createsbowlinggrid(num,ext,byes,lbyes,noballf,wicketf){
    var variable;
    variable=num.toString();
    if(wicketf==true){variable+='W'.fontcolor('red')}
    if(ext==true){
        if(noballf==true){variable+='nb'}
        else {variable+='wd'}
    }
    if(byes==true){variable+='b'}
    if(lbyes==true){variable+='lb'}  
    if(variable=='0'+'W'.fontcolor('red')) {variable='W'.fontcolor('red')}
    if(variable=='0nb') {variable='nb'}
    if(variable=='0wd') {variable='wd'}
    if(variable=='0lb') {variable='lb'}
    if(variable=='0b') {variable='b'}
    cartRowHTML1 += '<button type="button" style="margin-top:4.5px;margin-bottom:4.5px;margin-left:3px;" disabled style="" class="btn btn-secondary btn-circle btn-sm">'+variable+'</button>';
    $('#bowlinggrid').html(cartRowHTML1);
}

function updatebatsmen(names,runs,balls){
    var arrayobj=firstarrays.find(o => o.name == names);
    arrayobj.runs=runs;
    arrayobj.balls=balls;
}

function updatebowler(names,wicks,runs,overss,num,noballf,extras1){
    var arrayobj=secondarays.find(o => o.name == names);
    
        if(bowlinc==true){
            arrayobj.overs=parseFloat((arrayobj.overs+0.1).toFixed(1));
            if(arrayobj.overs.toString().includes('.6')){
                arrayobj.overs+=0.4;
            }
        }else{
            arrayobj.overs=arrayobj.overs;
        }
        if(noballf==true || extras1>0){
            arrayobj.bowlruns+=num+1;
        }else{
            arrayobj.bowlruns+=num
        }
    arrayobj.wickets+=wicks;
    $('#wickb1').text(arrayobj.wickets)
    $('#runb1').text(arrayobj.bowlruns)
    $('#overb1').text(arrayobj.overs)
}

function showgrid1(){
    
    $("#jsGrid1batting").jsGrid({
        width: "100%",
        height: "auto",
        data: firstarrays,
 
        fields: [
            { name: "name",title:"Player Name", width: 120, validate: "required" },
            { name: "runs",title:"Runs", width: 100 },
            { name: "balls",title:"Balls", width: 100 }
        ]
    });
    
    $("#jsGrid2bowling").jsGrid({
        width: "100%",
        height: "auto",
        data: secondarays,
        fields: [
            { name: "name",title:"Player Name", width: 120, validate: "required" },
            { name: "overs",title:"Overs",  width: 60 },
            { name: "bowlruns",title:"Runs",  width: 60 },
            { name: "wickets",title:"Wickets",  width: 60 }
        ]
    });
    $("#jsGrid2batting").hide();
    $("#jsGrid1bowling").hide();
    $("#jsGrid1batting").toggle();
    $("#jsGrid2bowling").toggle();
    $("#grid2batting").hide();
    $("#grid1bowling").hide();
    $("#grid1batting").toggle();
    $("#grid2bowling").toggle();
    $("#grid1batting").text('Battings : '+$('#grid1').text());
    $("#grid2bowling").text('Bowling : '+$('#grid2').text());

}

function showgrid2(){

    $("#jsGrid2batting").jsGrid({
        width: "100%",
        height: "auto",
        data: secondarays,
 
        fields: [
            { name: "name",title:"Player Name", width: 120, validate: "required" },
            { name: "runs",title:"Runs", width: 100 },
            { name: "balls",title:"Balls", width: 100 }
        ]
    });
    $("#jsGrid1bowling").jsGrid({
        width: "100%",
        height: "auto",
        data: firstarrays,
        fields: [
            { name: "name",title:"Player Name", width: 120, validate: "required" },
            { name: "overs",title:"Overs",  width: 60 },
            { name: "bowlruns",title:"Runs",  width: 60 },
            { name: "wickets",title:"Wickets",  width: 60 }
        ]
    });
    $("#jsGrid1batting").hide();
    $("#jsGrid2bowling").hide();
    $("#jsGrid2batting").toggle();
    $("#jsGrid1bowling").toggle();
    $("#grid1batting").hide();
    $("#grid2bowling").hide();
    $("#grid2batting").toggle();
    $("#grid1bowling").toggle();
    $("#grid2batting").text('Battings : '+$('#grid2').text());
    $("#grid1bowling").text('Bowling : '+$('#grid1').text());
}