const addItemToCart = () => {
    const selectedQty = document.getElementById("a5-bun-quantity");
    const selectedGlaze = document.getElementById("a5-bun-glaze");

    const selectedItem = {
        "type": JSON.parse(window.localStorage.getItem("currentPageDetails")).name,
        "qtyString": selectedQty.options[selectedQty.selectedIndex].text,
        "glaze": selectedGlaze.options[selectedGlaze.selectedIndex].text,
        "price": JSON.parse(window.localStorage.getItem("currentPageDetails")).price,
        "image": JSON.parse(window.localStorage.getItem("currentPageDetails")).imagePath,
        "qtyValue": document.getElementById("a5-bun-quantity").value
    }

    const currentBagContent = JSON.parse(window.localStorage.getItem('bagContent')) || [];
    const newBagContent = [...currentBagContent, selectedItem]
    window.localStorage.setItem('bagContent', JSON.stringify(newBagContent));

    updateBagCount(JSON.parse(window.localStorage.getItem('bagContent')).length)
}

const updateBagCount = (count) => {
    const bagCountEl = document.getElementById("bag-count");
    bagCountEl.innerHTML = " (" + count + ")";
}

updateBagCount(JSON.parse(window.localStorage.getItem('bagContent'))?.length || 0)