const addItemToCart = () => {
    const selectedQty = document.getElementById("a5-bun-quantity");
    console.log(selectedQty.options[selectedQty.selectedIndex].text)

    const selectedGlaze = document.getElementById("a5-bun-glaze");
    console.log(selectedGlaze.options[selectedGlaze.selectedIndex].text)

    const selectedItem = {
        "qty": selectedQty.options[selectedQty.selectedIndex].text,
        "glaze": selectedGlaze.options[selectedGlaze.selectedIndex].text
    }

    window.localStorage.setItem('item', JSON.stringify(selectedItem));

    console.log(JSON.parse(window.localStorage.getItem('item')))
}