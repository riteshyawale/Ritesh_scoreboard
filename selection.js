// Team Selection

var IndiaCart = [{ pid: 1, pname: "Rohit Sharma", pdesc: "R BAT" },
{ pid: 2, pname: "Shubhman Gill", pdesc: "R BAT" },
{ pid: 3, pname: "Virat Kohli", pdesc: "R BAT" },
{ pid: 4, pname: "Shreyas Iyer", pdesc: "R BAT " },
{ pid: 5, pname: "K l Rahul", pdesc: "R BAT" },
{ pid: 6, pname: "Suryakumar Yadav", pdesc: "R BAT" },
{ pid: 7, pname: "Ravindra Jadeja", pdesc: "L ALL" },
{ pid: 8, pname: "Mohammad Shami", pdesc: "R BWL" },
{ pid: 9, pname: "Kuldeep Yadav", pdesc: "L SPN" },
{ pid: 10, pname: "Jasprit Bumrah", pdesc: "R BWL" },
{ pid: 11, pname: "Mohammad Siraj", pdesc: "R BWL" },
{ pid: 12, pname: "Ishan Kishan", pdesc: "L BAT" },
{ pid: 13, pname: "Hardik Pandya", pdesc: "R ALL" },
{ pid: 14, pname: "Prasidh Krishna", pdesc: "R BWL" },
{ pid: 15, pname: "Shardul Thakur", pdesc: "R ALL" }];

var AustraliaCart = [{ pid: 1, pname: "David Warner", pdesc: "L BAT" },
{ pid: 2, pname: "Travis Head", pdesc: "L BAT" },
{ pid: 3, pname: "Mitchell Marsh", pdesc: "R BAT" },
{ pid: 4, pname: "Steve Smith", pdesc: "R BAT" },
{ pid: 5, pname: "Marnus labuschagne", pdesc: "R BAT" },
{ pid: 6, pname: "Glenn Maxwell", pdesc: "R ALL" },
{ pid: 7, pname: "Josh Inglish", pdesc: "L BAT" },
{ pid: 8, pname: "Pat Cummins", pdesc: "R ALL" },
{ pid: 9, pname: "Mitchell Starc", pdesc: "L BWL" },
{ pid: 10, pname: "Josh Hazelwood", pdesc: "R BWL" },
{ pid: 11, pname: "Adam Zampa", pdesc: "R SPN" },
{ pid: 12, pname: "Alex Carey", pdesc: "L BAT" },
{ pid: 13, pname: "Marcus Stoinis", pdesc: "R ALL" },
{ pid: 14, pname: "Sean Abbott", pdesc: "R BWL" },
{ pid: 15, pname: "Cameron Green", pdesc: "R ALL" }];

var NewZealandCart = [{ pid: 1, pname: "Rachin Ravindra", pdesc: "L BAT" },
{ pid: 2, pname: "Devon Conway", pdesc: "L BAT" },
{ pid: 3, pname: "Kane Williamson", pdesc: "R BAT" },
{ pid: 4, pname: "Daryl Mitchell", pdesc: "R BAT" },
{ pid: 5, pname: "Tom latham", pdesc: "R BAT" },
{ pid: 6, pname: "Glenn Phillips", pdesc: "R BAT" },
{ pid: 7, pname: "Mitchell Santner", pdesc: "L SPN" },
{ pid: 8, pname: "Trent Boult", pdesc: "L BWL" },
{ pid: 9, pname: "Matt Henry", pdesc: "R BWL" },
{ pid: 10, pname: "Tim Southee", pdesc: "R BWL" },
{ pid: 11, pname: "Lockie Ferguson", pdesc: "R BWL" },
{ pid: 12, pname: "Mark Chapman", pdesc: "R ALL" },
{ pid: 13, pname: "Ish Sodhi", pdesc: "L SPN" },
{ pid: 14, pname: "Will Young", pdesc: "L BAT" },
{ pid: 15, pname: "Jimmy Neesham", pdesc: "L ALL" }];

