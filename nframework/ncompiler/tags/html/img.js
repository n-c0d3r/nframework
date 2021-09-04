var htmlImport=require('./import');

var tag=require('./autoClosehtmlTag');

tag.htmlTagName='img';

tag.isAutoClose=true;

const { v4: uuidv4 } = require('uuid');

module.exports=tag;