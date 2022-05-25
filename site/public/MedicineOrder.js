medOrder = () => {
    btnList = document.querySelectorAll('p.flex')
    cartItem = JSON.parse(sessionStorage.getItem('cartItm'))
    if (!cartItem) cartItem = []

    Array.from(btnList).forEach(element =>
        element.addEventListener('click', () => {
            medName = element.getAttribute("id")
            medPrice = (document.querySelector(`h2[id='${medName}'] + p`).innerText.slice(3)) * 1

            if (cartItem.find(e => e['name'] == medName)) {
                console.log("same")
                cartItem.forEach(e => {
                    if (e["name"] == medName) {
                        e['quantity'] += 1
                        console.log("incremented")
                    }
                })
                console.log(cartItem)
            }
            else {
                cartItem.push({ name: medName, price: medPrice, quantity: 1 })
            }
            sessionStorage.setItem('cartItm', JSON.stringify(cartItem))
        })
    )
}
cart = () => {
    tbl = document.querySelector('.tbl')
    cartItem = JSON.parse(sessionStorage.getItem('cartItm'))
    let total = 0
    let i = 0
    let tr = document.querySelectorAll('table tr')

    for (let j = 1; j < tr.length; j++) {
        // console.log(tr[j])
        tbl.removeChild(tr[j])
    }


    cartItem.forEach(e => {
        tblr = document.createElement('tr')
        tbldn = document.createElement('td')
        tbldp = document.createElement('td')
        tbldq = document.createElement('td')
        tbldb1 = document.createElement('button')
        tbldb2 = document.createElement('button')
        tbldb1.innerText = '+'
        tbldb2.innerText = '-'
        tbldn.innerText = e.name
        tbldp.innerText = e.price
        tbldq.innerText = e.quantity
        total += (e.quantity * e.price)
        tbldb1.setAttribute('val', (i + '+'))
        tbldb2.setAttribute('val', (i++ + '-'))
        tbldb1.style.backgroundColor = "green"
        tbldb2.style.backgroundColor = "red"

        tblr.appendChild(tbldn)
        tblr.appendChild(tbldp)
        tblr.appendChild(tbldq)
        tblr.appendChild(tbldb1)
        tblr.appendChild(tbldb2)
        tbl.appendChild(tblr)



    })
    total = total.toFixed(2)
    document.getElementById('total').innerText = `Total amount to be Paid = Rs. ${total}`
    document.querySelectorAll('table button').forEach(e => e.addEventListener('click', () => update(e)))
}

let update = (e) => {
    cartItem = JSON.parse(sessionStorage.getItem('cartItm'))

    let index = e.getAttribute('val').slice(0, 1) * 1
    let operation = e.getAttribute('val').slice(1)

    if (operation == '+')
        cartItem[index].quantity += 1;
    else
        cartItem[index].quantity -= 1;


    if (cartItem[index].quantity == 0) cartItem.splice(index, 1)


    sessionStorage.setItem('cartItm', JSON.stringify(cartItem))



    cart();
}


let submit=()=>{
    document.getElementById('confirm').disabled=true
    document.getElementById('submit-details').style.display="contents"
}