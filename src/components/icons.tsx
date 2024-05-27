import {
  ArrowLeft,
  Plus,
  ArrowUpDown,
  History,
  Search,
  Send,
  AtSign,
  UserPlus,
  Globe,
  Forward,
  MailX,
  KeyRound,
  Video,
  GraduationCap,
  FileQuestion,
  Network,
  UserRound,
  Headset,
  Wrench,
  SquarePen,
  SquareCheck,
  Waypoints,
  LogOut,
} from "lucide-react";
import React from "react";

type IconProps = React.HTMLAttributes<SVGElement> & {
  width?: number | string;
  height?: number | string;
};
export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="80"
      height="50"
      viewBox="0 0 332 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="bubble"
        d="M224 54C224 50.2858 224 48.4287 224.099 46.8605C225.68 21.719 245.719 1.68044 270.86 0.0986637C272.429 0 274.286 0 278 0C281.714 0 283.571 0 285.14 0.0986637C310.281 1.68044 330.32 21.719 331.901 46.8605C332 48.4287 332 50.2858 332 54V98.1818C332 102.719 332 104.988 330.635 106.433C330.57 106.502 330.502 106.57 330.433 106.635C328.988 108 326.719 108 322.182 108H278C274.286 108 277 108 274 108C271.5 108 268.5 108 268.5 108C268.5 108 265.5 100 264 97.5C263.385 96.4754 262.047 94.0573 260.5 92C258.273 89.0375 255.608 86.2866 254 85C251.073 82.658 246.158 79.827 241 78C235.353 76 224 75 224 75V62C224 62 224 57.7142 224 54Z"
        fill="#69D41A"
      />
      <path
        id="question-mark"
        d="M271.773 68.4666V67.4403C271.793 63.9188 272.105 61.1116 272.708 59.0188C273.332 56.926 274.238 55.2357 275.425 53.9478C276.612 52.6599 278.041 51.4928 279.711 50.4464C280.959 49.6415 282.076 48.8063 283.062 47.941C284.048 47.0758 284.833 46.1199 285.416 45.0735C286 44.007 286.292 42.8197 286.292 41.5117C286.292 40.1232 285.96 38.9058 285.295 37.8594C284.631 36.813 283.736 36.008 282.609 35.4446C281.502 34.8812 280.275 34.5994 278.926 34.5994C277.618 34.5994 276.381 34.8912 275.214 35.4748C274.047 36.0382 273.091 36.8834 272.346 38.0103C271.602 39.1171 271.199 40.4955 271.139 42.1456H258.824C258.924 38.121 259.89 34.8007 261.721 32.1847C263.552 29.5485 265.977 27.5865 268.996 26.2986C272.014 24.9906 275.345 24.3366 278.987 24.3366C282.991 24.3366 286.533 25.0007 289.612 26.3288C292.691 27.6368 295.105 29.5385 296.856 32.0337C298.607 34.529 299.482 37.5374 299.482 41.0589C299.482 43.4133 299.09 45.5062 298.305 47.3374C297.54 49.1484 296.464 50.7583 295.075 52.1669C293.687 53.5554 292.047 54.8131 290.155 55.94C288.565 56.8858 287.257 57.8718 286.231 58.8981C285.225 59.9244 284.47 61.1116 283.967 62.4599C283.484 63.8081 283.233 65.4683 283.213 67.4403V68.4666H271.773ZM277.749 87.7848C275.737 87.7848 274.016 87.0805 272.588 85.6719C271.179 84.2431 270.485 82.5327 270.505 80.5405C270.485 78.5684 271.179 76.8781 272.588 75.4695C274.016 74.0608 275.737 73.3565 277.749 73.3565C279.661 73.3565 281.341 74.0608 282.79 75.4695C284.239 76.8781 284.973 78.5684 284.994 80.5405C284.973 81.8686 284.621 83.0861 283.937 84.1928C283.273 85.2795 282.398 86.1548 281.311 86.8189C280.224 87.4628 279.037 87.7848 277.749 87.7848Z"
        fill="white"
      />
      <path
        className="fill-black dark:fill-white"
        id="bud"
        d="M11.0284 171V77.9091H48.3011C55.1496 77.9091 60.8617 78.9242 65.4375 80.9545C70.0133 82.9848 73.4527 85.803 75.7557 89.4091C78.0587 92.9848 79.2102 97.1061 79.2102 101.773C79.2102 105.409 78.483 108.606 77.0284 111.364C75.5739 114.091 73.5739 116.333 71.0284 118.091C68.5133 119.818 65.6345 121.045 62.392 121.773V122.682C65.9375 122.833 69.2557 123.833 72.3466 125.682C75.4678 127.53 77.9981 130.121 79.9375 133.455C81.8769 136.758 82.8466 140.697 82.8466 145.273C82.8466 150.212 81.6193 154.621 79.1648 158.5C76.7405 162.348 73.1496 165.394 68.392 167.636C63.6345 169.879 57.7708 171 50.8011 171H11.0284ZM30.7102 154.909H46.7557C52.2405 154.909 56.2405 153.864 58.7557 151.773C61.2708 149.652 62.5284 146.833 62.5284 143.318C62.5284 140.742 61.9072 138.47 60.6648 136.5C59.4224 134.53 57.6496 132.985 55.3466 131.864C53.0739 130.742 50.3617 130.182 47.2102 130.182H30.7102V154.909ZM30.7102 116.864H45.3011C47.9981 116.864 50.392 116.394 52.483 115.455C54.6042 114.485 56.2708 113.121 57.483 111.364C58.7254 109.606 59.3466 107.5 59.3466 105.045C59.3466 101.682 58.1496 98.9697 55.7557 96.9091C53.392 94.8485 50.0284 93.8182 45.6648 93.8182H30.7102V116.864ZM153.153 77.9091H172.835V138.364C172.835 145.152 171.214 151.091 167.972 156.182C164.759 161.273 160.259 165.242 154.472 168.091C148.684 170.909 141.941 172.318 134.244 172.318C126.517 172.318 119.759 170.909 113.972 168.091C108.184 165.242 103.684 161.273 100.472 156.182C97.2595 151.091 95.6534 145.152 95.6534 138.364V77.9091H115.335V136.682C115.335 140.227 116.108 143.379 117.653 146.136C119.229 148.894 121.441 151.061 124.29 152.636C127.138 154.212 130.456 155 134.244 155C138.063 155 141.381 154.212 144.199 152.636C147.047 151.061 149.244 148.894 150.79 146.136C152.366 143.379 153.153 140.227 153.153 136.682V77.9091ZM222.028 171H189.028V77.9091H222.301C231.665 77.9091 239.725 79.7727 246.483 83.5C253.241 87.197 258.438 92.5151 262.074 99.4545C265.741 106.394 267.574 114.697 267.574 124.364C267.574 134.061 265.741 142.394 262.074 149.364C258.438 156.333 253.21 161.682 246.392 165.409C239.604 169.136 231.483 171 222.028 171ZM208.71 154.136H221.21C227.028 154.136 231.922 153.106 235.892 151.045C239.892 148.955 242.892 145.727 244.892 141.364C246.922 136.97 247.938 131.303 247.938 124.364C247.938 117.485 246.922 111.864 244.892 107.5C242.892 103.136 239.907 99.9242 235.938 97.8636C231.968 95.803 227.074 94.7727 221.256 94.7727H208.71V154.136Z"
      />
    </svg>
  ),

  history: (props: IconProps) => <History {...props} />,
  add: (props: IconProps) => <Plus {...props} />,
  back: (props: IconProps) => <ArrowLeft {...props} />,
  arrowupdown: (props: IconProps) => <ArrowUpDown {...props} />,
  search: (props: IconProps) => <Search {...props} />,
  send: (props: IconProps) => <Send {...props} />,
  Plus: (props: IconProps) => <Plus {...props} />,
  AtSign: (props: IconProps) => <AtSign {...props} />,
  UserPlus: (props: IconProps) => <UserPlus {...props} />,
  Globe: (props: IconProps) => <Globe {...props} />,
  Forward: (props: IconProps) => <Forward {...props} />,
  MailX: (props: IconProps) => <MailX {...props} />,
  KeyRound: (props: IconProps) => <KeyRound {...props} />,
  Video: (props: IconProps) => <Video {...props} />,
  GraduationCap: (props: IconProps) => <GraduationCap {...props} />,
  FileQuestion: (props: IconProps) => <FileQuestion {...props} />,
  Network: (props: IconProps) => <Network {...props} />,
  UserRound: (props: IconProps) => <UserRound {...props} />,
  Headset: (props: IconProps) => <Headset {...props} />,
  Wrench: (props: IconProps) => <Wrench {...props} />,
  SquarePen: (props: IconProps) => <SquarePen {...props} />,
  SquareCheck: (props: IconProps) => <SquareCheck {...props} />,
  Waypoints: (props: IconProps) => <Waypoints {...props} />,
  LogOut: (props: IconProps) => <LogOut {...props} />,
};
