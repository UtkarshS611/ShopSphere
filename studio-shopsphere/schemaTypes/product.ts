export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of product'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images of Product',
            of: [{type: 'image'}]
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source: 'name',
            }
        },
        {
            name: 'category',
            title: 'Product category',
            type: 'reference',
            to: [{
                type: 'category'
            }]
        }
    ]
}