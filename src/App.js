import DarkModeButton from './components/DarkModeButton'

const App = () => {
  // to style dark mode based on the class dark, just add dark: before the styling for dark mode.
  return (
    <div className='flex flex-col bg-red-200 h-screen'>
      <header className='flex justify-between align-middle bg-secondary p-4 shadow-md dark:bg-gray-700'>
        <h1 className='text-primary text-4xl dark:text-white'>Hello World!</h1>
        <DarkModeButton />
      </header>
      <main className='flex-grow'>
        <div className='post-card'>
          <p>Hello, is it me you're looking for?</p>
          <img src='/hi.jpg' alt='hand' />
          <p>Hello from the other side</p>
        </div>
      </main>
      {/* When you want to hover over one element, but change the styling of another you can use class names group and group-hover like shown below */}
      <footer className='bg-primary py-10 space-y-4 group'>
        <h1 className='text-white text-center text-md'>That's all for now</h1>
        <div className='rounded-full w-10 h-10 bg-red-500 mx-auto group-hover:bg-yellow-300' />
      </footer>
    </div>
  )
}

export default App
