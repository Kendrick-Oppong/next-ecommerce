export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Name of Products'},
    {name: 'images', type: 'array', of: [{type: 'image'}], title: 'Product Images'},
    {name: 'description', type: 'text', title: 'Description of product'},
    {name: 'slug', type: 'slug', title: 'Product slug', options: {source: 'name'}},
    {name: 'price', type: 'number', title: 'Price'},
    {name: 'category', title: 'Product category', type: 'reference', to: [{type:"category"}]},
  ],
}
