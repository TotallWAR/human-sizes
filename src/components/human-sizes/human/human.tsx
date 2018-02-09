import * as React from 'react';
import anime from 'animejs';

interface Props {
  hipGirthPath: {
    leftHipPath: string;
    rightHipPath: string;
  };
  waistGirthPath: {
    leftWaistPath: string;
    rightWaistPath: string;
  };
  chestGirthPath: {
    leftTitPath: string;
    rightTitPath: string;
  };
}

export default class Human extends React.Component<Props> {
  private svgDom: HTMLElement;

  componentDidMount() {
    anime({
      targets: 'svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      direction: 'normal',
    });
  }

  render() {
    const {hipGirthPath, waistGirthPath, chestGirthPath} = this.props;
    return (
      <svg
        width="356px"
        height="1068px"
        viewBox="0 0 356 1068"
        style={{overflow: 'visible'}}
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            id="Group"
            transform="translate(-203.000000, -108.000000)"
            stroke="#000000"
          >
            <g
              id="human"
              transform="translate(205.000000, 111.000000)"
            >
              <g
                id="left-hip"
                transform="translate(133.000000, 434.000000)"
                strokeWidth="5.19999981"
              >
                <path
                  d={hipGirthPath.leftHipPath}
                  id="Path"
                />
                <path
                  d={'M0.89261745,90.9871465 C-1.52079154,97.0119298 5.21972151,104.747661 6.24832215,112.395887 ' +
                  'C8.64627628,130.226028 11.0004462,151.004655 16.0671141,173.053985 C24.7657943,210.909252 ' +
                  '26.6803948,250.104174 36.8233262,272.730448 C47.6413141,296.318063 ' +
                  '50.6240846,320.224088 64.2684564,347'}
                  id="Path"
                />
              </g>
              <g
                id="right-hip"
                transform="translate(0.000000, 411.000000)"
                strokeWidth="5.19999981"
              >
                <path
                  d={hipGirthPath.rightHipPath}
                  id="Path"
                />
                <path
                  d={'M110.278227,148.371006 C112.831263,202.121459 104.067415,229.219057 105.284046,249.198719 ' +
                  'C106.059031,261.927418 113.682457,274.82941 106.837779,310.037596 C105.284046,318.02981 ' +
                  '103.833333,325.205962 103.833333,327'}
                  id="Path"
                />
              </g>
              <path
                d={'M74.9999557,89.0067236 C74.999879,89.7204797 74.6169667,90.3797301 ' +
                '73.9960079,90.7351953 C73.375049,91.0906605 72.610811,91.0880912 ' +
                '71.9922719,90.728459 C71.3737328,90.3688268 70.9952907,89.7070169 ' +
                '71.0000443,88.9932764 C71.000121,88.2795203 71.3830333,87.6202699 ' +
                '72.0039921,87.2648047 C72.624951,86.9093395 73.389189,86.9119088 ' +
                '74.0077281,87.271541 C74.6262672,87.6311732 75.0047093,88.2929831 74.9999557,89.0067236 Z'}
                id="Shape"
                strokeWidth="5.5"
              />
              <path
                d={'M109.999956,88.0067236 C109.999879,88.7204797 109.616967,89.3797301 108.996008,89.7351953 ' +
                'C108.375049,90.0906605 107.610811,90.0880912 106.992272,89.728459 C106.373733,89.3688268 ' +
                '105.995291,88.7070169 106.000044,87.9932764 C106.000121,87.2795203 106.383033,86.6202699 ' +
                '107.003992,86.2648047 C107.624951,85.9093395 108.389189,85.9119088 109.007728,86.271541 ' +
                'C109.626267,86.6311732 110.004709,87.2929831 109.999956,88.0067236 Z'}
                id="Shape"
                strokeWidth="5.5"
              />
              <path
                d="M87,131.179953 C90.7243946,132.337503 93.4128157,132.262465 97,131"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M81,175 C82.5317639,165.091803 81.7555342,153.028856 83,143"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M141.595134,84 C144.303014,89.1340474 141.121065,94.8040648 134,104 ' +
                'C142.906631,99.2509636 146.735125,100.028208 151,91.1313303'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M155.995753,101 C156.228889,109.4691 146.80898,115.391343 141,113.715649"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M91,157 C94.8503233,162.40549 93.1855268,168.692574 98,175"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M96,199.211365 C86.9060484,199.182105 67.2676254,200.11968 ' +
                '57.8073691,199.987159 C55.1555827,199.950068 53.1263881,198.801901 54.3802287,193'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M105,202.459356 C113.736491,205.195686 116.642123,196.571806 122,198.208431"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M138,196.719178 C168.739861,198.574714 188.84417,190.806498 195,186"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M107,188.192969 C114.200804,198.127771 121.549955,164.189311 127,157"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M227,243 C224.867004,240.11302 222.978582,234.477792 219.664729,230.907862 ' +
                'C212.811978,223.298102 206.194395,218.278282 195.663796,208.675094 ' +
                'C183.283477,196.801103 171.956173,184.275941 157.551886,171.944592 C147.598859,163.108796 ' +
                '141.622725,147.932249 143.272485,125.003531 C143.514999,121.656262 ' +
                '143.679572,118.695367 143.796932,114'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M176.05065,295.011173 C174.026323,294.600745 168.499238,305.632442 ' +
                '170.386855,305.96088 C174.181644,306.621155 179.201253,298.725922 175.957252,297.178218'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M38,307.138635 C46.727414,310.704599 49.8977259,302.182522 ' +
                '43.9612533,300.043318 C43.8159745,299.990945 43.4077563,299.942437 43.1485056,300.176202'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <g
                id="tits"
                transform="translate(27.000000, 252.000000)"
                strokeWidth="5.19999981"
              >
                <path
                  d={chestGirthPath.leftTitPath}
                  id="Path"
                />
                <path
                  d={chestGirthPath.rightTitPath}
                  id="Path"
                />
              </g>
              <path
                d="M32,446 C34.5855422,453.388285 37.6694219,460.450202 42,466"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M161.05745,382 C160.539173,373.033218 163.554844,365.622786 169,362"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M91.2003372,433.975227 C89.9968671,432.204224 87.8366735,431.069223 ' +
                '86.3642282,433.028536 C84.6505711,435.308996 89.3992832,438.861281 ' +
                '91.9715543,437.810111 C93.7826067,437.069985 94.7686113,434.430451 93.2625105,432.883471'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M157,472 C159.991724,466.708298 161.989388,462.297357 163,457"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M136,517 L139,514"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M130,522.85886 C116.143096,533.437218 110.407949,547.054975 ' +
                '110.183488,559 C93.109957,546.226774 81.3713804,528.401255 71.5141747,513.054864 ' +
                'C64.0511652,501.436005 56.0471278,495.32688 46,484'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M32.7589797,253 L1,253 C11.8775324,220.321528 27.0577014,201.195673 ' +
                '46.5405073,195.622434 C60.4868163,189.530872 73.6954771,180.9261 82,168'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <g
                id="waist"
                transform="translate(19.000000, 305.000000)"
              >
                <path
                  d={waistGirthPath.leftWaistPath}
                  id="left-waist"
                  strokeWidth="5.19999981"
                />
                <path
                  d={waistGirthPath.rightWaistPath}
                  id="right-waist"
                  strokeWidth="5.19999981"
                />
              </g>
              <path
                d="M56,758 C40.5615233,748.854914 35.5807688,733.238814 35,706"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M39,746 C43.1253114,755.804113 45.8835454,761.11741 50,766"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M98,767 C100.754394,754.271583 102.231583,746.076455 103,738 L98,767 Z"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M61,767.910119 C70.4210317,768.830825 73.3993316,762.579323 71.4173801,753.689927 ' +
                'C70.6159292,750.095796 70.5003246,746.56018 71.4553592,743'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M41.8274698,742 C23.6842585,775.276994 52.6920218,856.184698 ' +
                '63.818118,915.306712 C67.2641985,933.618748 70.7923584,942.256311 67.9774029,962'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M101.471161,925 C119.615017,955.963238 125.06394,972.528365 115.008763,977.947918 ' +
                'C106.781702,982.46463 94.0913442,988.80609 85,994'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M69,949 C60.1888618,955.863309 56.1321357,971.608015 49.2846655,977.547284 ' +
                'C40.5715094,985.10482 29.7610001,988.206841 26.045198,995.921342 ' +
                'C24.623071,998.873851 24.5043293,1001.28049 26.6162679,1003'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M26.1410428,1016.75594 C20.8378757,1018.97351 23.3777827,1005.39423 25.5893919,1003.69471 L33,998"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M33.9935627,998 L37,1003.08133 C33.5257654,1009.65201 ' +
                '30.1879827,1011.99409 26.9880622,1016.73046 C24.2242942,1020.82142 ' +
                '24.5664817,1023.53022 26.6396162,1026'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M326,994 C335.95953,998.772297 344.059798,1007.03715 ' +
                '349.589275,1015.09038 C350.042147,1016.89209 ' +
                '351.864152,1021.06189 350.504912,1025'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M266.82293,971 C257.303639,1001.6575 260.646469,1002.42673 288,1012"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M226,777 C217.661358,769.719692 213.968956,762.065744 214.000197,753"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M197.067546,782 C179.331698,826.3379 224.223336,871.41948 ' +
                '242.846759,913.022201 C253.687107,936.691937 261.327426,963.130867 275,990'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M97.7053616,768 C98.0908951,775.906716 105.043293,782.744243 ' +
                '107.035389,789.463284 C109.207983,796.791121 111.94074,812.839425 ' +
                '112.536533,818.975299 C115.096956,845.344233 106.174298,852.598537 ' +
                '107.035389,866.373384 C107.828562,879.06355 108.554714,908.534428 ' +
                '101.436967,923.608807 C97.8085038,931.293468 94.7374025,942.333376 96.5229823,944'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M257,771 C288.852435,801.768838 287.737456,915.957786 ' +
                '297.611555,943.655162 C309.784617,977.801027 322.175062,980.960023 332,1008'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M245,779 C246.743065,778.160258 248.087166,773.830963 247.995584,771"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M199,188 C196.317251,171.636357 189.61316,153.854833 ' +
                '190.560904,132.44733 C191.445854,112.458574 193.005304,92.2621797 ' +
                '189.200602,74.46294 C185.476904,57.0425795 175.518188,45.3718333 ' +
                '166.322243,31.568702 C155.661218,15.5664539 147.395076,-0.834107553 ' +
                '122.734437,0.0329372709 C109.752807,0.48935671 92.1418076,10.0883022 ' +
                '89.1670657,29.7656797 C87.4454274,41.1538502 99.2912892,53.4008516 ' +
                '112.652824,53.4712696 C127.982061,53.5520669 127.971655,67.202963 ' +
                '132.077501,74.7893054 C138.03748,86.2931153 152.574075,86.479969 ' +
                '155.331549,98.3203178 C160.416177,120.153532 148.641362,144.97731 160.938535,166.605059'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M50.2471088,1013.76967 C45.5982192,1023.71648 30.5498829,1026.48987 ' +
                '31.0103396,1030.40274 C32.6777187,1044.57148 48.0000729,1035.9031 ' +
                '57.9644662,1028.67778 C68.6362432,1030.58458 75.1858491,1019.66011 ' +
                '80.6549272,1003.90667 C84.3340509,993.309511 86.9554743,982.246889 94,979'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M43,1008 C39.1870286,1013.43124 32.3556831,1020.6859 25.9295936,1025.49272 ' +
                'C24.1488155,1026.82483 24.4888478,1031.36717 30.8725855,1029.5955'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M342.302679,1017 L342,1020.21501 L349.988604,1025.40303 C350.124528,1028.71532 ' +
                '349.003802,1034.3788 348.796207,1036'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M340.047096,1023 L338,1027.18497 C341.705022,1030.0314 345.307552,1033.51042 ' +
                '349.429567,1035.86711 C352.031083,1039.84964 344.948694,1040.01367 343.930791,1043'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M334.547927,1029.4322 L332.98258,1033.53681 C337.719944,1037.96899 ' +
                '342.031683,1040.94793 346.774213,1043.82684 C346.388487,1044.98705 ' +
                '346.00098,1047.62406 346.968813,1049.49401 C352.146408,1059.49738 ' +
                '336.572742,1064.98572 328.103697,1060.31108 C320.996226,1056.38806 ' +
                '318.749825,1049.73906 308.956345,1047.33983 C297.966946,1044.64765 ' +
                '286.72862,1004.84912 281,998'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M328,1037 C329.251628,1042.42917 331.317499,1043.20468 ' +
                '338.420976,1046.39671 C340.35368,1047.26503 344.873686,1046.53791 347,1049'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M192.530684,276 C192.713084,268.302914 191.415384,261.320573 192.329384,252"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M226,244 C226,244 221.507416,244.380374 206.991041,248.406982 ' +
                'C203.941964,249.252747 199.278283,250.117086 193,251'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M84.5724109,100 C85.3223876,93.7220313 85.0573755,89.1137776 84,85"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M100.257651,102 C103.030364,106.017505 97.5130672,110.989572 ' +
                '92.3402161,107.666644 C87.9364691,112.654348 79.0430452,111.827696 78,106.633552'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M76,80 C75.5640111,76.3720169 67.5422682,75.3641106 64,76.3651616"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M95,78 C98.1886275,75.8200138 113.97511,73.4784941 116,76.2930126"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M79,123 L83.0537913,119.706863 C86.0065685,120.771272 89.8623799,122.730995 ' +
                '92.8294537,119 C94.8894214,121.67669 99.3903865,122.497621 104.059472,121.749096 ' +
                'C104.692953,121.647536 105.216586,122.219214 106,122.5658'}
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M80,121.951839 C84.9292662,123.049717 89.8672299,123.96626 95,121"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M66,86.053965 C77.4366197,85.7379337 79.3601358,86.7369453 82,91"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d="M100,91 C100.949191,84.4383343 108.736589,83.7423551 118,86.5875695"
                id="Path"
                strokeWidth="5.19999981"
              />
              <path
                d={'M142,101.229208 C140.738607,122.011978 139.627683,123.117151 ' +
                '126.022205,133.643736 C116.450619,141.049265 104.552151,148.200517 ' +
                '87.1887741,146.464414 C82.432202,141.646418 74.601925,132.864631 ' +
                '70.1005893,123.794673 C64.699022,112.910695 59.0391895,101.95901 ' +
                '63.3583408,87.7772507 C62.6721871,84.049135 61.2289659,80.3092578 ' +
                '63.2004773,77.0736188 C62.3185979,69.8268299 64.7572854,56.5555758 ' +
                '67.2277773,54.1127559 C82.1892597,39.3184077 85.0348109,40.5348999 ' +
                '87.3700676,30.550192 C88.0891837,27.4752819 90.0194476,18.9923833 ' +
                '93.1613937,13.6752411 C90.5699207,9.66798781 64.8759503,23.7961829 ' +
                '53.3614502,48.0951392 C48.1402856,59.1132288 51.1932331,72.3303745 ' +
                '46.7166637,88.7643086 C41.1559858,109.178014 70.314578,137.770976 ' +
                '53.3594012,180.77655 C51.7021913,184.980031 51.4894498,191.67698 51.1262391,194'}
                id="Path"
                strokeWidth="5.19999981"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
