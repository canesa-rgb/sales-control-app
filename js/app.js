class SalesApp {
    constructor() {
        this.salesData = [];
        this.init();
    }

    init() {
        // Initialization logic for the app
        console.log('SalesApp initialized.');
    }

    addSale(sale) {
        this.salesData.push(sale);
        console.log('Sale added:', sale);
    }

    filterSales(criteria) {
        // Logic to filter sales data based on criteria
        return this.salesData.filter(sale => sale meets criteria);
    }

    sortSales(key) {
        // Logic to sort sales data based on the key
        return this.salesData.sort((a, b) => a[key] - b[key]);
    }

    exportToCSV() {
        // Logic to export sales data to CSV format
        console.log('Exported to CSV:', this.salesData);
    }

    clearData() {
        this.salesData = [];
        console.log('Sales data cleared.');
    }
}

// Initialize the app when this file is loaded
const salesApp = new SalesApp();