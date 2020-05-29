import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperStyle = styled.svg`
  position: fixed;
  width: 7rem;
  bottom: 2rem;
  right: 2rem;
  z-index: 1;
  cursor: pointer;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
`;

const ChiperWhatsAppAltIcon = ({ clickEvent }) => (
  <WrapperStyle
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 51"
    onClick={clickEvent}
  >
    <g
      id="Acquisition-V2.5-(Actual)"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="M_RegistroMex-0.0" transform="translate(-259.000000, -251.000000)">
        <g id="Group-2" transform="translate(259.000000, 251.000000)">
          <g id="Group" transform="translate(17.000000, 0.000000)">
            <path
              d="M19.0017143,38.0034286 C15.4238498,38.0034286 11.9386187,37.0034634 8.9220966,35.1127928 C8.79462677,35.0328273 8.64815522,34.9924486 8.50168367,34.9924486 C8.4233016,34.9924486 8.34491953,35.0043247 8.26891267,35.0272851 L1.14406155,37.2203996 C1.66740043,35.3099356 2.60798529,31.892794 3.15349284,29.9918308 C3.21683188,29.7717276 3.18120367,29.5342062 3.05690079,29.3418138 C1.05697036,26.2643279 -2.13162821e-14,22.6888386 -2.13162821e-14,19.0017143 C-2.13162821e-14,8.52464408 8.52464408,8.91731133e-13 19.0017143,8.91731133e-13 C29.4787845,8.91731133e-13 38.0034286,8.52464408 38.0034286,19.0017143 C38.0034286,29.4787845 29.4787845,38.0034286 19.0017143,38.0034286 Z"
              id="Combined-Shape"
              fill="#FF0136"
              fillRule="nonzero"
            ></path>
            <path
              d="M26.6195355,12.1038658 C26.3658925,11.5005244 25.9704752,10.9754961 25.4343913,10.5276777 C24.8983074,10.0798594 24.2204493,9.72800219 23.4024783,9.47210601 C23.2479665,9.42357398 23.086809,9.38110845 22.9212211,9.34250342 C22.9760479,8.67132746 22.9383891,7.85290089 22.7146516,7.30526101 C22.4449483,6.64456356 21.7726282,6.25851329 20.6976913,6.15041922 L19.2439514,6.00316861 C18.9615105,5.97449059 18.7914922,6.14049221 18.7338964,6.50062196 C18.6835001,6.81166817 18.4497941,7.8699974 18.3296182,8.49650184 C21.2066387,8.4374913 22.3895677,9.24157885 22.3895677,9.24157885 C20.6506178,8.94211415 18.9720328,9.1720898 18.4558859,9.25757236 C17.9618912,9.34470942 17.4989097,9.46273051 17.0713717,9.61825361 C17.0182064,9.63755613 16.9644872,9.65685864 16.9124295,9.67726415 C15.9056107,10.0704839 15.0538576,10.5872398 14.3582777,11.2264287 C13.6621439,11.8667207 13.0928317,12.5930467 12.6508947,13.4065097 C12.2089578,14.2199728 11.8650445,15.0472234 11.6208162,15.8877099 C11.3765879,16.728748 11.2115538,17.5466231 11.1273753,18.3418866 C11.042643,19.1365987 11,19.8359012 11,20.4392426 C11,22.1213188 11.2353674,23.5193722 11.7055484,24.634506 C12.1757295,25.7490883 12.7871309,26.6359009 13.5397529,27.2932893 C14.0747292,27.7615132 14.6628708,28.1304669 15.3030702,28.4045626 C15.3180229,28.4106291 15.3324219,28.4177986 15.3473746,28.4238651 C15.5932643,28.5269957 15.8463535,28.6174417 16.1077498,28.6918943 C16.4173272,28.7806859 16.7269046,28.8529324 17.0359281,28.9124945 C17.4800803,28.982535 17.9895815,29.0338245 18.5727389,29.0514725 C18.5727389,29.0514725 17.0276211,29.5020484 14.9630335,29.0437515 C14.9397736,29.6432325 14.9940466,30.2123809 15.1851095,30.6789502 C15.4575819,31.3424051 16.141532,31.7312129 17.2352982,31.843719 L18.7156208,31.9964846 C19.0024921,32.0268171 19.1763871,31.8608155 19.2361981,31.5001342 C19.3009934,31.1146355 19.6426915,29.3829243 19.7047177,29.0807021 C19.8775051,29.0702236 20.0469696,29.0564361 20.2125575,29.038788 C22.3164653,28.8082609 24.7066907,27.4697695 25.55789,25.5042221 C25.7766432,24.9984962 25.7960264,24.4723649 25.614932,23.924725 C25.478142,23.5094452 25.2682496,23.2000535 24.9869163,22.9959984 C24.7050292,22.7919432 24.4131737,22.6540681 24.1107957,22.5812701 C23.807864,22.509575 23.5276384,22.487515 23.2690111,22.5156415 C23.0103839,22.544871 22.8326122,22.5735491 22.7356962,22.6038816 C22.5219272,22.6706131 22.3784916,22.8040762 22.3048354,23.0037194 C22.2317331,23.2033625 22.1403551,23.4300292 22.0307016,23.6826163 C21.9216019,23.9352035 21.7521373,24.1866877 21.5234156,24.4343114 C21.2946938,24.683038 20.9275207,24.8854387 20.4224499,25.0431678 C20.1178568,25.1380258 19.832093,25.1920729 19.5640511,25.2080664 C19.3868333,25.2185449 19.2168149,25.2119269 19.0556575,25.1882124 C18.6519331,25.1269958 18.3107888,24.9780907 18.019487,24.7674176 C17.3344294,24.2710672 16.9301513,23.4333382 16.6604479,22.6055361 C16.5330726,22.2145223 16.4450175,21.8146845 16.3863141,21.4104348 C16.2677997,20.5920082 16.2705687,19.7542791 16.3193036,18.9308891 C16.3475477,18.4560472 16.4134506,17.9624544 16.5170122,17.450662 C16.6200201,16.9388697 16.7612405,16.4359013 16.9401198,15.9423085 C17.0979544,15.5066232 17.3000935,15.1100944 17.546537,14.7521707 C17.5786577,14.7052931 17.6118861,14.6584156 17.6456682,14.6126411 C17.93697,14.2199728 18.2947285,13.9001026 18.717836,13.6530304 C19.1414974,13.4065097 19.6537676,13.2829736 20.2557544,13.2829736 C20.6694472,13.2829736 20.9939774,13.3513597 21.2293448,13.4886833 C21.3373369,13.5515543 21.4320377,13.6326249 21.5145547,13.730792 C21.6114707,13.845504 21.6906649,13.9839306 21.7515835,14.1466232 C21.8645599,14.448294 21.9304628,14.8277262 21.9492922,15.28492 C21.9675678,15.7415623 21.986951,16.2809297 22.0057803,16.9019191 C22.0057803,17.1037683 22.0572843,17.2361284 22.1608459,17.3001024 C22.2638538,17.3640765 22.5230349,17.395512 22.9367277,17.395512 C24.2348482,17.395512 25.2366827,17.1263798 25.9422311,16.5870124 C26.6477796,16.0481966 27,15.193371 27,14.0230872 C27,13.3469477 26.8731785,12.7072072 26.6195355,12.1038658"
              id="Fill-16"
              fill="#FFFFFF"
            ></path>
          </g>
          <text
            id="¿Necesitas-ayuda?"
            fontFamily="Avenir-Black, Avenir"
            fontSize="8"
            fontWeight="700"
            line-spacing="8"
            fill="#FF0136"
          >
            <tspan x="0" y="48">
              ¿Necesitas ayuda?
            </tspan>
          </text>
        </g>
      </g>
    </g>
  </WrapperStyle>
);

ChiperWhatsAppAltIcon.propTypes = {
  clickEvent: PropTypes.func.isRequired,
};

export default ChiperWhatsAppAltIcon;
