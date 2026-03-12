class DateUtils {
    static formatDate(date) {
        return date.toISOString().slice(0, 19).replace('T', ' ');
    }
    
    static parseDate(dateString) {
        return new Date(dateString);
    }
}

class ValidationUtils {
    static isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
    
    static isNotEmpty(value) {
        return value !== null && value.trim() !== '';
    }
}

class ExportUtils {
    static exportToCSV(data, filename) {
        const csvContent = data.map(e => e.join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

module.exports = { DateUtils, ValidationUtils, ExportUtils };