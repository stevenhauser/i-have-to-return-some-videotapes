import React from 'react';
import pureRenderMixin from 'react-addons-pure-render-mixin';

export function createPureComponent(proto) {
  return React.createClass({
    mixins: [pureRenderMixin],
    ...proto
  });
};
