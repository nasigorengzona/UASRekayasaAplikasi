const express = require('express');
const axios = require('axios');
const app = express();

app.get('/brand/:searchBrand', async(req,res)=>{
   const searchBrand = req.params.searchBrand;
   const response = await axios.get(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand='+searchBrand
   );
   res.send(response.data)
})

app.get('/tags/:searchTags', async(req,res)=>{
   const searchTags = req.params.searchTags;
   const response = await axios.get(
      'http://makeup-api.herokuapp.com/api/v1/products.json?product_tags='+searchTags
   );
   res.send(response.data)
})

app.get('/products/:productType', async(req,res)=>{
   const productType = req.params.productType;
   const response = await axios.get(
      'http://makeup-api.herokuapp.com/api/v1/products.json?product_type='+productType
   );
   res.send(response.data)
})


const server = app.listen(64795, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})