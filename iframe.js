looker.plugins.visualizations.add('iframe_viz', {
  options: {
    url: {
      type: 'string',
      label: 'URL',
      default: '',
      order: 1
    },
    description: {
      type: 'string',
      label: 'Description',
      default: '',
      order: 2
    }
  },
  create: function(element, config) {
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.src = config.url;
    iframe.title = config.description;

    // Append the iframe to the container element
    element.appendChild(iframe);
  },
  update: function(data, element, config, queryResponse) {
    // No data manipulation or updates needed for this visualization
  }
});