var SouthAfricaCart = [{ pid: 1, pname: "Temba Bavuma", pdesc: "R BAT" },
{ pid: 2, pname: "Quinton de Kock", pdesc: "L BAT" },
{ pid: 3, pname: "Rassie van der Dussen", pdesc: "R BAT" },
{ pid: 4, pname: "Aiden Markram", pdesc: "R BAT" },
{ pid: 5, pname: "Heinrich Klaasen", pdesc: "R BAT" },
{ pid: 6, pname: "David Miller", pdesc: "L BAT" },
{ pid: 7, pname: "Marco Jansen", pdesc: "L ALL" },
{ pid: 8, pname: "Gerald Coetzee", pdesc: "R BWL" },
{ pid: 9, pname: "Kagiso Rabada", pdesc: "R BWL" },
{ pid: 10, pname: "Keshav Maharaj", pdesc: "R SPN" },
{ pid: 11, pname: "Tabraiz Shamsi", pdesc: "L SPN" },
{ pid: 12, pname: "Reeza Hendricks", pdesc: "R BAT" },
{ pid: 13, pname: "Sisanda Magala", pdesc: "R BAT" },
{ pid: 14, pname: "Anrich Nortje", pdesc: "R BWL" },
{ pid: 15, pname: "Lungi Ngidi", pdesc: "R BWL" }];

var TeamABDCart = [{ pid: 1, pname: "Nishi Prasad", pdesc: "R ALL" },
{ pid: 2, pname: "Vaibhav Patel", pdesc: "R BAT" },
{ pid: 3, pname: "Amit Singh Rajput", pdesc: "R BAT" },
{ pid: 4, pname: "Ritesh Yawale", pdesc: "R BAT" },
{ pid: 5, pname: "Ashish Singh Rajput", pdesc: "R BAT" },
{ pid: 6, pname: "Rishi Prasad", pdesc: "L ALL" },
{ pid: 7, pname: "Harsh Tariwar", pdesc: "R ALL" },
{ pid: 8, pname: "Rohit Tiwari", pdesc: "R BAT" },
{ pid: 9, pname: "Ashwin Panchbuddhe", pdesc: "R BAT" },
{ pid: 10, pname: "Gaurav Mehra", pdesc: "L ALL" },
{ pid: 11, pname: "Suraj Nair", pdesc: "R ALL" },
{ pid: 12, pname: "Prashant Gawai", pdesc: "R ALL" },
{ pid: 13, pname: "Saransh Srivastava", pdesc: "R BAT" },
{ pid: 14, pname: "Nishchay Kohad", pdesc: "R BAT" },
{ pid: 15, pname: "Manish Bhangale", pdesc: "R BAT" },
{ pid: 16, pname: "Angad Rakshak", pdesc: "R BAT" },
{ pid: 17, pname: "Vipul Dhawas", pdesc: "R BAT" },                  
{ pid: 18, pname: "Charanjeet Sharma", pdesc: "R BAT" },
{ pid: 19, pname: "Pranjal Bhiwgade", pdesc: "R ALL" },
{ pid: 20, pname: "Tushar Mandal", pdesc: "R ALL" },
{ pid: 21, pname: "Ankush Singh Rajput", pdesc: "R BAT" },
{ pid: 22, pname: "Nikhil Kamath", pdesc: "R BAT" },
{ pid: 23, pname: "Shubham Meshram", pdesc: "R BAT" },
{ pid: 24, pname: "Shashi Prasad", pdesc: "R ALL" },
{ pid: 25, pname: "Nandkishor Sharma", pdesc: "R BWL" },
{ pid: 26, pname: "Pankaj Bain", pdesc: "L BAT" },
{ pid: 27, pname: "Parag Patil", pdesc: "R BWL" },
{ pid: 28, pname: "Ritesh Deshmukh", pdesc: "R BWL" },
{ pid: 29, pname: "Amit Singh", pdesc: "R BAT" },
{ pid: 30, pname: "Ashish Salotkar", pdesc: "R BAT" },
{ pid: 31, pname: "Shubham Raut", pdesc: "R BWL" },
{ pid: 32, pname: "Shashank", pdesc: "R BAT" }];

