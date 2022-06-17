function parseCount (value) {
    const result = Number.parseInt(value, 10);
    if (Number.isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount (value) {
    try {
        const result = parseCount(value);
        return result;
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor (a, b, c) {
        if (a > b + c || b > a + c || c > a + b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
       this.a = a;
       this.b = b;
       this.c = c;
    }
    getPerimeter () {
        return this.a + this.b + this.c;
    }
    getArea () {
        const semiPerimeter = this.getPerimeter() / 2;
        return +Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c)).toFixed(3);
    }
}
function getTriangle (a, b, c) {
    try {
        return new Triangle (a, b, c)
    } catch {
        return {
            getArea () {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter () {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}