class SalesManager {
    constructor() {
        this.salesData = JSON.parse(localStorage.getItem('salesData')) || [];
    }

    addSale(sale) {
        this.salesData.push(sale);
        this.saveData();
    }

    removeSale(saleId) {
        this.salesData = this.salesData.filter(sale => sale.id !== saleId);
        this.saveData();
    }

    filterSales(criteria) {
        return this.salesData.filter(sale => sale.category === criteria);
    }

    sortSales(key, order = 'asc') {
        return this.salesData.sort((a, b) => {
            if (order === 'asc') return a[key] > b[key] ? 1 : -1;
            else return a[key] < b[key] ? 1 : -1;
        });
    }

    saveData() {
        localStorage.setItem('salesData', JSON.stringify(this.salesData));
    }
}

// Example usage:
// const manager = new SalesManager();
// manager.addSale({ id: 1, category: 'Electronics', amount: 100 });
// manager.removeSale(1);
// const filtered = manager.filterSales('Electronics');
// const sorted = manager.sortSales('amount', 'desc');
