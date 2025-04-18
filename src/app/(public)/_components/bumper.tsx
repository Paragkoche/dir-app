import Link from "next/link";

interface BumperProps {
  ctg: {
    url: string;
    name: string;
  }[];
}

const Bumper = (props: BumperProps) => {
  return (
    <div className="flex items-center gap-2 text-primary w-full">
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_52_202)">
          <g clipPath="url(#clip1_52_202)">
            <path d="M9 17L12.8971 10.25H5.10289L9 17Z" fill="#143AA2" />
            <path d="M13.5 10L17.3971 3.25H9.60289L13.5 10Z" fill="#143AA2" />
            <path d="M4.5 10L8.39711 3.25H0.60289L4.5 10Z" fill="#143AA2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_52_202">
            <rect width="17" height="17" fill="white" />
          </clipPath>
          <clipPath id="clip1_52_202">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p className="text-[#143AA2] uppercase flex justify-center">
        {props.ctg.map((v, i) => (
          <span className="flex items-center " key={i}>
            <Link href={v.url} className="hover:text-[#F3C31C]">
              {v.name}
            </Link>
            {i !== props.ctg.length - 1 && <span className="mx-1">/</span>}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Bumper;
