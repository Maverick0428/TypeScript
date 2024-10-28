import { type Language } from "basehub/react-code-block";

// Define PartialBundledLanguage as Partial of BundledLanguage
type PartialBundledLanguage = Partial<Record<Language, React.ReactNode>>;

export const languagesIcons: PartialBundledLanguage = {
  javascript: (
    <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M0 0H16V16H0V0ZM12.2312 13.413C11.4896 13.413 11.0703 13.0262 10.748 12.5L9.52616 13.2099C9.96756 14.082 10.8697 14.7474 12.266 14.7474C13.694 14.7474 14.7574 14.0058 14.7574 12.6521C14.7574 11.3965 14.0361 10.838 12.7587 10.2902L12.3828 10.1292C11.7377 9.84985 11.4584 9.66725 11.4584 9.2162C11.4584 8.85125 11.7375 8.57188 12.1778 8.57188C12.6096 8.57188 12.8877 8.75398 13.1455 9.2162L14.3163 8.46445C13.821 7.59334 13.1338 7.26064 12.1778 7.26064C10.8351 7.26064 9.97594 8.11906 9.97594 9.24668C9.97594 10.4708 10.6967 11.0499 11.7817 11.5121L12.1575 11.6733C12.8432 11.9733 13.2521 12.1559 13.2521 12.6714C13.2521 13.1017 12.8542 13.413 12.2312 13.413ZM6.40438 13.4036C5.88781 13.4036 5.67295 13.0493 5.43676 12.6303L4.21289 13.3712C4.56743 14.1216 5.26457 14.7446 6.46838 14.7446C7.8007 14.7446 8.71346 14.036 8.71346 12.4792V7.34649H7.20997V12.4589C7.20997 13.2104 6.89835 13.4036 6.40438 13.4036Z"
        fill="#787882"
        fillRule="evenodd"
      />
    </svg>
  ),
};
