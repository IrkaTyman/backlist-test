import React, {SVGAttributes} from 'react';

/** Component: close icon. */
export const CloseIcon = (props: SVGAttributes<any>) => (
    <svg role="img" width="20" height="20" fill="rgba(180, 187, 195, 0.65)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="10" cy="10" r="9.5" stroke="#FFFFFF"/>
        <path d="M6 6L14 14M6 14L14 6L6 14Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>
)

/** Component: delete icon. */
export const DeleteIcon = (props: SVGAttributes<any>) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8.125 1.25H11.875C12.0408 1.25 12.1997 1.31585 12.3169 1.43306C12.4342 1.55027 12.5 1.70924 12.5 1.875V3.125H7.5V1.875C7.5 1.70924 7.56585 1.55027 7.68306 1.43306C7.80027 1.31585 7.95924 1.25 8.125 1.25ZM13.75 3.125V1.875C13.75 1.37772 13.5525 0.900805 13.2008 0.549175C12.8492 0.197544 12.3723 0 11.875 0L8.125 0C7.62772 0 7.15081 0.197544 6.79917 0.549175C6.44754 0.900805 6.25 1.37772 6.25 1.875V3.125H3.1325C3.12833 3.12496 3.12417 3.12496 3.12 3.125H1.875C1.70924 3.125 1.55027 3.19085 1.43306 3.30806C1.31585 3.42527 1.25 3.58424 1.25 3.75C1.25 3.91576 1.31585 4.07473 1.43306 4.19194C1.55027 4.30915 1.70924 4.375 1.875 4.375H2.5475L3.61375 17.7C3.66403 18.3265 3.94844 18.9111 4.41034 19.3373C4.87224 19.7635 5.47774 20.0001 6.10625 20H13.8937C14.5223 20.0001 15.1278 19.7635 15.5897 19.3373C16.0516 18.9111 16.336 18.3265 16.3863 17.7L17.4525 4.375H18.125C18.2908 4.375 18.4497 4.30915 18.5669 4.19194C18.6842 4.07473 18.75 3.91576 18.75 3.75C18.75 3.58424 18.6842 3.42527 18.5669 3.30806C18.4497 3.19085 18.2908 3.125 18.125 3.125H16.8813C16.8771 3.12496 16.8729 3.12496 16.8687 3.125H13.75ZM16.1975 4.375L15.14 17.6C15.1149 17.9132 14.9727 18.2055 14.7417 18.4186C14.5108 18.6318 14.208 18.7501 13.8937 18.75H6.10625C5.792 18.7501 5.48925 18.6318 5.2583 18.4186C5.02735 18.2055 4.88514 17.9132 4.86 17.6L3.8025 4.375H16.1975ZM6.83875 5.625C7.00417 5.61544 7.16661 5.67195 7.29037 5.78212C7.41413 5.89229 7.48908 6.04709 7.49875 6.2125L8.12375 16.8375C8.13032 17.001 8.07252 17.1605 7.96277 17.2818C7.85302 17.4032 7.70007 17.4766 7.53676 17.4865C7.37345 17.4963 7.2128 17.4417 7.0893 17.3344C6.96581 17.227 6.88932 17.0756 6.87625 16.9125L6.25 6.2875C6.24493 6.20539 6.25611 6.12309 6.28291 6.04531C6.30972 5.96754 6.35161 5.89581 6.40619 5.83426C6.46077 5.77271 6.52697 5.72255 6.60098 5.68664C6.675 5.65072 6.75537 5.62978 6.8375 5.625H6.83875ZM13.1613 5.625C13.2434 5.62978 13.3238 5.65072 13.3978 5.68664C13.4718 5.72255 13.538 5.77271 13.5926 5.83426C13.6471 5.89581 13.689 5.96754 13.7158 6.04531C13.7426 6.12309 13.7538 6.20539 13.7487 6.2875L13.1237 16.9125C13.1204 16.9956 13.1005 17.0771 13.0653 17.1524C13.0301 17.2277 12.9802 17.2952 12.9185 17.3509C12.8569 17.4067 12.7847 17.4496 12.7063 17.4771C12.6279 17.5047 12.5447 17.5163 12.4617 17.5113C12.3788 17.5063 12.2976 17.4848 12.2231 17.4481C12.1485 17.4113 12.082 17.3601 12.0275 17.2974C11.973 17.2346 11.9315 17.1616 11.9055 17.0827C11.8796 17.0037 11.8696 16.9204 11.8763 16.8375L12.5013 6.2125C12.5109 6.04709 12.5859 5.89229 12.7096 5.78212C12.8334 5.67195 12.9958 5.61544 13.1613 5.625ZM10 5.625C10.1658 5.625 10.3247 5.69085 10.4419 5.80806C10.5592 5.92527 10.625 6.08424 10.625 6.25V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V6.25C9.375 6.08424 9.44085 5.92527 9.55806 5.80806C9.67527 5.69085 9.83424 5.625 10 5.625Z"/>
    </svg>
)

