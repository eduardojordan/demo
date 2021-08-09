import Danger 
let danger = Danger()


// TEST MESSAGE FROM DANGER ***************************
danger.message("Hello from Danger GITHUB Prueba DangerFile")

// CAMBIOS DE VERSION  ***************************
if danger.git.modifiedFiles.contains(where: { $0.contains(".xcworkspacedata")}) {
        warn(" WARNING !!! Se han realizado cambios a nivel de .xcproject")
}
// CAMBIOS DE LIBRERIA  ***************************
if danger.git.modifiedFiles.contains(where: { $0.contains("Pods")}) {
        warn(" WARNING !!! CAMBIO EN LIBRERIAS DE APP ")
    }


if danger.git.modifiedFiles.contains(where: { $0.contains(".swift")}) {
        warn(" WARNING !!! Se han realizado cambios a nivel de SWIFT")
}
