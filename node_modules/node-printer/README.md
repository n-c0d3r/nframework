node-printer
============

[![Code Climate](https://codeclimate.com/github/alepee/node-printer/badges/gpa.svg)](https://codeclimate.com/github/alepee/node-printer)

:warning: **This package must only be used for prototyping**

:rotating_light: **I said this package is not reliable! And MUST NOT be used in production**

It relies on a **CUPS STDOUT text parser** and has not been tested for all version of CUPS! If you are looking for a way to manage and send data to printers take a look at [alepee/node-ipp-interface](https://github.com/alepee/node-ipp-interface) which relies on **[IPP protocol](https://tools.ietf.org/html/rfc2910)** and provide a more constistent way to communicate with a printer. (node-ipp-interface module is a WIP, please feel free to contribute)

Please note that the way I wrote this library as a prototype. It relies on STDOUT from CUPS binaries and is not trustable.

The correct way to manage printers and jobs would be to use IPP protocol defined by RFCs. You can have a look at [alepee/node-ipp-interface](https://github.com/alepee/node-ipp-interface), it is based on it but still isn't finished yet. I can give you some help if needed to complete it.

## Further reading about IPP
- [RFC 2567](https://tools.ietf.org/html/rfc2567) – Design Goals for an Internet Printing Protocol
- [RFC 2568](https://tools.ietf.org/html/rfc2568) – Rationale for the Structure and Model and Protocol for the Internet Printing Protocol
- [RFC 2569](https://tools.ietf.org/html/rfc2569) – Mapping between LPD and IPP Protocols
- [RFC 2910](https://tools.ietf.org/html/rfc2910) – Internet Printing Protocol/1.1: Encoding and Transport
- [RFC 2911](https://tools.ietf.org/html/rfc2911) – Internet Printing Protocol/1.1: Model and Semantics

---

A tool to print document or data. Based on "lp" binary STDOUT.   
Supports complete set of lp options (http://unixhelp.ed.ac.uk/CGI/man-cgi?lp)

Based on armetiz/node-printer-lp and diegoalberto/node-printer-lp-complete.

## Quick Examples

```js
var Printer = require('node-printer');
var options = {
    media: 'Custom.200x600mm',
    n: 3
};

// Get available printers list
Printer.list();

// Create a new Pinter from available devices
var printer = new Printer('EPSON_SX510');

// Print from a buffer, file path or text
var fileBuffer = fs.readFileSync('/path/to/file.ext');
var jobFromBuffer = printer.printBuffer(fileBuffer);

var filePath = 'package.json';
var jobFromFile = printer.printFile(filePath);

var text = 'Print text directly, when needed: e.g. barcode printers'
var jobFromText = printer.printText(text);

// Cancel a job
jobFromFile.cancel();

// Listen events from job
jobFromBuffer.once('sent', function() {
    jobFromBuffer.on('completed', function() {
        console.log('Job ' + jobFromBuffer.identifier + 'has been printed');
        jobFromBuffer.removeAllListeners();
    });
});
```

## Roadmap

- Rewrite option factories
- Remove dependency to underscorejs
- Write more tests
- Find a way to emulate CUPS printers on Travis env
