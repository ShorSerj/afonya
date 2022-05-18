import hardData from './data.json' assert { type: "json" } 
 export function getData(data) {
    // let response = await fetch(`https://www.afonya-spb.ru/local/templates/.default/components/afonya/catalog.section.list.seo/.default/getmenujson.php?id=${data}`);

    // if (response.ok) { 
    //   let json = await response.json();
    // } else {
    //   alert("Ошибка HTTP: " + response.status);
    // }
    return hardData;
}


