window.addEventListener("load", solve);

function solve() {
  const makeElement = document.getElementById('make');
  const modelElement = document.getElementById('model');
  const yearElement = document.getElementById('year');
  const fuelElement = document.getElementById('fuel');  
  const originalCostElement = document.getElementById('original-cost');
  const sellPriceElement = document.getElementById('selling-price');
  const publishButtonElement = document.getElementById('publish');
  const tableBodyElement = document.getElementById('table-body');

  publishButtonElement.addEventListener('click', (e) => {
    e.preventDefault();

    let make = makeElement.value;
    let model = modelElement.value;
    let year = yearElement.value;
    let fuel = fuelElement.value;
    let originalCost = originalCostElement.value;
    let sellPrice = sellPriceElement.value;

    if (!make || !model || !year || !fuel || !originalCost || !sellPrice ) {
      return;
    }

    let tableRowEl = document.createElement('tr');
    tableRowEl.classList.add('row');

    let makeRow = document.createElement('td');
    makeRow.textContent = make;

    let modelRow = document.createElement('td');
    modelRow.textContent = model;

    let yearRow = document.createElement('td');
    yearRow.textContent = year;

    let fuelRow = document.createElement('td');
    fuelRow.textContent = fuel;

    let originPriceRow = document.createElement('td');
    originPriceRow.textContent = originalCost;

    let sellPriceRow = document.createElement('td');
    sellPriceRow.textContent = sellPrice;

    tableRowEl.appendChild(makeRow);
    tableRowEl.appendChild(modelRow);
    tableRowEl.appendChild(yearRow);
    tableRowEl.appendChild(fuelRow);
    tableRowEl.appendChild(originPriceRow);
    tableRowEl.appendChild(sellPriceRow);


    makeElement.value = '';
    modelElement.value = '';
    yearElement.value = '';
    originalCostElement.value = '';
    sellPriceElement.value = '';

    let editButtonEl = document.createElement('button');
    editButtonEl.classList.add('action-btn');
    editButtonEl.classList.add('edit');
    editButtonEl.textContent = 'Edit';


    let sellButtonEl = document.createElement('button');
    sellButtonEl.classList.add('action-btn');
    sellButtonEl.classList.add('sell');
    sellButtonEl.textContent = 'Sell';


    tableRowEl.appendChild(editButtonEl);
    tableRowEl.appendChild(sellButtonEl);
    tableBodyElement.appendChild(tableRowEl);


    editButtonEl.addEventListener(('click'), (e) => {
      tableBodyElement.removeChild(tableRowEl);

      makeElement.value = make;
      modelElement.value = model;
      yearElement.value = year;
      fuelElement.value = fuel;
      originalCostElement.value = originalCost;
      sellPriceElement.value = sellPrice;
    })

    sellButtonEl.addEventListener('click', (e) => {
      tableBodyElement.removeChild(tableRowEl);

      let liSell = document.createElement('li');
      liSell.classList.add('each-list');
      let soldCarModel = document.createElement('span');
      let soldCarYear = document.createElement('span');
      let soldCarprofit = document.createElement('span');

      soldCarModel.textContent = `${make} ${model}`;
      soldCarYear.textContent = year;
      profit.textContent = sellPrice - originalCost;
      let currentProfit = soldCarprofit.textContent;

      liSell.appendChild(soldCarModel);
      liSell.appendChild(soldCarYear);
      liSell.appendChild(soldCarprofitprofit);

      let carList = document.getElementById('cars-list');
      carList.appendChild(liSell);

      let totalSumEl = document.getElementById('profit');

      let newTotal = Number(totalSumEl.textContent) + Number(currentProfit);

      totalSumEl.textContent = newTotal.toFixed(2);

    })
  })
}
