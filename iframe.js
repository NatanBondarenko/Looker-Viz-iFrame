looker.plugins.visualizations.add({
options: {
        url: {
      type: 'string',
      label: 'URL',
      default: '{{ value }}'
        }
    },
  create: function(element, config) {
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.src = config.url;

    // Append the iframe to the container element
    element.appendChild(iframe);
  },
   updateAsync: function(data, element, config, queryResponse, details, doneRendering) {
    // No data manipulation or updates needed for this visualization
  }
});
