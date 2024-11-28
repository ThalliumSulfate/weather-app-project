import LoginCard from "./components/loginCard";
import Image from "next/image"
import Sky from "./res/Sky.jpg"

export default function Home() {
  return (
      <main>
          <Image className='object-cover -z-10' src={Sky} alt="" fill={true}/>
          <div className="flex-1 flex justify-center items-center min-w-full min-h-screen">
              <div className='flex-1 self-center max-w-xl m-8'>
                  <LoginCard/>
              </div>
          </div>
      </main>
  );
}
