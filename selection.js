// Team Selection

var IndiaCart = [{ pid: 1, pname: "Rohit Sharma", pdesc: "RHB " },
{ pid: 2, pname: "Shubhman Gill", pdesc: "RHB " },
{ pid: 3, pname: "Virat Kohli", pdesc: "R " },
{ pid: 4, pname: "Shreyas Iyer", pdesc: "R " },
{ pid: 5, pname: "K l Rahul", pdesc: "R " },
{ pid: 6, pname: "Suryakumar Yadav", pdesc: "R " },
{ pid: 7, pname: "Ravindra Jadeja", pdesc: "L " },
{ pid: 8, pname: "Mohammad Shami", pdesc: "R " },
{ pid: 9, pname: "Kuldeep Yadav", pdesc: "R " },
{ pid: 10, pname: "Jasprit Bumrah", pdesc: "R " },
{ pid: 11, pname: "Mohammad Siraj", pdesc: "R " },
{ pid: 12, pname: "Ishan Kishan", pdesc: "L " },
{ pid: 13, pname: "Hardik Pandya", pdesc: "R" },
{ pid: 14, pname: "Prasidh Krishna", pdesc: "R" },
{ pid: 15, pname: "Shardul Thakur", pdesc: "R" }];

var AustraliaCart = [{ pid: 1, pname: "David Warner", pdesc: "L " },
{ pid: 2, pname: "Travis Head", pdesc: "L " },
{ pid: 3, pname: "Mitchell Marsh", pdesc: "R " },
{ pid: 4, pname: "Steve Smith", pdesc: "R " },
{ pid: 5, pname: "Marnus labuschagne", pdesc: "R " },
{ pid: 6, pname: "Glenn Maxwell", pdesc: "R" },
{ pid: 7, pname: "Josh Inglish", pdesc: "L " },
{ pid: 8, pname: "Pat Cummins", pdesc: "R" },
{ pid: 9, pname: "Mitchell Starc", pdesc: "L" },
{ pid: 10, pname: "Josh Hazelwood", pdesc: "R" },
{ pid: 11, pname: "Adam Zampa", pdesc: "R" },
{ pid: 12, pname: "Alex Carey", pdesc: "L" },
{ pid: 13, pname: "Marcus Stoinis", pdesc: "R" },
{ pid: 14, pname: "Sean Abbott", pdesc: "R" },
{ pid: 15, pname: "Cameron Green", pdesc: "R" }];

var NewZealandCart = [{ pid: 1, pname: "Rachin Ravindra", pdesc: "L " },
{ pid: 2, pname: "Devon Conway", pdesc: "L " },
{ pid: 3, pname: "Kane Williamson", pdesc: "R " },
{ pid: 4, pname: "Daryl Mitchell", pdesc: "R" },
{ pid: 5, pname: "Tom latham", pdesc: "R" },
{ pid: 6, pname: "Glenn Phillips", pdesc: "R" },
{ pid: 7, pname: "Mitchell Santner", pdesc: "L" },
{ pid: 8, pname: "Trent Boult", pdesc: "R" },
{ pid: 9, pname: "Matt Henry", pdesc: "R" },
{ pid: 10, pname: "Tim Southee", pdesc: "R" },
{ pid: 11, pname: "lockie Ferguson", pdesc: "R" },
{ pid: 12, pname: "Mark Chapman", pdesc: "R" },
{ pid: 13, pname: "Ish Sodhi", pdesc: "L" },
{ pid: 14, pname: "Will Young", pdesc: "L" },
{ pid: 15, pname: "Jimmy Neesham", pdesc: "L" }];

var SouthAfricaCart = [{ pid: 1, pname: "Temba Bavuma", pdesc: "R" },
{ pid: 2, pname: "Quinton de Kock", pdesc: "L" },
{ pid: 3, pname: "Rassie van der Dussen", pdesc: "R" },
{ pid: 4, pname: "Aiden Markram", pdesc: "R" },
{ pid: 5, pname: "Heinrich Klaasen", pdesc: "R" },
{ pid: 6, pname: "David Miller", pdesc: "L" },
{ pid: 7, pname: "Marco Jansen", pdesc: "L" },
{ pid: 8, pname: "Gerald Coetzee", pdesc: "R" },
{ pid: 9, pname: "Kagiso Rabada", pdesc: "R" },
{ pid: 10, pname: "Keshav Maharaj", pdesc: "L" },
{ pid: 11, pname: "Tabraiz Shamsi", pdesc: "L" },
{ pid: 12, pname: "Reeza Hendricks", pdesc: "R" },
{ pid: 13, pname: "Sisanda Magala", pdesc: "R" },
{ pid: 14, pname: "Anrich Nortje", pdesc: "R" },
{ pid: 15, pname: "Lungi Ngidi", pdesc: "R" }];

