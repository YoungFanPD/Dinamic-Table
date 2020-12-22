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
        <td><input id="brand-box" class="form-control input-sm" type="text"  readonly value="${car.brand}"></td>
        <td><input id="model-box" class="form-control input-sm" type="text"  readonly value="${car.model}"></td>
        <td><input class="form-control input-sm" type="text"  readonly value="${car.color}"></td>
        <td><input class="form-control input-sm" type="text"  readonly value="${car.year}"></td>
        <td><input class="form-control input-sm" type="text"  readonly value="${car.price}"></td>
        <td>
        <button onclick="deleteCar('${car.model}')" class="btn btn-danger">
        Update
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

function updateCar(model) {
    let car = cars.find((car) => car.model == model);
    console.log(car.model);
    printCars();
}

function searchCar() {
    document.getElementById("search").onkeyup = function() {
        var res = this.value.toLowerCase();
        document.querySelectorAll('table tbody tr').forEach(function(e) {
            var coincidence = false;
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