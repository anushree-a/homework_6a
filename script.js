const addItemToCart = () => {
    const selectedQty = document.getElementById("a5-bun-quantity");
    const selectedGlaze = document.getElementById("a5-bun-glaze");

    const selectedItem = {
        "type": JSON.parse(window.localStorage.getItem("currentPageDetails")).name,
        "qty": selectedQty.options[selectedQty.selectedIndex].text,
        "glaze": selectedGlaze.options[selectedGlaze.selectedIndex].text
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

updateBagCount(JSON.parse(window.localStorage.getItem('bagContent')).length)