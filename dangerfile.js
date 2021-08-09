
import { danger } from "danger"

const docsSwift = danger.git.fileMatch("**/*.swift")

// CAMBIOS EN CUALQUIER ARCHIVO SWIFT  ***************************
if (docsSwift.edited) {
 fail("FAIL !!! Se han realizado cambios en el proyecto archivo .swift")
// process.exit(1);
// return 1
// return process.exit(1);
 } 

// CAMBIOS DE VERSION  ***************************
const versionCheck = danger.git.fileMatch("**/*.xcworkspacedata")
if (versionCheck.edited) {
   message(" MESSAGE  !!! Se han realizado cambios a nivel de .xcworkspacedata")
}

// CAMBIOS DE LIBRERIA  ***************************
// const carthageCheck = danger.git.fileMatch("**/*./Carthage")
// if (carthageCheck.edited) {
//    warn(" WARNING !!! Se han realizado cambios a nivel de .Carthage")
// }

// // Added (or removed) library files need to be added (or removed) from the
// // Xcode project to avoid breaking things for our Carthage/manual framework.
// const addedSwiftLibraryFiles = danger.git.createdFiles.contains { $0.fileType == .swift && $0.hasPrefix("Sources") }
// const deletedSwiftLibraryFiles = danger.git.deletedFiles.contains { $0.fileType == .swift && $0.hasPrefix("Sources") }
// const modifiedCarthageXcodeProject = danger.git.modifiedFiles.contains { $0.contains("PruebasDanger.xcodeproj") }
// if (addedSwiftLibraryFiles || deletedSwiftLibraryFiles) && !modifiedCarthageXcodeProject {
//     fail("Added or removed library files require the Carthage Xcode project to be updated. See the Readme")
// }

// const carthageCheck2 = danger.git.modified_files.includes("/Carthage")


// // CAMBIOS DE LIBRERIA  ***************************
const libraryCheck = danger.git.fileMatch('./Cartaghe') 
if (libraryCheck.edited) {
        fail(" ERROR !!! CAMBIO EN LIBRERIAS DE APP ")
    }



// TIPOS DE MENSAJES
// fail("FAIL EXAMPLE !!!")
// message("MESSAGE EXAMPLE !!!")
// warn("WARNING EXAMPLE !!!")
// markdown("MARKDOWN EXAMPLE !!!")














// const libraryCheck = danger.git.fileMatch("**/*.xcworkspacedata"){
//    warn(" WARNING !!! Se han realizado cambios a nivel de .xcproject")
// }

// // CAMBIOS DE LIBRERIA  ***************************
// if danger.git.modifiedFiles.contains(where: { $0.contains("Carthage")}) {
//         fail(" ERROR !!! CAMBIO EN LIBRERIAS DE APP ")
//     }


// // CAMBIOS BSMOPERATIONFACTORY
// const operationFactory = danger.git.fileMatch("**/*BSMOperationFactory")
// if (operationFactory.edited) {
//   fail("Se han realizado cambios en el archivo BSMOperationFactory")

//  } 









// console.log(valorRetorno)
// ACA DEBERIA EXPORTAR ESTE VALOR PARA PRE_COMMIT







//process.exit(1);
// console.log($?)

//exec("tag",(error, stdout, stderr) => {console.log(stdout);console.log(stderr);});
 // result = 1
// console.log(1)
// process.stdout.write(1);


  // exec("echo ANTES DE $valor",
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });

  // exec("declare -r valor = 2"),
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });

  // exec("echo DESPUES DE valor ${!valor}",
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });


 

  // exec('echo ANTES DE $?',
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });


  // exec('var=1 ',
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });

  // exec('echo DESPUES DE $valor',
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });


//  if (result = 0) {
//   console.log("DA 0 SIGUE COMMIT NORMAL")
// } else {
//    console.log("DA 1 -> LANZAR ALERTA DE COMMIT")




 // exec('sh .git/hooks/pre-commit',
 //        (error, stdout, stderr) => {
 //            console.log(stdout);
 //            console.log(stderr);
 //            if (error !== null) {
 //                console.log(`exec error: ${error}`);
 //            }
 //        });

// }

// process.exit(1);
// return 1
// return process.exit(1);
//exec("so [-tag]",(error, stdout, stderr) => {console.log(stdout);console.log(stderr);});




// const version = danger.git.fileMatch("**/*.xcworkspacedata")
// if (version.edited) {
//   //message("Se han realizado cambios en el proyecto archivo .swift")
//    warn("Se han realizado cambios en la version del proyecto2")
//    process.exit(1);
// } 

