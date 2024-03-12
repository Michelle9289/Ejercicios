let bub = [3, 6, 12, 5, 100, 1];

function bubble(items) {
    let length = items.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < (length - i - 1); j++) {
        if (items[j] > items[j + 1]) {
          let tmp = items[j];
          items[j] = items[j + 1];
          items[j + 1] = tmp;
        }
      }
    }
  }

  function result(){
    bubble(bub);
  document.getElementById("arr1").innerHTML = `El arreglo ordenado es: ${bub}`;
  }