var TeamSeniorCart = [{ pid: 1, pname: "Charanjeet Sharma", pdesc: "R BAT" },
{ pid: 2, pname: "Pranjal Bhiwgade", pdesc: "R ALL" },
{ pid: 3, pname: "Tushar Mandal", pdesc: "R ALL" },
{ pid: 4, pname: "Ankush Singh Rajput", pdesc: "R BAT" },
{ pid: 5, pname: "Nikhil Kamath", pdesc: "R BAT" },
{ pid: 6, pname: "Shubham Meshram", pdesc: "R BAT" },
{ pid: 7, pname: "Shashi Prasad", pdesc: "R ALL" },
{ pid: 8, pname: "Nandkishor Sharma", pdesc: "R BWL" },
{ pid: 9, pname: "Pankaj Bain", pdesc: "L BAT" },
{ pid: 10, pname: "Parag Patil", pdesc: "R BWL" },
{ pid: 11, pname: "Ritesh Deshmukh", pdesc: "R BWL" },
{ pid: 12, pname: "Amit Singh", pdesc: "R BAT" },
{ pid: 13, pname: "Ashish Salotkar", pdesc: "R BAT" },
{ pid: 14, pname: "Shubham Raut", pdesc: "R BWL" },
{ pid: 15, pname: "Shashank", pdesc: "R BAT" }, 
{ pid: 16, pname: "Nishi Prasad", pdesc: "R ALL" },
{ pid: 17, pname: "Vaibhav Patel", pdesc: "R BAT" },
{ pid: 18, pname: "Amit Singh Rajput", pdesc: "R BAT" },
{ pid: 19, pname: "Ritesh Yawale", pdesc: "R BAT" },
{ pid: 20, pname: "Ashish Singh Rajput", pdesc: "R BAT" },
{ pid: 21, pname: "Rishi Prasad", pdesc: "L ALL" },
{ pid: 22, pname: "Harsh Tariwar", pdesc: "R ALL" },
{ pid: 23, pname: "Rohit Tiwari", pdesc: "R BAT" },
{ pid: 24, pname: "Ashwin Panchbuddhe", pdesc: "R BAT" },
{ pid: 25, pname: "Gaurav Mehra", pdesc: "L ALL" },
{ pid: 26, pname: "Suraj Nair", pdesc: "R ALL" },
{ pid: 27, pname: "Prashant Gawai", pdesc: "R ALL" },
{ pid: 28, pname: "Saransh Srivastava", pdesc: "R BAT" },
{ pid: 29, pname: "Nishchay Kohad", pdesc: "R BAT" },
{ pid: 30, pname: "Manish Bhangale", pdesc: "R BAT" },
{ pid: 31, pname: "Angad Rakshak", pdesc: "R BAT" },
{ pid: 32, pname: "Vipul Dhawas", pdesc: "R BAT" }];

var TeamGullyCart = [{ pid: 1, pname: "Ritesh Yawale", pdesc: "R BAT" },
{ pid: 2, pname: "Harsh Shirbhate", pdesc: "R BAT" },
{ pid: 3, pname: "Rahul Shirbhate", pdesc: "L BWL" },
{ pid: 4, pname: "Mayur Satpute", pdesc: "R BAT" },
{ pid: 5, pname: "Shivam Yadav", pdesc: "R BAT" },
{ pid: 6, pname: "Ramsingh Yadav", pdesc: "R BAT" },
{ pid: 7, pname: "Nilesh Baraskar", pdesc: "R BAT" },
{ pid: 8, pname: "Ritesh Baraskar", pdesc: "R ALL" },
{ pid: 9, pname: "Aniket Titarmare", pdesc: "R BAT" },
{ pid: 10, pname: "Vivek Charde", pdesc: "R BAT" },
{ pid: 11, pname: "Doms Charde", pdesc: "R BAT" },
{ pid: 12, pname: "Aman Yadav", pdesc: "R BAT" },
{ pid: 13, pname: "Chetan Likitkar", pdesc: "R BAT" },
{ pid: 14, pname: "Sagar Wankhede", pdesc: "R ALL" },
{ pid: 15, pname: "Arnav", pdesc: "R BAT" }];

// ---------------js code starts

var itemlist;
var itemlist1;

