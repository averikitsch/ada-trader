import Backbone from 'backbone';
import QuoteView from './quote_view';

const QuoteListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.tradeTemplate = params.tradeTemplate;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('#quotes').empty();
    this.model.each((quote) => {
      const quoteView = new QuoteView({
        model: quote,
        template: this.template,
        tradeTemplate: this.tradeTemplate,
        tagName: 'li',
        className: 'quote',
      });

      this.$('#quotes').append(quoteView.render().$el);
    });
    return this;
  },
});

export default QuoteListView;
