import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | clipboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const service = this.owner.lookup('service:clipboard');
    assert.ok(service);
  });
});