function showCartTable(itemlists, string, name) {
    newitemlist=[];
    itemlist = itemlists;
    console.log(itemlist);
    var cartRowHTML = "";
    for (var i = 0; i < itemlist.length; i++) {
        cartRowHTML += "<tr draggable='true' ondragstart='start()'  ondragover='dragover()'>" +
        '<td ><i class="fa fa-edit" onclick="editname(this)" style="font-size:20px;padding-left:7px"></i></td>' +
        '<td style="display:none;"><i class="fa fa-save" onclick="savename(this)" style="font-size:20px;padding-left:10px;padding-top:5px"></i></td>' +
            "<td style='display: none;'>" + (i + 1) + "</td>" +
            "<td class='pnames'>" + itemlist[i].pname + "</td>" +
            "<td style='display:none;width:160px'><input type='text'  style='width:160px' value='" + itemlist[i].pname + "' ></td>" +
            "<td >" + itemlist[i].pdesc + "</td>" +
            "<td style='display:none;'><input type='text' style='width:70px' value='" + itemlist[i].pdesc + "' ></i></td>" +
            "<td ><input type='checkbox' onclick='checkfunction(this)'></input></td>" +

            "</tr>";
    }
    $('#cartTableBody').html(cartRowHTML);
    $('#imgflag').show()
    $('#imgflag').attr("src", string);
    $('#selectname').text(name);
    teamname1=name;
    flag1=string;
}

function showCartTable1(itemlists1, string, name) {
    newitemlist1=[];
    itemlist1 = itemlists1;
    console.log(itemlist1);
    var cartRowHTML1 = "";
    for (var i = 0; i < itemlist1.length; i++) {
        cartRowHTML1 += "<tr draggable='true' ondragstart='start()'  ondragover='dragover()'>" +
        '<td ><i class="fa fa-edit" onclick="editname(this)" style="font-size:20px;padding-left:7px"></i></td>' +
        '<td style="display:none;"><i class="fa fa-save" onclick="savename(this)" style="font-size:20px;padding-left:10px;padding-top:5px"></i></td>' +
        
            "<td style='display: none;'>" + (i + 1) + "</td>" +
            "<td class='pnames'>" + itemlist1[i].pname + "</td>" +
            "<td style='display:none;width:160px'><input type='text'  style='width:160px' value='" + itemlist1[i].pname + "' ></td>" +
            "<td >" + itemlist1[i].pdesc + "</td>" +
            "<td style='display:none;'><input type='text' style='width:70px' value='" + itemlist1[i].pdesc + "' ></td>" +
            "<td ><input type='checkbox' name='checks' onclick='checkfunction1(this)'></input></td>" +
            "</tr>";
    }
    $('#cartTableBody1').html(cartRowHTML1);
    $('#imgflag1').show()
    $('#imgflag1').attr("src", string);
    $('#selectname1').text(name);
    teamname2=name;
    flag2=string;
}

var topoutoffs;
var topovers;

function gocheck(){
    $('.dropdown').css('visibility','visible');
     topoutoffs=$("#topplayers").val()
     topovers=$("#overs").val()
    $('#gocheck').prop('disabled',true)
    $('#topplayers').prop('disabled',true)
    $('#overs').prop('disabled',true)
    $('#proceed').css('display','inline');
    $('#noball').prop('disabled',true)
}

var teamname2;
var teamname1;
var flag1;
var flag2;
var newitemlist = [];
var newitemlist1 = [];

function checkfunction(e) {
        if (e.checked == false) {
            var name = e.closest('tr').childNodes[2].innerText
            const index = newitemlist.indexOf(name);
            newitemlist.splice(index, 1);
            
        }
        else {
            var name = e.closest('tr').childNodes[2].innerText
            newitemlist.push(name);
        }
    
        if(newitemlist.length>=topoutoffs){
        for (var i = 1; i <= itemlist.length; i++) {
            var values= $('#cartTableBody > tr:nth-child('+(i)+') > td:nth-child(8) > input[type=checkbox]')[0];
            
                if (values.checked==false) {
                    values.disabled=true;
                }
            }  
        }
        else{
            for (var i = 1; i <= itemlist.length; i++) {
            var values= $('#cartTableBody > tr:nth-child('+(i)+') > td:nth-child(8) > input[type=checkbox]')[0];
            
                if (values.checked==false) {
                    values.disabled=false;
                }
            }  
        }      
}

