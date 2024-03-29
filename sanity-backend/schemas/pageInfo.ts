import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'pageInfo',
    title: 'pageInfo',
    type: 'document',
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "heroImage",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: "profilePic",
            title: "Profile Picture",
            type: "image",
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: "phoneNumber",
            title: "Phone Number",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "address",
            title: "Address",
            type: "string",
        }),
        defineField({
            name: "socials",
            title: "Socials",
            type: "array",
            of: [{type: "reference", to: [{type: "social"}]}],
        })
    ],
})
