// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

/// <reference types='mocha' />

import { Path } from '../Path';
import { assert } from 'chai';

describe('Path', () => {
  describe('Test', () => {
    it('Windows paths', () => {
      assert.isTrue(Path.isUnder('C:\\a\\b.txt', 'C:\\a'), '1');
      assert.isTrue(Path.isUnder('C:\\a\\b.txt', 'C:\\a\\'), '2');
      assert.isTrue(Path.isUnder('C:\\a\\b\\c.txt', 'C:\\a'), '3');

      assert.isFalse(Path.isUnder('C:\\a\\b.txt', 'C:\\b'), '4');
      assert.isFalse(Path.isUnder('C:\\a\\b.txt', 'C:\\b\\'), '5');
      assert.isFalse(Path.isUnder('C:\\a\\b\\c.txt', 'C:\\b'), '6');
    });
    it('Unix paths', () => {
      assert.isTrue(Path.isUnder('/a/b.txt', '/a'), '1');
      assert.isTrue(Path.isUnder('/a/b.txt', '/a/'), '2');
      assert.isTrue(Path.isUnder('/a/b/c.txt', '/a'), '3');

      assert.isFalse(Path.isUnder('/a/b.txt', '/b'), '4');
      assert.isFalse(Path.isUnder('/a/b.txt', '/b/'), '5');
      assert.isFalse(Path.isUnder('/a/b/c.txt', '/b'), '6');
    });
    it('Edge cases', () => {
      assert.isFalse(Path.isUnder('/a', '/a'), '1');
      assert.isFalse(Path.isUnder('.', '.'), '2');
      assert.isFalse(Path.isUnder('', ''), '3');
    });
  });
});