if('serviceWorker' in navigator){
    navigator.serviceWorker.register("pwabuilder-sw/pwabuilder-sw.js")
    .then(()=>console.log("Зарегистрировали"))
    .catch(()=>console.log("Получилась ошибка"));
}