class item {
    constructor(public name: string, public price: number) {}
}

class cart {
    protected numero: number;
    protected items: item[] = [];

    constructor(numero: number) {
        this.numero = numero;
    }

    public addItem(item: item): void {
        this.items.push(item);
    }

    public removeItem(item: item): void {
        this.items = this.items.filter((i) => i.name !== item.name);
    }

    public getItems(): item[] {
        return this.items;
    }

    public getTotal(): number {
        return this.items.reduce((acc, i) => acc + i.price, 0);
    }
}

class deliveryCart extends cart {
    private deliveryFee: number;

    constructor(numero: number, deliveryFee: number) {
        super(numero);
        this.deliveryFee = deliveryFee;
    }

    public getTotal(): number {
        return super.getTotal() + this.deliveryFee;
    }
}

let item1 = new item('item1', 10);
let item2 = new item('item2', 20);
let item3 = new item('item3', 30);

let cart1 = new cart(1);
cart1.addItem(item1);
cart1.addItem(item2);

let deliveryCart1 = new deliveryCart(2, 5);
deliveryCart1.addItem(item1);
deliveryCart1.addItem(item2);
deliveryCart1.addItem(item3);

console.log(cart1.getTotal());
console.log(deliveryCart1.getTotal());

