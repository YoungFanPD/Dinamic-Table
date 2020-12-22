const cars = [{
        brand: 'Nissan Tsuru',
        model: '2011yh',
        color: '#hh5432',
        year: '2011',
        price: 10000,
    },
    {
        brand: 'Chevrolet Gli',
        model: '2001gt',
        color: '#hh5432',
        year: '2001',
        price: 100000,
    },
    {
        brand: 'Chevrolet Gli',
        model: '2001gt',
        color: '#hh5432',
        year: '2001',
        price: 100000,
    },
    {
        brand: 'Chevrolet Gli',
        model: '2001gt',
        color: '#hh5432',
        year: '2001',
        price: 100000,
    },
];

function printCars() {
    const container = document.getElementById('container-cars');
    let html = '';
    let tableActive = "table-active";
    cars.forEach((car) => {
        if (cars.length % 2 === 1) {
            tableActive = "table-success";
        } else {
            tableActive = "table-danger";
        }
        html += `<tr class="${tableActive}">
        <td><input id="brand-box-${car.model}" class="form-control input-sm" type="text"  readonly value="${car.brand}"></td>
        <td><input id="model-box-${car.model}" class="form-control input-sm" type="text"  readonly value="${car.model}"></td>
        <td><input id="color-box-${car.model}" class="form-control input-sm" type="text"  readonly value="${car.color}"></td>
        <td><input id="year-box-${car.model}" class="form-control input-sm" type="text"  readonly value="${car.year}"></td>
        <td><input id="price-box-${car.model}" class="form-control input-sm" type="text"  readonly value="${car.price}"></td>
        <td>
                        <button onclick="editRow(getRow('${car.model}'))" id = "btn-update-${car.model}" class="btn btn-primary">
                            Update
                        </button>
                        <button onclick="updateCar('${car.model}')" id = "btn-save-${car.model}" class="btn btn-primary hidden">
                            Save
                        </button>
                        <button onclick="deleteCar('${car.model}')" class="btn btn-danger">
                            Eliminar
                        </button>
                    </td>
                </tr>`;
    });
    container.innerHTML = html;
}

function deleteCar(model) {
    const index = cars.findIndex((car) => car.model == model);
    cars.splice(index, 1);
    printCars();
}

function getRow(model) {
    let row = [];
    row[0] = document.getElementById("brand-box-" + model);
    row[1] = document.getElementById("model-box-" + model);
    row[2] = document.getElementById("color-box-" + model);
    row[3] = document.getElementById("year-box-" + model);
    row[4] = document.getElementById("price-box-" + model);
    document.getElementById("btn-update-" + model).style.display = "none";
    document.getElementById("btn-save-" + model).style.display = "block";
    return row;
}

function editRow(row) {
    row.forEach((box) => box.removeAttribute("readonly"));
}
/**function editRow(model) {
    let brand = document.getElementById("brand-box-" + model);
    let modelo = document.getElementById("model-box-" + model);
    let color = document.getElementById("color-box-" + model);
    let year = document.getElementById("year-box-" + model);
    let price = document.getElementById("price-box-" + model);
    document.getElementById("btn-update-" + model).style.display = "none";
    document.getElementById("btn-save-" + model).style.display = "block";
    brand.removeAttribute("readonly");
    modelo.removeAttribute("readonly");
    color.removeAttribute("readonly");
    year.removeAttribute("readonly");
    price.removeAttribute("readonly");

} */
function updateCar(model) {
    const row = getRow(model);
    cars.forEach((car) => {
        if (car.model == model) {
            car.brand = row[0].value;
            car.model = row[1].value;
            car.color = row[2].value;
            car.year = row[3].value;
            car.price = row[4].value;
        };
    });
    printCars();
}

function searchCar() {
    document.getElementById("search").onkeyup = function() {
        let res = this.value.toLowerCase();
        document.querySelectorAll('table tbody tr').forEach(function(e) {
            let coincidence = false;
            e.querySelectorAll('td').forEach(function(e) {
                if (e.innerHTML.toLowerCase().indexOf(res) >= 0) {
                    coincidence = true;
                }
            });
            if (coincidence) {
                e.style.display = '';
            } else {
                e.style.display = 'none';
            }
        });
    }
}

function addCar() {
    const car = new Object();
    car.brand = document.getElementById('brand').value;
    car.model = document.getElementById('model').value;
    car.year = document.getElementById('year').value;
    car.color = document.getElementById('color').value;
    car.price = document.getElementById('price').value;
    cars.push(car);
    printCars();
    document.getElementById('form-car').reset();
}
searchCar();
printCars();