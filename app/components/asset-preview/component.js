import Component from 'ember-component';
import computed from 'ember-computed';
import get from 'ember-metal/get';

export default Component.extend({
  classNames: ['c-asset-preview'],
  asset: null,

  isScaleUpNeeded: computed('asset', function() {
    let height = get(this, 'asset.svg.height');
    let width = get(this, 'asset.svg.width');
    let hasViewBox = !!get(this, 'asset.svg.viewBox');

    return Math.max(height, width) <= 50 && hasViewBox;
  })
});
