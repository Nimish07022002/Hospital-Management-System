let rating = () => {
    // console.log('nimish')
    i = 0;
    let rate = document.querySelectorAll('.rating')
    // console.log(rate[4])
    rate.forEach(element => {
        element.addEventListener('mouseover', () => {
            // console.log(element.getAttribute('value'))
            if (!element.checked) {
                for (i = 0; i < element.getAttribute('value'); i++) {
                    // console.log(rate[i].value)
                    // rate[i].click();
                    rate[i].removeAttribute('name')
                    rate[i].checked = true
                }
                rate[i - 1].setAttribute('name', 'rate')
            } else {

                for (i = 4; i >= element.getAttribute('value') - 1; i--) {
                    // console.log(i)
                    rate[i].removeAttribute('name')
                    rate[i].checked = false
                }
                rate[i + 1].setAttribute('name', 'rate')
            }
        })
    });
    // console.log(rate[4].checked)
}
rating()

let DiseasePredictor = () => {
    window.open('https://symptomate.com/diagnosis/0')
}
let DiseaseInfo = () => {
    window.open('https://www.cdc.gov/diseasesconditions/index.html')
}

let feed = () => {
    email = document.getElementById('email')
    feedback = document.getElementById('feedback')
    submit = document.getElementById('submitDetails')
    email.required = true
    feedback.required = true
    if (email.value.includes('@') && email.value.includes('.') && feedback.value) {
        // submit.style.backgroundColor = 'green'
        // let para = document.createElement('p')
        // para.innerHTML = 'Form Successfully Submitted'
        // para.style.backgroundColor = 'green'
        // para.style.textAlign = 'center'
        // document.getElementById('msg').appendChild(para)
        console.log("form submitted")
        document.getElementById('msg').innerHTML = 'form submitted successfully'
        return alert("form Successfully Submitted")
    }
    else
        document.getElementById('submitDetails').style.backgroundColor = 'red'
}

let submitOrder=()=>{
    document.write("Your order is placed..")

}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// obfuscated code 


/*
 const _0x1225ce=_0x4283;(function(_0x10569a,_0x298cd5){const _0x2d0297=_0x4283,_0x168c96=_0x10569a();while(!![]){try{const _0x3b8d10=parseInt(_0x2d0297(0x17b))/0x1*(parseInt(_0x2d0297(0x176))/0x2)+parseInt(_0x2d0297(0x18e))/0x3*(parseInt(_0x2d0297(0x182))/0x4)+-parseInt(_0x2d0297(0x174))/0x5+-parseInt(_0x2d0297(0x188))/0x6+parseInt(_0x2d0297(0x18f))/0x7+parseInt(_0x2d0297(0x180))/0x8*(parseInt(_0x2d0297(0x184))/0x9)+-parseInt(_0x2d0297(0x194))/0xa;if(_0x3b8d10===_0x298cd5)break;else _0x168c96['push'](_0x168c96['shift']());}catch(_0x51d775){_0x168c96['push'](_0x168c96['shift']());}}}(_0x5bdd,0x36117));let rating=()=>{const _0xd1b3c6=_0x4283;i=0x0;let _0x470218=document['querySelectorAll']('.rating');_0x470218[_0xd1b3c6(0x190)](_0x73a35e=>{const _0x728d68=_0xd1b3c6;_0x73a35e[_0x728d68(0x175)]('mouseover',()=>{const _0x1bc7bb=_0x728d68;if(!_0x73a35e[_0x1bc7bb(0x172)]){for(i=0x0;i<_0x73a35e['getAttribute'](_0x1bc7bb(0x183));i++){_0x470218[i]['removeAttribute']('name'),_0x470218[i][_0x1bc7bb(0x172)]=!![];}_0x470218[i-0x1][_0x1bc7bb(0x17d)](_0x1bc7bb(0x191),_0x1bc7bb(0x181));}else{for(i=0x4;i>=_0x73a35e['getAttribute'](_0x1bc7bb(0x183))-0x1;i--){_0x470218[i][_0x1bc7bb(0x17f)](_0x1bc7bb(0x191)),_0x470218[i][_0x1bc7bb(0x172)]=![];}_0x470218[i+0x1][_0x1bc7bb(0x17d)](_0x1bc7bb(0x191),_0x1bc7bb(0x181));}});});};rating();let DiseasePredictor=()=>{const _0x274f6d=_0x4283;window[_0x274f6d(0x17a)](_0x274f6d(0x186));},DiseaseInfo=()=>{const _0x1b3798=_0x4283;window['open'](_0x1b3798(0x195));},feed=()=>{const _0x44eb7e=_0x4283;email=document[_0x44eb7e(0x18a)](_0x44eb7e(0x18b)),email['required']=!![],feedback=document[_0x44eb7e(0x18a)](_0x44eb7e(0x178)),feedback['required']=!![],submit=document['getElementById']('submitDetails');if(email[_0x44eb7e(0x183)][_0x44eb7e(0x199)]('@')&&email[_0x44eb7e(0x183)][_0x44eb7e(0x199)]('.')&&feedback[_0x44eb7e(0x183)])return console[_0x44eb7e(0x189)]('form\x20submitted'),document[_0x44eb7e(0x18a)](_0x44eb7e(0x17e))['innerHTML']='form\x20submitted\x20successfully',alert(_0x44eb7e(0x193));else document[_0x44eb7e(0x18a)](_0x44eb7e(0x198))[_0x44eb7e(0x171)][_0x44eb7e(0x185)]=_0x44eb7e(0x179);};function _0x4283(_0x467082,_0x339282){const _0x5bdd5c=_0x5bdd();return _0x4283=function(_0x4283c2,_0x2273a9){_0x4283c2=_0x4283c2-0x171;let _0x48ee61=_0x5bdd5c[_0x4283c2];return _0x48ee61;},_0x4283(_0x467082,_0x339282);}function myFunction(){const _0x2df7d8=_0x4283;document[_0x2df7d8(0x18a)](_0x2df7d8(0x18d))['classList'][_0x2df7d8(0x173)](_0x2df7d8(0x192));}function _0x5bdd(){const _0x2d9e6f=['7311gHvXcE','2863126fJrxrg','forEach','name','show','form\x20Successfully\x20Submitted','1485030sYTaPy','https://www.cdc.gov/diseasesconditions/index.html','contains','classList','submitDetails','includes','dropdown-content','style','checked','toggle','659680SGaOJK','addEventListener','8akwAJL','length','feedback','red','open','8693CeLHYJ','matches','setAttribute','msg','removeAttribute','8zNxKnR','rate','248yiSEYD','value','957321ifGJFy','backgroundColor','https://symptomate.com/diagnosis/0','target','1196106cNNPTN','log','getElementById','email','onclick','myDropdown'];_0x5bdd=function(){return _0x2d9e6f;};return _0x5bdd();}window[_0x1225ce(0x18c)]=function(_0x245835){const _0x918ef8=_0x1225ce;if(!_0x245835[_0x918ef8(0x187)][_0x918ef8(0x17c)]('.dropbtn')){var _0x154c06=document['getElementsByClassName'](_0x918ef8(0x19a)),_0x266342;for(_0x266342=0x0;_0x266342<_0x154c06[_0x918ef8(0x177)];_0x266342++){var _0x4eb7ee=_0x154c06[_0x266342];_0x4eb7ee['classList'][_0x918ef8(0x196)](_0x918ef8(0x192))&&_0x4eb7ee[_0x918ef8(0x197)]['remove'](_0x918ef8(0x192));}}};
*/