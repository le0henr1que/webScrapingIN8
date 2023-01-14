import { Notebook } from "../../../entities/Notebook";
import { INotebookRepository } from "..//INotebookList";
import puppeteer from 'puppeteer';

export class PuppeteerNotebookRepositoryList implements INotebookRepository{
    async ListNotebook(brand:string): Promise<Notebook> {

        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
      
        await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
        
        var notebook:any = [];


        const images = await page.$$eval('.thumbnail img', el => el.map(link => link.src));
        // console.log(notebook)
        const description = await page.$$eval('.description', el => el.map(title => title.textContent));
        // console.log(description)

        const title = await page.$$eval('.title', el => el.map(title => title.textContent));
        // console.log(title);

        const price = await page.$$eval('.pull-right.price', el => el.map(title => title.textContent));
        // console.log(price);

        // console.log(description);
      
        const reviews = await page.$$eval('div.ratings p.pull-right', el => el.map(title => title.textContent));
        // console.log(reviews);
        
        const href = await page.$$eval('a.title', el => el.map(href => href.href));
        // console.log(href)

    

        var memoryTypes = ["SSD", "HDD", "HD"];
        var operationalSystem = ["Windows", "Linux", "Windows 10", "Windows 10 Pro", "Windows 10 Home", "Windows 8.1", "Win7 Pro", "Win7"];
        var amountMemory = ["128GB", "32GB", "500GB", "1TB", "750GB"];

        description.map((item, index) => {
            var brand = item?.split(" ")[0];
            var model = item?.split(" ")[1];
            var memoryType = "Não Informado";
            var oSystem = "Não Informado";
            var amountMemorys = "Não Informado";
            
            var priceConvert:any = price[index]?.replaceAll("$", "");
            var reviAmount:any = reviews[index]?.replaceAll(" reviews", "");

        //    console.log(parseFloat(priceConvert))

            memoryTypes.map((memory:any) => {
                if(item?.includes(memory)){
                    memoryType = memory
                }
            })
            operationalSystem.map((operationalSystem:any) => {
                if(item?.includes(operationalSystem)){
                    oSystem = operationalSystem
                }
            })
            amountMemory.map((amountMemory:any) => {
                if(item?.includes(amountMemory)){
                    amountMemorys = amountMemory
                }
            })

            
     

            notebook.push({
                brand:brand, 
                model:model, 
                description:description[index], 
                memoryType:memoryType, 
                operationalSystem:oSystem, 
                reviews:parseInt(reviAmount), 
                price:parseFloat(priceConvert), 
                memoryAmount:amountMemorys, 
                link:{
                    image:images[index],
                    link:href[index]
                },
 
             
            })
       
        })
    

        await browser.close();
            

        notebook = await notebook.filter((item:Notebook) => item.brand == brand);

        notebook = await notebook.sort((itemA: { price: number; }, itemB: { price: number; }) => itemB.price + itemA.price);




        return notebook;

    }
}
