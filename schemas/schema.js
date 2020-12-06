// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: 'Location',
      name: 'location',
      type: 'document',
      fields: [
        { name: 'name', Title: 'Name', type: 'string' },
        { name: 'description', Title: 'Description', type: 'array', of: [{type: 'block'}] },
        { name: 'location', Title: 'Location', type: 'geopoint' },
        { name: 'image', title: 'Image', type: 'image' },
        { name: 'story', Title: 'Story', type: 'array', of: [{type: 'block'}] },
        {
          title: 'Characters',
          name: 'characters',
          type: 'array',
          of: [{
            type: 'reference',
            to: [{type: 'character'}]
          }]
        },
        {
          title: 'Labels',
          name: 'labels',
          type: 'array',
          of: [{
            type: 'reference',
            to: [{type: 'label'}]
          }]
        },
        {
          title: 'Events',
          name: 'events',
          type: 'array',
          of: [{
            type: 'reference',
            to: [{type: 'event'}]
          }]
        }
      ]
    },
    {
      title: 'Character',
      name: 'character',
      type: 'document',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'pc', title: 'Player Character', type: 'boolean' },
        { name: 'deceased', title: 'Deceased', type: 'boolean' },
        { name: 'player', title: 'Player', type: 'reference', to: [{type: 'player'}] },
        { name: 'race', title: 'Race', type: 'reference', to: [{type: 'race'}] },
        { name: 'class', title: 'Class', type: 'reference', to: [{type: 'class'}] },
        { name: 'subclass', title: 'Subclass', type: 'reference', to: [{type: 'subclass'}] },
        { name: 'short', title: 'Short Description', type: 'string' },
        { name: 'description', title: 'Description', type: 'array', of: [{type: 'block'}] },
        { name: 'image', title: 'Image', type: 'image' },
        { name: 'location', title: 'Location', type: 'reference', to: [{type: 'location'}] },
        {
          title: 'Labels',
          name: 'labels',
          type: 'array',
          of: [{
            type: 'reference',
            to: [{type: 'label'}]
          }]
        },
        {
          title: 'Events',
          name: 'events',
          type: 'array',
          of: [{
            type: 'reference',
            to: [{type: 'event'}]
          }]
        }
      ],
    },
    {
      title: 'Label',
      name: 'label',
      type: 'document',
      fields: [
        { name: 'name', Title: 'Name', type: 'string' },
        { name: 'title', Title: 'Title', type: 'string' },
        { name: 'color', Title: 'Color', type: 'colorPicker' },
      ],
    },
    {
      title: 'Race',
      name: 'race',
      type: 'document',
      fields: [
        { name: 'name', Title: 'Name', type: 'string' }
      ],
    },
    {
      title: 'Class',
      name: 'class',
      type: 'document',
      fields: [
        { name: 'name', Title: 'Name', type: 'string' }
      ],
    },
    {
      title: 'Subclass',
      name: 'subclass',
      type: 'document',
      fields: [
        { name: 'name', Title: 'Name', type: 'string' },
        { name: 'class', title: 'Class', type: 'reference', to: [{type: 'class'}] },
      ],
    },
    {
      title: 'Player',
      name: 'player',
      type: 'document',
      fields: [
        { name: 'name', Title: 'Name', type: 'string' },
        {
          title: 'Label',
          name: 'label',
          type: 'document',
          fields: [
            { name: 'name', Title: 'Name', type: 'string' },
            { name: 'title', Title: 'Title', type: 'string' },
            { name: 'color', Title: 'Color', type: 'colorPicker' },
          ],
        },
      ],
    },
    {
      title: 'Event',
      name: 'event',
      type: 'document',
      fields: [
        { name: 'title', Title: 'Title', type: 'string' },
        { name: 'calendarText', Title: 'Calendar Text', type: 'string' },
        { name: 'daysSince1494', Title: 'Days since the start of 1494', type: 'number' },
        { name: 'description', Title: 'Description', type: 'array', of: [{type: 'block'}] },
        {
          title: 'Locations',
          name: 'locations',
          type: 'array',
          of: [{
            type: 'reference',
            to: [{type: 'location'}]
          }]
        },
        {
          title: 'Labels',
          name: 'labels',
          type: 'array',
          of: [{
            type: 'reference',
            to: [{type: 'label'}]
          }]
        },
      ],
    }
  ]),
});
