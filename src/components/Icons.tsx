import React from "react";

interface LogoProps {
  fontColor?: string;
}

export function Logo({fontColor} : LogoProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 27 33"
        className="w-[28px] h-[33px]"
      >
        <path fill="#0456D9" d="M26.289 12.763H0V33h26.289z"></path>
        <path fill="#0CA9DC" d="M19.918 24.207 0 33V12.763L19.918 3.97z"></path>
        <path fill="#57D6FF" d="M13.287 20.237 0 33V12.763L13.287 0z"></path>
      </svg>
      <p className={`pt-1 text-3xl font-bold ${fontColor=='white'?'text-white':''}`}>LIKE NOVEL</p>
    </>
  );
}

export function SearchIcon() {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10.5" cy="10.5" r="7" stroke="black" />
        <line
          x1="15.0922"
          y1="15.8851"
          x2="20.6149"
          y2="21.4078"
          stroke="black"
        />
      </svg>
    </>
  );
}

export function MessageIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.03028 20.5412H6.0849L6.65213 19.7471C7.06809 19.142 7.37061 18.4235 7.52187 17.4781C4.837 16.2681 3.40002 13.9992 3.40002 11.0118C3.40002 6.43614 6.84121 3.60001 12.4 3.60001C17.9589 3.60001 21.4 6.43614 21.4 11.0118C21.4 15.6252 18.0345 18.4235 12.4 18.4235C12.2866 18.4235 12.1353 18.4235 12.0219 18.4235C11.1143 19.4067 9.60171 20.5412 7.03028 20.5412ZM12.3244 4.5832C7.29498 4.5832 4.30759 6.96555 4.30759 11.0118C4.30759 14.4529 6.42524 16.0034 8.16473 16.7218L8.50507 16.8731L8.46725 17.2513C8.3538 18.121 8.16474 18.8773 7.86222 19.5202C9.67734 19.2933 10.7362 18.3857 11.3034 17.6294L11.4547 17.4403H11.795C11.9462 17.4403 12.1353 17.4403 12.2866 17.4403C19.5093 17.4403 20.3034 12.9403 20.3034 11.0118C20.3412 7.00337 17.3538 4.5832 12.3244 4.5832Z"
        fill="black"
      />
    </svg>
  );
}

export function ProfileIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20V18C20 16.9391 19.5786 15.9217 18.8284 15.1716C18.0783 14.4214 17.0609 14 16 14H8C6.93913 14 5.92172 14.4214 5.17157 15.1716C4.42143 15.9217 4 16.9391 4 18V20"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GiftIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 10.75H4.5V20.75H19.5V10.75Z"
        stroke="black"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.75 7H3.25V10.75H20.75V7Z"
        stroke="black"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.875 10.75H10.125V20.75H13.875V10.75Z"
        stroke="black"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.875 7H10.125V10.75H13.875V7Z"
        stroke="black"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.375L13.875 4.5L13.25 3.25H12H10.75L10.125 4.5L12 6.375Z"
        stroke="black"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.875 4.5L16.375 3.875L17.625 5.125V7"
        stroke="black"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.125 4.5L7.625 3.875L6.375 5.125V7"
        stroke="black"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AngleNextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13V11ZM16.7072 12.7071C17.0977 12.3166 17.0977 11.6834 16.7072 11.2929L10.3432 4.92893C9.95272 4.53841 9.31956 4.53841 8.92903 4.92893C8.53851 5.31946 8.53851 5.95262 8.92903 6.34315L14.5859 12L8.92903 17.6569C8.53851 18.0474 8.53851 18.6805 8.92903 19.0711C9.31956 19.4616 9.95272 19.4616 10.3432 19.0711L16.7072 12.7071ZM16 13H16.0001V11H16V13Z" />
    </svg>
  );
}

export function AnglePrevIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.6569 19.0711C15.0474 19.4616 15.6805 19.4616 16.0711 19.0711C16.4616 18.6805 16.4616 18.0474 16.0711 17.6569L10.4142 12L16.0711 6.34315C16.4616 5.95262 16.4616 5.31946 16.0711 4.92893C15.6805 4.53841 15.0474 4.53841 14.6569 4.92893L8.29289 11.2929ZM9.0001 13C9.55238 13 10.0001 12.5523 10.0001 12C10.0001 11.4477 9.55238 11 9.0001 11V13ZM9 13H9.0001V11H9V13Z" />
    </svg>
  );
}

export function AlarmIcon() {
  return (
    <div className="relative">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2784 12C19.0555 7.41614 15.787 4 12.0543 4C8.3216 4 5.05304 7.41614 4.83018 12H4.81818V18H19.2727V12H19.2784ZM2 18H3.81818V12H3.82928C4.0547 6.98572 7.65096 3 12.0543 3C16.4576 3 20.0539 6.98572 20.2793 12H20.2727V18H22V19H2V18ZM8.36364 22H15.6364V21H8.36364V22Z"
          fill="black"
        />
      </svg>
      <div className="bg-red-500 absolute top-[-4px] right-[-4px] w-[6px] h-[6px] rounded-full"></div>
    </div>
  );
}