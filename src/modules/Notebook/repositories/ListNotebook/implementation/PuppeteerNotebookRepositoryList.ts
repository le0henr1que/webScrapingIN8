import { Notebook } from "../../../entities/Notebook";
import { INotebookRepository } from "..//INotebookList";
import puppeteer from 'puppeteer';

export class PuppeteerNotebookRepositoryList implements INotebookRepository{
    async ListNotebook(): Promise<Notebook> {

        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
      
        await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
      
        // Type into search box.
        const images = await page.$$eval('.thumbnail img', el => el.map(link => link.src));
        // console.log(images);

        const title = await page.$$eval('.title', el => el.map(title => title.textContent));
        // console.log(title);

        const price = await page.$$eval('.pull-right.price', el => el.map(title => title.textContent));
        // console.log(price);

        const description = await page.$$eval('.description', el => el.map(title => title.textContent));
        // console.log(description);
      
        const reviews = await page.$$eval('div.ratings p.pull-right', el => el.map(title => title.textContent));
        // console.log(reviews);
        
        const href = await page.$$eval('a.title', el => el.map(href => href.href));
        // console.log(href)

        href.map( async (item) => {
            
  
            await page.goto(item)
            await page.waitForSelector('.btn-primary')
  
    
            const amountMemory = await page.$$eval('.btn-primary', el => el.map(title => title.textContent));
            console.log(amountMemory);

        })

        // await page.type('.devsite-search-field', 'Headless Chrome');
      
        // // Wait for suggest overlay to appear and click "show all results".
        // const allResultsSelector = '.devsite-suggest-all-results';
        // await page.waitForSelector(allResultsSelector);
        // await page.click(allResultsSelector);
      
        // // Wait for the results page to load and display the results.
        // const resultsSelector = '.gsc-results .gs-title';
        // await page.waitForSelector(resultsSelector);
      
      
        await browser.close();
            
        const notebook = {
                type:"Teste", 
                price:1212, 
                brand: "Teste", 
                model:"Teste", 
                description:"Teste", 
                memoryType:"Teste", 
                memoryAmount:120, 
                reviews:12, 
                image:"Teste"
            }
        
            return notebook;

    }
}