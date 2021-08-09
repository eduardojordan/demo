
import { danger } from "danger";


// CAMBIOS EN ARCHIVO SWIFT  ***************************
const docsSwift = danger.git.fileMatch("**/*.swift")
if (docsSwift.edited) {
 message("MESSAGE !!!Se han realizado cambios en archivo .swift")
 } 

//CAMBIOS DE VERSION  ***************************
const versionCheck = danger.git.fileMatch("**/*.pbxproj")
if (versionCheck.edited) {
  warn("WARNING !!!Se han realizado cambios de Version del proyecto")
}

// CAMBIOS BSMOPERATIONFACTORY
const operationFactory = danger.git.fileMatch("**/*BSMOperationFactory")
if (operationFactory.edited) {
  fail("Se han realizado cambios en el archivo BSMOperationFactory")
 } 

// CAMBIOS BSMOPERATIONFACTORY
const viewChek = danger.git.fileMatch("**/*ViewController")
if (viewChek.edited) {
  fail("Se han realizado cambios en el archivo ViewController")
 } 

//CAMBIOS DE LIBRERIA  ***************************
const packageChanged = danger.git.modified_files.includes('Carthage');
if (packageChanged.edited) {
   fail(" FAIL !!! Se han realizado cambios a nivel de .Carthage")
}

