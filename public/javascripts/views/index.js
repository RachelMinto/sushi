var IndexView = Backbone.View.extend({
  attributes: {
    id: "index",
  },
  events: {
  },
  template: App.templates.index,
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});