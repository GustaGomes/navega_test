// svgo.config.js
module.exports = {
  plugins: [
    {
      name: "removeAttrs",
      params: {
        attrs: "(fill|stroke)", // Remove fill e stroke
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [{ fill: "currentColor" }], // Adiciona fill="currentColor"
      },
    },
  ],
};
