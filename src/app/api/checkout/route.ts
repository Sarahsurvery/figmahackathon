import { NextResponse } from "next/server"
const stripe = require('stripe')(process.env.STRIPE_SECRETE_KEY);

export const POST = async (request:any) => {

    const { products } = request.json();
    let activeProducts = await stripe.products.list({active:true})
    try{
        

    for(const product of products){
      const matchedProducts =activeProducts?.find((stripeProduct:any)=>
        stripeProduct.name.lowercase() === products.name.tolowerCase()
    )
    if(matchedProducts == undefined){
        const prod = await stripe.products.create({
            name: product.name,
            default_price_data:{
                currency: 'usd',
                unit_amount: product.price*100
            }
        })
    }  
    }
    
    }catch (error){
        console.log('Error in creating a new product', error);
        throw error;
    }
    activeProducts = await stripe.products.list({active:true})
    let stripeProducts = [
        // {
        //     price: '{{PRICE_ID}}',
        //     quantity: 1,
        // },
    ]
    for(const product of products){
        const stripeProduct =activeProducts?.find((stripeProduct:any)=>
            stripeProduct.name.lowercase() === products.name.tolowerCase()
        );
        if(stripeProducts){
        stripeProducts.push({
            price: stripeProduct?.default_price,
            quantity: product.quantity,
            
        },)
    }
}

    const session = await stripe.checkout.sessions.create({
        line_items: stripeProducts,
     mode: 'payment',
     success_url: ``, 
     cancel_url: ``, 
    });
// }
// export const GET = () => {
    return NextResponse.json({
        data:"hello, world"
    })
 }