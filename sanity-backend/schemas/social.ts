import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'social',
    title: 'Social',
    type: 'document',
    fields: [
        defineField({
            name: "title",
            title: "Title",
            description: "Title of the social",
            type: "string",
        }),
        defineField({
            name: "url",
            title: "Url",
            type: "url",
        }),
    ],
})
