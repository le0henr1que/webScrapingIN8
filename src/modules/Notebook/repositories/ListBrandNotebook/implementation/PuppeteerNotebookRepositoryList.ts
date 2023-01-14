import { Brand } from "../../../entities/brand";
import { IBrandRepository } from "../IBrandList";
import puppeteer from 'puppeteer';

export class PuppeteerBrandRepositoryList implements IBrandRepository{
    async ListBrandNotebook(): Promise<Brand> {

        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
      
        await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
        
        var brands:any = [];



        const description = await page.$$eval('.description', el => el.map(title => title.textContent));
  

        description.map((item) => {
            var brand = item?.split(" ")[0];
            !brands.includes(brand) && brands.push(brand)
        })
    

        await browser.close();


        return brands;

    }
}