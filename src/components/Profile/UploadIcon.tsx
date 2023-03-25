import { memo, SVGProps } from 'react';

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 72 49' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M36.764 18.1784H35.764V24.1784H29.764V25.1784H35.764V31.1784H36.764V25.1784H42.764V24.1784H36.764V18.1784Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(UploadIcon);
export { Memo as UploadIcon };
