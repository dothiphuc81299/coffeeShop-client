import { findIndex } from "lodash";
import { ObjectUtils } from "./object.utils";

export class ArrayUtils {
  static isArray(array) {
    return Array.isArray(array);
  }

  static findIndex(array, value, key = "id") {
    if (!ArrayUtils.isArray(array) || !value) {
      return -1;
    }

    return findIndex(array, (item) => {
      if (
        typeof value === "object" &&
        item &&
        ObjectUtils.get(item, key) === ObjectUtils.get(value, key)
      ) {
        return true;
      }
      if (item && ObjectUtils.get(item, key) === value) {
        return true;
      }
      if (item === value) {
        return true;
      }
      return false;
    });
  }

  static find(array, value, key = "id") {
    const index = ArrayUtils.findIndex(array, value, key);

    if (index === -1) {
      return null;
    }

    return array[index];
  }

  static findRecursive(
    array,
    value,
    key = "components",
    valueKey = "id",
    parent
  ) {
    return (array || []).reduce((previousValue, currentValue) => {
      if (previousValue) {
        return previousValue;
      }
      if (ObjectUtils.resolve(currentValue, valueKey) === value) {
        return [array, currentValue, parent];
      }
      if (currentValue[key]) {
        return ArrayUtils.findRecursive(
          currentValue[key],
          value,
          key,
          valueKey,
          currentValue
        );
      }
      return previousValue;
    }, null);
  }

  static insert(array, item, position) {
    return [...array.slice(0, position), item, ...array.slice(position)];
  }

  static replaceIndex(array, value, index) {
    if (!ArrayUtils.isArray(array)) {
      return [];
    }

    if (index >= 0 && index < array.length) {
      array.splice(index, 1, value);
    }

    return array;
  }

  static replace(array, value, key = "id") {
    const index = ArrayUtils.findIndex(array, value, key);

    return ArrayUtils.replaceIndex(array, value, index);
  }

  static removeIndex(array, index) {
    if (!ArrayUtils.isArray(array)) {
      return [];
    }

    if (index >= 0 && index < array.length) {
      array.splice(index, 1);
    }

    return array;
  }

  static removeItem(array, item) {
    if (!ArrayUtils.isArray(array)) {
      return [];
    }
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }

    return array;
  }

  static remove(array, value, key = "id") {
    const index = ArrayUtils.findIndex(array, value, key);
    return ArrayUtils.removeIndex(array, index);
  }

  static add(array, value) {
    if (!ArrayUtils.isArray(array)) {
      return [];
    }

    array.push(value);

    return array;
  }

  static max(array) {
    return Math.max(...array);
  }

  static sort(array, key) {
    if (!ArrayUtils.isArray(array)) {
      array = [];
    }
    return array.sort((a, b) => a[key] - b[key]);
  }

  static exists(array, value, key = "id") {
    const index = ArrayUtils.findIndex(array, value, key);
    return index >= 0;
  }
}
