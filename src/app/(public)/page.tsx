import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="px-2.5 w-full h-[440px] mb-5">
        <div className="w-full h-full overflow-hidden relative rounded-xl">
          <Image
            layout="fill" // Ensures the image fills the parent div
            objectFit="cover" // Prevents image distortion
            priority // Loads the image ASAP for performance
            className="w-full h-full overflow-hidden"
            src={
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="hero-image"
          />
        </div>
      </section>
    </>
  );
}
