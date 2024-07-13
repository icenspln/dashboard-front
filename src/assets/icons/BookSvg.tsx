import { BLUE } from "../../GLOBALS";
//blue is default value for fill

export default function BookSvg({ fill = BLUE }) {
  return (
    <>
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.75935 1.0834C6.25406 0.364705 4.15007 0.0126514 1.33322 0.000152453C1.06757 -0.00345679 0.807122 0.0740082 0.58662 0.222217C0.40563 0.344553 0.257474 0.509488 0.155185 0.702516C0.0528948 0.895545 -0.000395118 1.11075 2.20559e-06 1.32921V13.249C2.20559e-06 14.0548 0.573288 14.6627 1.33322 14.6627C4.29423 14.6627 7.26439 14.9393 9.04341 16.6208C9.06775 16.644 9.09834 16.6594 9.13138 16.6653C9.16442 16.6711 9.19846 16.6672 9.22927 16.6539C9.26007 16.6405 9.28628 16.6185 9.30465 16.5904C9.32301 16.5623 9.33272 16.5294 9.33255 16.4959V2.45078C9.33263 2.35602 9.31236 2.26235 9.27311 2.1761C9.23387 2.08984 9.17656 2.01302 9.10507 1.95082C8.69757 1.60245 8.24491 1.31067 7.75935 1.0834ZM19.4117 0.220967C19.1911 0.0731271 18.9306 -0.00390536 18.6651 0.000152453C15.8483 0.0126514 13.7443 0.363039 12.239 1.0834C11.7534 1.31026 11.3007 1.60146 10.8928 1.94916C10.8215 2.01146 10.7643 2.08832 10.7252 2.17455C10.686 2.26079 10.6658 2.3544 10.6658 2.44911V16.495C10.6658 16.5273 10.6753 16.5588 10.6931 16.5857C10.7109 16.6125 10.7363 16.6335 10.766 16.6461C10.7958 16.6586 10.8285 16.662 10.8602 16.656C10.8919 16.6499 10.9211 16.6347 10.9441 16.6121C12.0136 15.5497 13.8905 14.6614 18.6668 14.6618C19.0204 14.6618 19.3595 14.5214 19.6095 14.2714C19.8595 14.0213 20 13.6822 20 13.3286V1.32962C20.0005 1.11074 19.9471 0.895096 19.8445 0.701742C19.7419 0.508389 19.5932 0.343271 19.4117 0.220967Z"
          fill={fill}
          // fill="#2B8AF8"
        />
      </svg>
    </>
  );
}
