// TODO: need false data from `lpq` and `lpstat` to create tests from travis ci

var Printer = require('../printer.js');

describe('get list of installed printers', function() {
  var list = Printer.list();

  it('should return a list of printers name', function() {
    expect(list.constructor).toBe(Array);
  });

  it('should verify printer existance', function() {
    expect(Printer.match('fakePrinterName')).toBe(false);
  });
});
