import * as contentful from "contentful";
import {fetchProductStart} from  './../actions/productActions'
/* export default class client {
  getClient = async () => {
    const client =  contentful.createClient({
      accessToken: '9DIqdZImvjPN564aXQRITV9DwdvqePfrnVpFnkYNZtI',
      space: '2dppge887wl8',
      })
     
  return client;
};
}
 */

export const handleFetchProduct = () => {
   
        const client =  contentful.createClient({
          accessToken: '9DIqdZImvjPN564aXQRITV9DwdvqePfrnVpFnkYNZtI',
          space: '2dppge887wl8',
          })
          
    return new Promise(() => {
        client.getEntries({content_type:'Product'} )
        .then(function (entries) {
           entries.items.map(function (entry) {
            console.log(entry.fields)
        fetchProductStart({
                    products:{
                        name:entry.fields.name,
                        tagName:entry.fields.tagName,
                        price:entry.fields.price,
                        productImage:entry.fields.productImage,
                        numbers:entry.fields.numbers,
                        inCart:entry.fields.inCart
                
                    }
                    
                    })
       
                             
            })
            

        })
        .catch(err => {
            console.log(err);
        })
    });

}