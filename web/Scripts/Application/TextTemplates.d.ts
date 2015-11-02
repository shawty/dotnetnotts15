//workaround for typescript's lack of support for requirejs text template notation
//remember that a reference to the import variable has to be found in the class, otherwise typescript ignores the import
declare module "text!application/components/buttons.html" {
  var text: string;
  export = text;
} 
 
declare module "text!application/components/buttonOneReciever.html" {
  var text: string;
  export = text;
} 

declare module "text!application/components/buttonTwoReciever.html" {
  var text: string;
  export = text;
} 

declare module "text!application/components/tableViewer.html" {
  var text: string;
  export = text;
} 
 