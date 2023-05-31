looker.plugins.visualizations.add({
  options: {
    url: {
      type: 'string',
      label: 'URL',
      default: 'https://www.google.com'
    },
    height: {
      type: 'string',
      label: 'Height',
      default: '400px'
    },
    width: {
      type: 'string',
      label: 'Width',
      default: '600px'
    }
  },
  create: function(element, config) {
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.src = config.url;
    iframe.setAttribute('height', config.height);
    iframe.setAttribute('width', config.width);

    // Append the iframe to the container element
    element.appendChild(iframe);
  },
  updateAsync: function(data, element, config, queryResponse, details, doneRendering) {
    // No data manipulation or updates needed for this visualization
    doneRendering();
  }
});
