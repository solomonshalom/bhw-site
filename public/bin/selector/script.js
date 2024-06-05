const partsLimit = 8
var fetchedParts;
async function fetchParts() {
    const response = await fetch('https://hackclub.com/api/bin/wokwi/parts/');
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    data = await response.json();

    data = removeItemByAttribute(data, "type", "Microprocessor");
    console.log(data)
    return data
}
function removeItemByAttribute(arr, attr, value) {
    return arr.filter(item => item[attr] !== value);
}
/*
async function preloadImage(item) {
    let response = await fetch(item.imageUrl);
    let blob = response.blob();
    return blob
}
async function saveImageToCache(item) {
    const image = await preloadImage(item)
    const blob = URL.createObjectURL(image)
    localStorage.setItem(item.wokwiName, blob);
    addPartToPage(item)
}*/
function getSelectedItems() {
    return document.querySelectorAll(".selected")
}
function recalculateSelected() {
    let numSelectedItems = getSelectedItems().length
    let selections = []
    items = document.querySelectorAll(".selector-item")
    document.querySelector(".selector-number").innerText = `${partsLimit - numSelectedItems} choices remaining.`
    if (partsLimit - numSelectedItems == 0) {
        items.forEach(item => {
            let isSelected = item.className.includes("selected")
            if (!isSelected) {
                item.classList.add("disabled")
            }
        })
        document.querySelector(".selector-number").classList.add("disabled")
    } else {
        items.forEach(item => {
            let isDisabled = item.className.includes("disabled")
            if (isDisabled) {
                item.classList.remove("disabled")
            }
        })
        document.querySelector(".selector-number").classList.remove("disabled")
    }
    getSelectedItems().forEach(item => {
        selections.push(item.getAttribute("part_name"))
    })
    return selections
}

function addPartToPage(part) {
    /*
    <div part_name="mic" class="selector-item">
        <img class="selector-image" src="../parts/mic.png">
        <div class="selector-item-name">Mic</div>
        <div class="selector-item-description">Records sounds</div>
    </div>
    */
    let selectorItem = document.createElement("div")
    selectorItem.setAttribute("part_name", part.wokwiName)
    selectorItem.className = "selector-item"

    let selectorImage = document.createElement("img")
    selectorImage.src = part.imageUrl
    selectorImage.className = "selector-image"
    selectorItem.appendChild(selectorImage)

    let selectorItemName = document.createElement("div")
    selectorItemName.innerText = part.name
    selectorItemName.className = "selector-item-name"
    selectorItem.appendChild(selectorItemName)

    let selectorItemDesc = document.createElement("div")
    selectorItemDesc.innerText = part.flavorText
    selectorItemDesc.className = "selector-item-description"
    selectorItem.appendChild(selectorItemDesc)

    document.getElementsByClassName("selector-main")[0].appendChild(selectorItem)

    selectorItem.addEventListener("click", () => {
        let isSelected = selectorItem.className.includes("selected")
        if (isSelected) {
            selectorItem.classList.remove("selected")
        } else {
            if (getSelectedItems().length < partsLimit) {
                selectorItem.classList.add("selected")
            }
        }
        recalculateSelected();
    })
}

window.addEventListener("load", async (e) => {
    recalculateSelected();
    const fetchedParts = await partsData()
    fetchedParts.forEach(part => {
        if (!(part.imageUrl == undefined)) {
            addPartToPage(part)
        }
    })

    document.querySelector(".selector-continue").onclick = () => {
        let selectedItems = getSelectedItems()
        let selectedItemsArray = []
        selectedItems.forEach(item => {
            selectedItemsArray.push(item.getAttribute("part_name"))
        })
        const partsList = encodeURI(recalculateSelected().sort().join("|"))
        window.location.href = `/api/bin/wokwi/new/${partsList}`
    }
})