const onClickOriginalBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Original",
        "description": "Simple, delicious and best eaten when warm. You just can't go wrong with these! Best enjoyed with some butter on the side!",
        "price": 2
    }))
}

const onClickWalnutBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Walnut",
        "description": "A fall favorite and something that’s always selling out, this cinnamon roll is now available all year round on popular demand! Best enjoyed warm with a hot cup of tea.",
        "price": 5.50
    }))
}

const onClickBlackberryBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Blackberry",
        "description": "Sweet, decadent and laden with blueberries, this seasonal variety is worth the hype! People flock to the shop to get these during berry season!",
        "price": 8
    }))
}

const onClickPumpkinSpiceBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Pumpkin Spice",
        "description": "A fall favorite and something that’s always selling out, this cinnamon roll is now available all year round on popular demand! Best enjoyed warm with a hot cup of tea.",
        "price": 4
    }))
}

const onClickGlutenFreeBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Original (Gluten Free)",
        "description": "Similar to our original bun, this one has just the same amount of goodness minus the gluten. Best enjoyed warm with a hot cup of tea.",
        "price": 6
    }))
}

const onClickCaramelBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Caramel Pecan",
        "description": "Rich, creamy and with a hint of pecan nuts, this variety is our speciality. Whether you're hosting a party or just treating yourself - this is to die for!",
        "price": 12
    }))
    const bunDetails = JSON.parse(window.localStorage.getItem("currentPageDetails"))
}

const onLoadAvailablePage = () => {
    const bunDetails = JSON.parse(window.localStorage.getItem("currentPageDetails"))
    document.getElementById("a5-details-title").innerHTML = bunDetails.name;
    document.getElementById("a5-details-oneliner").innerHTML = bunDetails.description;
    document.getElementById("a5-details-bun-detail-value").innerHTML = "$ " + bunDetails.price;
}