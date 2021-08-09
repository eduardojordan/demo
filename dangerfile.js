
import { danger } from "danger";



CAMBIOS EN CUALQUIER ARCHIVO SWIFT  ***************************
const docsSwift = danger.git.fileMatch("**/*.swift")
if (docsSwift.edited) {
 fail("FAIL !!! Se han realizado cambios en el proyecto archivo .swift")
// process.exit(1);
// return 1
// return process.exit(1);
 } 

// CAMBIOS DE VERSION  ***************************
// const versionCheck = danger.git.fileMatch("**/*.xcworkspacedata")
// if (versionCheck.edited) {
//    message(" MESSAGE  !!! Se han realizado cambios a nivel de .xcworkspacedata")
// }

// CAMBIOS DE LIBRERIA  ***************************
// const carthageCheck = danger.git.fileMatch("**/*./Carthage")
// if (carthageCheck.edited) {
//    warn(" WARNING !!! Se han realizado cambios a nivel de .Carthage")
// }




// const libraryCheck = danger.git.modified_files("./Carthage")
// // CAMBIOS DE LIBRERIA  ***************************
// // const libraryCheck = danger.git.contains("/Users/ejordanm/Desktop/Demo/Carthage ") 
// if (libraryCheck.edited) {
//         fail(" ERROR LIBRERIA !!! CAMBIO EN LIBRERIAS DE APP ")
//     }

// const lockfileChanged = danger.git.modified_files.includes('Carthage')
// if (lockfileChanged.edited) {
//         fail(" ERROR LIBRERIA !!! CAMBIO EN LIBRERIAS DE APP ")
//     }




// TIPOS DE MENSAJES
// fail("FAIL EXAMPLE !!!")
// message("MESSAGE EXAMPLE !!!")
// warn("WARNING EXAMPLE !!!")
// markdown("MARKDOWN EXAMPLE !!!")




// const added_swift_library_files = git.added_files.grep(/Sources.*\.swift/).empty?
// const deleted_swift_library_files = git.deleted_files.grep(/Sources.*\.swift/).empty?
// const modified_carthage_xcode_project = !(git.deleted_files.grep(/Demo\.xcodeproj/).empty?)
// if (added_swift_library_files || deleted_swift_library_files) && modified_carthage_xcode_project{
//   fail("Added or removed library files require the Carthage Xcode project to be updated.")
// }












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

