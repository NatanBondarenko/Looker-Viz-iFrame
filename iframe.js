looker.plugins.visualizations.add('iframe_viz', {
  options: {
    html_template: {
      type: 'string',
      label: 'URL',
      default: '',
      display: flex,
      order: 1
    },
    description: {
      type: 'string',
      label: 'Description',
      default: '',
      display: flex,
      order: 2
    }
  },
  create: function(element, config) {
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.src = config.html_template;
    iframe.title = config.description;

    // Append the iframe to the container element
    element.appendChild(iframe);
  },
  update: function(data, element, config, queryResponse) {
    // No data manipulation or updates needed for this visualization
  }
});
