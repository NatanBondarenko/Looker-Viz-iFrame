looker.plugins.visualizations.add({
  options: {
    url: {
      type: 'string',
      label: 'URL',
      default: 'https://www.google.com/search?igu=1'
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
    iframe.style.height = config.height;
    iframe.style.width = config.width;

    // Append the iframe to the container element
    element.appendChild(iframe);
  },
  updateAsync: function(data, element, config, queryResponse, details, doneRendering) {
    // No data manipulation or updates needed for this visualization
    doneRendering();
  }
});
