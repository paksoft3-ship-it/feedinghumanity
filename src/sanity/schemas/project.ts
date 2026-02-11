import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Emergency", value: "emergency" },
          { title: "Community", value: "community" },
          { title: "Water", value: "water" },
          { title: "Education", value: "education" },
          { title: "Sustainability", value: "sustainability" },
          { title: "Food", value: "food" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          { title: "Global", value: "global" },
          { title: "Middle East", value: "middle-east" },
          { title: "Africa", value: "africa" },
          { title: "Asia", value: "asia" },
          { title: "Europe", value: "europe" },
          { title: "Americas", value: "americas" },
        ],
      },
    }),
    defineField({
      name: "goal",
      title: "Funding Goal (£)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "raised",
      title: "Amount Raised (£)",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "donors",
      title: "Number of Donors",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "isUrgent",
      title: "Urgent/Emergency",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Completed", value: "completed" },
          { title: "Paused", value: "paused" },
        ],
      },
      initialValue: "active",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "mainImage",
    },
    prepare(selection) {
      const { category } = selection;
      return { ...selection, subtitle: category };
    },
  },
});