function checkfunction1(e) {
    if (e.checked == false) {
        var name = e.closest('tr').childNodes[2].innerText
        const index = newitemlist1.indexOf(name);
        newitemlist1.splice(index, 1);
    }
    else {
        var name = e.closest('tr').childNodes[2].innerText
        newitemlist1.push(name);
    }

    if(newitemlist1.length>=topoutoffs){
    for (var i = 1; i <= itemlist1.length; i++) {
        var values= $('#cartTableBody1 > tr:nth-child('+(i)+') > td:nth-child(8) > input[type=checkbox]')[0];
        
            if (values.checked==false) {
                values.disabled=true;
            }
        }  
    }
    else{
        for (var i = 1; i <= itemlist1.length; i++) {
        var values= $('#cartTableBody1 > tr:nth-child('+(i)+') > td:nth-child(8) > input[type=checkbox]')[0];
        
            if (values.checked==false) {
                values.disabled=false;
            }
        }  
    }      
}

function editname(e) {
    var data = $(e).closest('tr');
    data[0].style.backgroundColor = '#9696ff'
    data[0].childNodes[0].style.display = 'none';
    data[0].childNodes[2].style.display = 'none';
    data[0].childNodes[3].style.display = 'none';
    data[0].childNodes[5].style.display = 'none';
    data[0].childNodes[7].style.display = '';
    data[0].childNodes[1].style.display = '';
    data[0].childNodes[4].style.display = '';
    data[0].childNodes[6].style.display = '';
   
}

function savename(e) {
    var data = $(e).closest('tr');
    data[0].style.backgroundColor = 'white'
    data[0].childNodes[0].style.display = '';
    data[0].childNodes[2].style.display = 'none';
    data[0].childNodes[3].style.display = '';
    data[0].childNodes[5].style.display = '';
    data[0].childNodes[7].style.display = '';
    data[0].childNodes[1].style.display = 'none';
    data[0].childNodes[4].style.display = 'none';
    data[0].childNodes[6].style.display = 'none';
    data[0].childNodes[3].innerHTML = data[0].childNodes[4].childNodes[0].value;
    data[0].childNodes[5].innerHTML = data[0].childNodes[6].childNodes[0].value;
}

var row;

function start() {
    row = event.target;
}
function dragover() {
    var e = event;
    e.preventDefault();

    let children = Array.from(e.target.parentNode.parentNode.children);

    if (children.indexOf(e.target.parentNode) > children.indexOf(row))
        e.target.parentNode.after(row);
    else
        e.target.parentNode.before(row);
}



function proceed() {
    if(newitemlist.length==topoutoffs && newitemlist1.length==topoutoffs ){
        newnamelist=[];
        newnamelist1=[];
            for(var j=0;j<newitemlist.length;j++){
                let myobj1={};
                var num=parseInt(newitemlist[j]);
                var name=$('#cartTableBody > tr:nth-child('+(num)+') > td.pnames')[0].innerText;
                myobj1.ids=j;
                myobj1.name=name;
                newnamelist.push(myobj1);
            }
            console.log(newnamelist)
            for(var j=0;j<newitemlist1.length;j++){
                let myobj2={};
                var num=parseInt(newitemlist1[j]);
                var name=$('#cartTableBody1 > tr:nth-child('+(num)+') > td.pnames')[0].innerText;
                myobj2.ids=j;
                myobj2.name=name; 
                newnamelist1.push(myobj2);
            }
            console.log(newnamelist1)
            sessionStorage.setItem("team1", JSON.stringify(newnamelist));
            sessionStorage.setItem("team2", JSON.stringify(newnamelist1));
            sessionStorage.setItem('over',topovers);
            sessionStorage.setItem('player',topoutoffs);
            sessionStorage.setItem('teamname1',teamname1);
            sessionStorage.setItem('teamname2',teamname2);
            sessionStorage.setItem('flag1',flag1);
            sessionStorage.setItem('flag2',flag2);
            sessionStorage.setItem('noball',$( "#noball option:selected" ).text());
            sessionStorage.setItem('lastman',$( "#lastman option:selected" ).text());
            window.location.href = 'scoreboard.html';
    }
    else{
        Swal.fire({
        title: "Select Both Teams with "+topoutoffs+ " Players",
        icon: "warning"
        });
    }
    

}

function clearst(){
    sessionStorage.clear();
    localStorage.clear();
}