/** Component: card grid icon. */
export const CardGridIcon = (props: SVGAttributes<any>) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1.25 2.5C1.25 2.16848 1.3817 1.85054 1.61612 1.61612C1.85054 1.3817 2.16848 1.25 2.5 1.25H5C5.33152 1.25 5.64946 1.3817 5.88388 1.61612C6.1183 1.85054 6.25 2.16848 6.25 2.5V5C6.25 5.33152 6.1183 5.64946 5.88388 5.88388C5.64946 6.1183 5.33152 6.25 5 6.25H2.5C2.16848 6.25 1.85054 6.1183 1.61612 5.88388C1.3817 5.64946 1.25 5.33152 1.25 5V2.5ZM7.5 2.5C7.5 2.16848 7.6317 1.85054 7.86612 1.61612C8.10054 1.3817 8.41848 1.25 8.75 1.25H11.25C11.5815 1.25 11.8995 1.3817 12.1339 1.61612C12.3683 1.85054 12.5 2.16848 12.5 2.5V5C12.5 5.33152 12.3683 5.64946 12.1339 5.88388C11.8995 6.1183 11.5815 6.25 11.25 6.25H8.75C8.41848 6.25 8.10054 6.1183 7.86612 5.88388C7.6317 5.64946 7.5 5.33152 7.5 5V2.5ZM13.75 2.5C13.75 2.16848 13.8817 1.85054 14.1161 1.61612C14.3505 1.3817 14.6685 1.25 15 1.25H17.5C17.8315 1.25 18.1495 1.3817 18.3839 1.61612C18.6183 1.85054 18.75 2.16848 18.75 2.5V5C18.75 5.33152 18.6183 5.64946 18.3839 5.88388C18.1495 6.1183 17.8315 6.25 17.5 6.25H15C14.6685 6.25 14.3505 6.1183 14.1161 5.88388C13.8817 5.64946 13.75 5.33152 13.75 5V2.5ZM1.25 8.75C1.25 8.41848 1.3817 8.10054 1.61612 7.86612C1.85054 7.6317 2.16848 7.5 2.5 7.5H5C5.33152 7.5 5.64946 7.6317 5.88388 7.86612C6.1183 8.10054 6.25 8.41848 6.25 8.75V11.25C6.25 11.5815 6.1183 11.8995 5.88388 12.1339C5.64946 12.3683 5.33152 12.5 5 12.5H2.5C2.16848 12.5 1.85054 12.3683 1.61612 12.1339C1.3817 11.8995 1.25 11.5815 1.25 11.25V8.75ZM7.5 8.75C7.5 8.41848 7.6317 8.10054 7.86612 7.86612C8.10054 7.6317 8.41848 7.5 8.75 7.5H11.25C11.5815 7.5 11.8995 7.6317 12.1339 7.86612C12.3683 8.10054 12.5 8.41848 12.5 8.75V11.25C12.5 11.5815 12.3683 11.8995 12.1339 12.1339C11.8995 12.3683 11.5815 12.5 11.25 12.5H8.75C8.41848 12.5 8.10054 12.3683 7.86612 12.1339C7.6317 11.8995 7.5 11.5815 7.5 11.25V8.75ZM13.75 8.75C13.75 8.41848 13.8817 8.10054 14.1161 7.86612C14.3505 7.6317 14.6685 7.5 15 7.5H17.5C17.8315 7.5 18.1495 7.6317 18.3839 7.86612C18.6183 8.10054 18.75 8.41848 18.75 8.75V11.25C18.75 11.5815 18.6183 11.8995 18.3839 12.1339C18.1495 12.3683 17.8315 12.5 17.5 12.5H15C14.6685 12.5 14.3505 12.3683 14.1161 12.1339C13.8817 11.8995 13.75 11.5815 13.75 11.25V8.75ZM1.25 15C1.25 14.6685 1.3817 14.3505 1.61612 14.1161C1.85054 13.8817 2.16848 13.75 2.5 13.75H5C5.33152 13.75 5.64946 13.8817 5.88388 14.1161C6.1183 14.3505 6.25 14.6685 6.25 15V17.5C6.25 17.8315 6.1183 18.1495 5.88388 18.3839C5.64946 18.6183 5.33152 18.75 5 18.75H2.5C2.16848 18.75 1.85054 18.6183 1.61612 18.3839C1.3817 18.1495 1.25 17.8315 1.25 17.5V15ZM7.5 15C7.5 14.6685 7.6317 14.3505 7.86612 14.1161C8.10054 13.8817 8.41848 13.75 8.75 13.75H11.25C11.5815 13.75 11.8995 13.8817 12.1339 14.1161C12.3683 14.3505 12.5 14.6685 12.5 15V17.5C12.5 17.8315 12.3683 18.1495 12.1339 18.3839C11.8995 18.6183 11.5815 18.75 11.25 18.75H8.75C8.41848 18.75 8.10054 18.6183 7.86612 18.3839C7.6317 18.1495 7.5 17.8315 7.5 17.5V15ZM13.75 15C13.75 14.6685 13.8817 14.3505 14.1161 14.1161C14.3505 13.8817 14.6685 13.75 15 13.75H17.5C17.8315 13.75 18.1495 13.8817 18.3839 14.1161C18.6183 14.3505 18.75 14.6685 18.75 15V17.5C18.75 17.8315 18.6183 18.1495 18.3839 18.3839C18.1495 18.6183 17.8315 18.75 17.5 18.75H15C14.6685 18.75 14.3505 18.6183 14.1161 18.3839C13.8817 18.1495 13.75 17.8315 13.75 17.5V15Z"/>
    </svg>
)

