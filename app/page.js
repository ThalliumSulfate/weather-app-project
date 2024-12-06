import LoginCard from "./components/loginCard";

export default function Home() {
  return (
      <main>
          <div className="flex-1 flex justify-center items-center min-w-full min-h-screen">
              <div className='flex-1 self-center max-w-xl m-8'>
                  <LoginCard/>
              </div>
          </div>
      </main>
  );
}
