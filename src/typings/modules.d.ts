// sizes value types
export type CHANGE_CHEST_GIRTH_VALUE = {
  type: 'CHANGE_CHEST_GIRTH_VALUE';
  value: number;
};
export type CHANGE_WAIST_GIRTH_VALUE = {
  type: 'CHANGE_WAIST_GIRTH_VALUE';
  value: number;
};
export type CHANGE_HIP_GIRTH_VALUE = {
  type: 'CHANGE_HIP_GIRTH_VALUE';
  value: number;
};
export type CHANGE_WEIGHT_VALUE = {
  type: 'CHANGE_WEIGHT_VALUE';
  value: number;
};
export type CHANGE_GROWTH_VALUE = {
  type: 'CHANGE_GROWTH_VALUE';
  value: number;
};

export type DEFAULT_SIZE_VALUE = {
  type: null;
  value: null;
};

export type CHANGE_SIZE_VALUE =
  CHANGE_CHEST_GIRTH_VALUE |
  CHANGE_WAIST_GIRTH_VALUE |
  CHANGE_HIP_GIRTH_VALUE |
  CHANGE_WEIGHT_VALUE |
  CHANGE_GROWTH_VALUE |
  DEFAULT_SIZE_VALUE;
// end sizes value types

// svg paths value types
export type CHANGE_SVG_CHEST_GIRTH_VALUE = {
  type: 'CHANGE_SVG_CHEST_GIRTH_VALUE';
  path: object;
};

export type CHANGE_SVG_WAIST_GIRTH_VALUE = {
  type: 'CHANGE_SVG_WAIST_GIRTH_VALUE';
  path: object;
};
export type CHANGE_SVG_HIP_GIRTH_VALUE = {
  type: 'CHANGE_SVG_HIP_GIRTH_VALUE';
  path: object;
};

export type CHANGE_SVG_SIZE_VALUE =
  CHANGE_SVG_CHEST_GIRTH_VALUE |
  CHANGE_SVG_WAIST_GIRTH_VALUE |
  CHANGE_SVG_HIP_GIRTH_VALUE;
// end svg paths value types


export type ALL_CHANGE_VALUE_TYPES =
  CHANGE_CHEST_GIRTH_VALUE |
  CHANGE_WAIST_GIRTH_VALUE |
  CHANGE_HIP_GIRTH_VALUE |
  CHANGE_WEIGHT_VALUE |
  CHANGE_GROWTH_VALUE |
  CHANGE_SVG_CHEST_GIRTH_VALUE |
  CHANGE_SVG_WAIST_GIRTH_VALUE |
  CHANGE_SVG_HIP_GIRTH_VALUE;