/** Component: row grid icon. */
export const RowGridIcon = (props: SVGAttributes<any>) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M0.277344 17.2917C0.277344 17.0768 0.362702 16.8707 0.514642 16.7188C0.666581 16.5668 0.872654 16.4815 1.08753 16.4815H18.9116C19.1265 16.4815 19.3326 16.5668 19.4845 16.7188C19.6364 16.8707 19.7218 17.0768 19.7218 17.2917C19.7218 17.5065 19.6364 17.7126 19.4845 17.8646C19.3326 18.0165 19.1265 18.1019 18.9116 18.1019H1.08753C0.872654 18.1019 0.666581 18.0165 0.514642 17.8646C0.362702 17.7126 0.277344 17.5065 0.277344 17.2917ZM0.277344 12.4306C0.277344 12.2157 0.362702 12.0096 0.514642 11.8577C0.666581 11.7057 0.872654 11.6204 1.08753 11.6204H18.9116C19.1265 11.6204 19.3326 11.7057 19.4845 11.8577C19.6364 12.0096 19.7218 12.2157 19.7218 12.4306C19.7218 12.6454 19.6364 12.8515 19.4845 13.0034C19.3326 13.1554 19.1265 13.2407 18.9116 13.2407H1.08753C0.872654 13.2407 0.666581 13.1554 0.514642 13.0034C0.362702 12.8515 0.277344 12.6454 0.277344 12.4306ZM0.277344 7.56944C0.277344 7.35457 0.362702 7.1485 0.514642 6.99656C0.666581 6.84462 0.872654 6.75926 1.08753 6.75926H18.9116C19.1265 6.75926 19.3326 6.84462 19.4845 6.99656C19.6364 7.1485 19.7218 7.35457 19.7218 7.56944C19.7218 7.78432 19.6364 7.99039 19.4845 8.14233C19.3326 8.29427 19.1265 8.37963 18.9116 8.37963H1.08753C0.872654 8.37963 0.666581 8.29427 0.514642 8.14233C0.362702 7.99039 0.277344 7.78432 0.277344 7.56944ZM0.277344 2.70833C0.277344 2.49346 0.362702 2.28739 0.514642 2.13545C0.666581 1.98351 0.872654 1.89815 1.08753 1.89815H18.9116C19.1265 1.89815 19.3326 1.98351 19.4845 2.13545C19.6364 2.28739 19.7218 2.49346 19.7218 2.70833C19.7218 2.92321 19.6364 3.12928 19.4845 3.28122C19.3326 3.43316 19.1265 3.51852 18.9116 3.51852H1.08753C0.872654 3.51852 0.666581 3.43316 0.514642 3.28122C0.362702 3.12928 0.277344 2.92321 0.277344 2.70833Z"/>
    </svg>
)