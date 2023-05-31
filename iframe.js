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
    },
    scroll: {
      type: 'boolean',
      label: 'Scroll the page',
      default: true
    }
  },
  create: function(element, config) {
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.src = config.url;
    iframe.setAttribute('height', config.height);
    iframe.setAttribute('width', config.width);

    // Apply scrolling attribute based on the configuration
    if (config.scroll) {
      iframe.setAttribute('scrolling', 'yes');
    } else {
      iframe.setAttribute('scrolling', 'no');
    }

    // Append the iframe to the container element
    element.appendChild(iframe);
  },
  updateAsync: function(data, element, config, queryResponse, details, doneRendering) {
    // No data manipulation or updates needed for this visualization
    doneRendering();
  }
});
