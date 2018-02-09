import * as React from 'react';
import {CHANGE_SIZE_VALUE} from '../../typings/modules';
import * as types from '../../constants/action-types';
import Human from './human/index';
import {sizeDefaultValues as defaultValues} from '../../constants/default-values';

interface Props {
  hipGirth: number;
  chestGirth: number;
  waistGirth: number;
  weight: number;
  growth: number;

  changeSize(type: string, value: number): CHANGE_SIZE_VALUE;
}

interface SizeItem {
  type: string;
  label: string;
  minValue: number;
  maxValue: number;
}

const content: SizeItem[] = [
  {
    type: types.CHANGE_CHEST_GIRTH_VALUE,
    label: 'Обхват груди',
    minValue: 75,
    maxValue: 91,
  },
  {
    type: types.CHANGE_WAIST_GIRTH_VALUE,
    label: 'Обхват талии',
    minValue: 41,
    maxValue: 50,
  },
  {
    type: types.CHANGE_HIP_GIRTH_VALUE,
    label: 'Обхват бедер',
    minValue: 60,
    maxValue: 100,
  },
  {
    type: types.CHANGE_WEIGHT_VALUE,
    label: 'Вес',
    minValue: 40,
    maxValue: 150,
  },
  {
    type: types.CHANGE_GROWTH_VALUE,
    label: 'Рост',
    minValue: 140,
    maxValue: 230,
  },
];

export class HumanSizes extends React.Component<Props> {
  private refArr: HTMLElement[];

  constructor(props: Props) {
    super(props);

    this.refArr = [];

    this.setDefaultValue = this.setDefaultValue.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
  }

  componentDidMount() {
    this.refArr.forEach((el: HTMLElement) => {
      const type: string | null = el.getAttribute('datatype');
      el.value = this.setDefaultValue(type ? type : '').toString();
    });
  }

  setDefaultValue(type?: string): number {
    const {chestGirth, growth, hipGirth, waistGirth, weight} = defaultValues;
    switch (type) {
      case types.CHANGE_CHEST_GIRTH_VALUE: {
        return chestGirth;
      }
      case types.CHANGE_GROWTH_VALUE: {
        return growth;
      }
      case types.CHANGE_HIP_GIRTH_VALUE: {
        return hipGirth;
      }
      case types.CHANGE_WAIST_GIRTH_VALUE: {
        return waistGirth;
      }
      case types.CHANGE_WEIGHT_VALUE: {
        return weight;
      }
      default:
        return 0;
    }
  }

  handleChangeSize(event: any, el: SizeItem) {
    const {changeSize} = this.props;
    let val = parseInt(event.target.value, 10);

    const domElement: HTMLElement | undefined = this.refArr.find(e => e.isEqualNode(event.target));

    // take min max values from attrs

    const minValue: number = domElement ? parseInt(domElement.getAttribute('min'), 10) : 60;
    const maxValue: number = domElement ? parseInt(domElement.getAttribute('max'), 10) : 100;

    if (domElement && (val < minValue || !val)) {
      domElement.value = minValue.toString();
      val = minValue;
    } else if (domElement && val > maxValue) {
      domElement.value = maxValue.toString();
      val = maxValue;
    }

    changeSize(el.type, val ? val : 0);
  }

  render() {
    const {weight, growth} = this.props;
    return (
      <div className="human-sizes">
        <h1>Поменяйте размеры</h1>
        <div className="content-wrapper">
          <div className="left-group">
            <table>
              <tbody>
              {
                content.map((el: SizeItem, index: number) => (
                  <tr key={index}>
                    <td>{el.label}</td>
                    <td>
                      <input
                        type="number"
                        datatype={el.type}
                        min={el.minValue ? el.minValue : 60}
                        max={el.maxValue ? el.maxValue : 100}
                        ref={elem => {
                          if (elem) {
                            this.refArr.push(elem);
                          }
                        }}
                        onChange={(event) => this.handleChangeSize(event, el)}
                      />
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          <div className="right-group">
            <Human/>
            <div className="param-group">
              <div className="param-wrapper"><p>Рост:<span>{growth}</span></p></div>
              <div className="param-wrapper"><p>Вес:<span>{weight}</span></p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HumanSizes;
