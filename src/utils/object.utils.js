import {
  clone,
  cloneDeep,
  get,
  isArray,
  isDate,
  isEqual,
  isFunction,
  isNull,
  isObject,
  isString,
  isUndefined,
  keyBy,
  merge,
  transform,
} from "lodash";

export class ObjectUtils {
  static parse(value) {
    if (ObjectUtils.isObject(value)) {
      return value;
    }

    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }

  static stringify(object, replacer = null, space = null) {
    return JSON.stringify(object, replacer, space);
  }

  static isArray(object) {
    return isArray(object);
  }

  static isNull(object) {
    return isNull(object);
  }

  static isUndefined(object) {
    return isUndefined(object);
  }

  static isNullOrUndefined(object) {
    return isNull(object) || isUndefined(object);
  }

  static isFunction(object) {
    return isFunction(object);
  }

  static isObject(object) {
    return isObject(object);
  }

  static isEmpty(object) {
    if (ObjectUtils.isNullOrUndefined(object)) {
      return true;
    }

    if (isDate(object)) {
      return false;
    }

    if (isArray(object) || isString(object)) {
      return object.length <= 0;
    }

    if (isObject(object)) {
      return Object.keys(object).length <= 0;
    }

    return false;
  }

  static isEqual(a, b) {
    return isEqual(a, b);
  }

  static isString(object) {
    return isString(object);
  }

  static trim(input) {
    const omitFromObject = (object) => {
      return transform(object, (result, value, key) => {
        if (isString(value)) {
          result[key] = value.trim();
        } else if (isDate(value)) {
          result[key] = value;
        } else if (isArray(value)) {
          result[key] = value.map((item) => {
            if (isString(item)) {
              return item.trim();
            }
            if (isObject(item)) {
              return omitFromObject(item);
            }
            return item;
          });
        } else if (isObject(value)) {
          result[key] = omitFromObject(value);
        } else {
          result[key] = value;
        }
      });
    };

    return omitFromObject(input);
  }

  static diffArray(sourceArray, targetArray) {
    if (sourceArray.length !== targetArray.length) {
      return targetArray;
    }

    for (let i = 0; i < sourceArray.length; i += 1) {
      const diff = ObjectUtils.diff(sourceArray[i], targetArray[i]);
      if (!ObjectUtils.isNullOrUndefined(diff)) {
        return targetArray;
      }
    }

    return null;
  }

  static differenceArray(source, target) {
    if (source.length !== target.length) {
      return source;
    }

    for (let i = 0; i < source.length; i += 1) {
      const diff = ObjectUtils.difference(source[i], target[i]);
      if (!ObjectUtils.isEmpty(diff)) {
        return source;
      }
    }

    return null;
  }

  static difference(source, target) {
    if (isArray(source) && isArray(target)) {
      return ObjectUtils.differenceArray(source, target);
    }

    return transform(source, (result, value, key) => {
      if (isEqual(value, target[key])) {
        return;
      }

      if (isArray(value) && isArray(target[key])) {
        result[key] = ObjectUtils.differenceArray(value, target[key]);
      } else if (isObject(value) && isObject(target[key])) {
        result[key] = ObjectUtils.difference(value, target[key]);
      } else {
        result[key] = value;
      }
    });
  }

  static diff(sourceObj, targetObj) {
    if (
      ObjectUtils.isNullOrUndefined(sourceObj) ||
      ObjectUtils.isNullOrUndefined(targetObj)
    ) {
      return null;
    }

    const changedObj = {};
    Object.keys(targetObj).forEach((key) => {
      if (
        ObjectUtils.isArray(sourceObj[key]) &&
        ObjectUtils.isArray(targetObj[key])
      ) {
        const diff = ObjectUtils.diffArray(sourceObj[key], targetObj[key]);
        if (!ObjectUtils.isNullOrUndefined(diff)) {
          changedObj[key] = diff;
        }
      } else if (
        ObjectUtils.isObject(sourceObj[key]) &&
        ObjectUtils.isObject(targetObj[key])
      ) {
        const diff = ObjectUtils.diff(sourceObj[key], targetObj[key]);
        if (!ObjectUtils.isNullOrUndefined(diff)) {
          changedObj[key] = diff;
        }
      } else if (sourceObj[key] !== targetObj[key]) {
        changedObj[key] = targetObj[key];
      }
    });

    return ObjectUtils.isEmpty(changedObj) ? null : changedObj;
  }

  static copy(object, isDeep) {
    return isDeep ? cloneDeep(object) : clone(object);
  }

  static resolve(value, path, defaultValue = null) {
    return (
      path
        .replace(/\[(\w+)\]/g, ".$1")
        .replace(/^\./, "")
        .split(".")
        .reduce((previousValue, currentValue) => {
          return previousValue ? previousValue[currentValue] : null;
        }, value) || defaultValue
    );
  }

  /**
   *
   * @param {*} object need to delete.
   * @param {*} properties list of property.
   * @param {*} isFalsey will delete empty field.
   * @param {*} mode need to check in or out of properties.
   */
  static deleteProperties(
    object,
    { properties = [], isFalsey = true, mode = "out" } = {}
  ) {
    if (!ObjectUtils.isEmpty(properties)) {
      if (ObjectUtils.isArray(object)) {
        object.forEach((item) => {
          if (ObjectUtils.isObject(item)) {
            ObjectUtils.deleteProperties(item, {
              properties,
              isFalsey,
              mode,
            });
          }
        });
      } else {
        Object.keys(object).forEach((item) => {
          if (mode === "in" && properties.includes(item)) {
            delete object[item];
          } else if (mode === "out" && !properties.includes(item)) {
            delete object[item];
          } else if (ObjectUtils.isObject(object[item])) {
            ObjectUtils.deleteProperties(object[item], {
              properties,
              isFalsey,
              mode,
            });
          }
        });
      }
    }
    if (isFalsey) {
      Object.keys(object).forEach((item) => {
        if (
          ObjectUtils.isNull(object[item]) ||
          ObjectUtils.isUndefined(object[item]) ||
          object[item].length === 0
        ) {
          delete object[item];
        }
      });
    }
    return object;
  }

  static values(object) {
    return Object.keys(object).map((item) => object[item]);
  }

  static get(object, name, defaultValue = undefined) {
    return get(object, name, defaultValue);
  }

  static transform(input, next) {
    const omitFromObject = (object) => {
      return transform(object, (result, value, key) => {
        if (next(value, key)) {
          return;
        }

        if (isDate(value)) {
          result[key] = value;
        } else if (isArray(value)) {
          result[key] = value.map((item) => {
            if (isObject(item)) {
              return omitFromObject(item);
            }
            return item;
          });
        } else if (isObject(value)) {
          result[key] = omitFromObject(value);
        } else {
          result[key] = value;
        }
      });
    };

    return omitFromObject(input);
  }

  static clean(input, fields, falsy = false) {
    const keysToOmitIndex = keyBy(fields);

    const data = ObjectUtils.transform(
      input,
      (_, key) => key in keysToOmitIndex
    );

    if (!falsy) {
      return data;
    }

    return ObjectUtils.transform(data, (value) => ObjectUtils.isEmpty(value));
  }

  static cleanOut(input, fields, falsy = false) {
    const keysToOmitIndex = keyBy(fields);

    const data = ObjectUtils.transform(
      input,
      (_, key) => !(key in keysToOmitIndex)
    );

    if (!falsy) {
      return data;
    }

    return ObjectUtils.transform(data, (value) => ObjectUtils.isEmpty(value));
  }

  static merge(object, source) {
    return merge(object, source);
  }
}
