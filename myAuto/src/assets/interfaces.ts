export interface Admin {
    login: string,
    password: string

}
export interface Reserv {
    pib: string,
    birthsday: string,
    email: string,
    phone: string,
    startPlace: string,
    endPlace: string,
    dateStart: string,
    dateEnd: string

}
export interface Car {
    _id: string,
    city: string,
    mark: string,
    carcase: string,
    engineCapacity: string,
    fuelType: string,
    transmissionType: string,
    price: string,
    priceZ: string,
    imageSrc: string,
    costFuel: string,
    class: string,
    status: string
}
