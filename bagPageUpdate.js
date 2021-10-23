const populateBagItems = () => {
    const bagContent = JSON.parse(window.localStorage.getItem('bagContent'))

    const bagContentEl = document.getElementById("a6-bag-content")

    if (bagContent) {
        bagContent.forEach((item) => {
            const selectedItemParentDivEl = document.createElement("div");
            selectedItemParentDivEl.classList.add("bun-selections")               // Create a <li> node

            const selectedItemTitleEl = document.createElement("h4");
            selectedItemTitleEl.classList.add("bun-name")
            selectedItemTitleEl.innerHTML = item.type;

            const selectedItemDetailsEl = document.createElement("p");
            selectedItemDetailsEl.classList.add("bun-extra-info")
            selectedItemDetailsEl.innerHTML = 'Quantity: ' + item.qty + '• Glaze: ' + item.glaze

            const individualBunDetailsEl = document.createElement("div");
            individualBunDetailsEl.classList.add("individual-bun-details");
            individualBunDetailsEl.appendChild(selectedItemTitleEl);
            individualBunDetailsEl.appendChild(selectedItemDetailsEl);

            const selectedItemPriceBreakup = document.createElement("div");
            selectedItemPriceBreakup.classList.add("bun-price")
            selectedItemPriceBreakup.innerHTML = '4 x 3';

            selectedItemParentDivEl.appendChild(individualBunDetailsEl);
            selectedItemParentDivEl.appendChild(selectedItemPriceBreakup);

            bagContentEl.appendChild(selectedItemParentDivEl)
        })
    }
    else {
        const noItemsAddedMessageEl = document.createElement("p");
        noItemsAddedMessageEl.innerHTML = "Nothing added yet!"
        bagContentEl.appendChild(noItemsAddedMessageEl)
    }
}