var TeamABDCart = [{ pid: 1, pname: "Nishi Prasad", pdesc: "R" },
{ pid: 2, pname: "Vaibhav Patel", pdesc: "R" },
{ pid: 3, pname: "Amit Singh Rajput", pdesc: "R" },
{ pid: 4, pname: "Ritesh Yawale", pdesc: "R" },
{ pid: 5, pname: "Ashish Singh Rajput", pdesc: "R" },
{ pid: 6, pname: "Rishi Prasad", pdesc: "L" },
{ pid: 7, pname: "Harsh Tariwar", pdesc: "R" },
{ pid: 8, pname: "Rohit Tiwari", pdesc: "R" },
{ pid: 9, pname: "Ashwin Panchbuddhe", pdesc: "R" },
{ pid: 10, pname: "Gaurav Mehra", pdesc: "L" },
{ pid: 11, pname: "Suraj Nair", pdesc: "R" },
{ pid: 12, pname: "Prashant Gawai", pdesc: "R" },
{ pid: 13, pname: "Saransh Srivastava", pdesc: "R" },
{ pid: 14, pname: "Nishchay Kohad", pdesc: "R" },
{ pid: 15, pname: "Manish Bhangale", pdesc: "R" },
{ pid: 16, pname: "Angad Rakshak", pdesc: "R" }];

var TeamSeniorCart = [{ pid: 1, pname: "Charanjeet Sharma", pdesc: "R" },
{ pid: 2, pname: "Pranjal Bhiwgade", pdesc: "R" },
{ pid: 3, pname: "Tushar Mandal", pdesc: "R" },
{ pid: 4, pname: "Ankush Singh Rajput", pdesc: "R" },
{ pid: 5, pname: "Nikhil Kamath", pdesc: "R" },
{ pid: 6, pname: "Shubham Meshram", pdesc: "R" },
{ pid: 7, pname: "Shashi Prasad", pdesc: "R" },
{ pid: 8, pname: "Nandkishor Sharma", pdesc: "R" },
{ pid: 9, pname: "Pankaj Bain", pdesc: "L" },
{ pid: 10, pname: "Parag Patil", pdesc: "R" },
{ pid: 11, pname: "Ritesh Deshmukh", pdesc: "R" },
{ pid: 12, pname: "Amit Singh", pdesc: "R" },
{ pid: 13, pname: "Ashish Salotkar", pdesc: "R" },
{ pid: 14, pname: "Shubham Raut", pdesc: "R" },
{ pid: 15, pname: "Shashank", pdesc: "R" }];

var TeamGullyCart = [{ pid: 1, pname: "Ritesh Yawale", pdesc: "R" },
{ pid: 2, pname: "Harsh Shirbhate", pdesc: "R" },
{ pid: 3, pname: "Rahul Shirbhate", pdesc: "R" },
{ pid: 4, pname: "Mayur Satpute", pdesc: "R" },
{ pid: 5, pname: "Shivam Yadav", pdesc: "R" },
{ pid: 6, pname: "Ramsingh Yadav", pdesc: "R" },
{ pid: 7, pname: "Nilesh Baraskar", pdesc: "R" },
{ pid: 8, pname: "Ritesh Baraskar", pdesc: "R" },
{ pid: 9, pname: "Aniket Titarmare", pdesc: "R" },
{ pid: 10, pname: "Vivek Charde", pdesc: "R" },
{ pid: 11, pname: "Doms Charde", pdesc: "R" },
{ pid: 12, pname: "Aman Yadav", pdesc: "R" },
{ pid: 13, pname: "Chetan Likitkar", pdesc: "R" },
{ pid: 14, pname: "Sagar Wankhede", pdesc: "R" },
{ pid: 15, pname: "Pradeep Chakole", pdesc: "R" },]

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
